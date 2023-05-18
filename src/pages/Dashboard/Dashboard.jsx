import "./Dashboard.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {DataTable} from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import  {FilterMatchMode} from "primereact/api";
import  {InputText} from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';                            

        



function Template() {

  const token = localStorage.getItem('token');

  if(token === null){
    window.location.href = '/AdminLogIn';
  }


  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  

  function handleBeforeUnload(event) {
    localStorage.removeItem('token');
  }

  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const adminType = decodedToken.level;
  const userName = decodedToken.username;

  function waitAndRedirect() {
    const currentTime = new Date().getTime() / 1000; // convert to seconds
    const timeDifference = decodedToken.exp_date - currentTime;
    if (timeDifference > 0) {
      setTimeout(() => {
        alert("Session Expired")
        window.location.href = '/AdminLogIn';
      }, timeDifference * 1000); // convert back to milliseconds
    } else {
      window.location.href = '/AdminLogIn';
    }
  }
  waitAndRedirect()

  const [dataAdmin, setdataAdmin] = useState([]);  
  useEffect(() => {
    if (adminType === 'MA' || adminType === "GA") {
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/admins/?masterAdminToken=${token}`)
        .then(response => {
            setdataAdmin(response.data.body); 
            console.log(response.data); 
            if(response.data.status_code === 401){
              window.location.href = '/AdminLogIn';
            }
          })
        .catch(error => {console.error(error.message);});
    }
  }, [adminType, token]);
  

  const [dataCompetitions, setDataCompetitions] = useState([]);
  useEffect(() => {
    if (adminType === 'MA' || adminType === 'GA') {
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/competitions/?masterAdminToken=${token}`)
        .then(response => {
          setDataCompetitions(response.data.body); 
          console.log(response.data) 
          if(response.data.status_code === 401){
            window.location.href = '/AdminLogIn';
          }
        })
        .catch(error => {console.error(error.message);});
    }
  }, [adminType, token]);
  

  const [dataStudents, setDataStudents] = useState([]);
  useEffect(() => {
    if (adminType === 'MA' || adminType === 'GA') {
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/members/?masterAdminToken=${token}`)
        .then(response => {
          setDataStudents(response.data.body); 
          if(response.data.status_code === 401){
            window.location.href = '/AdminLogIn';
          }
        })
        .catch(error => {console.error(error.message);});
    }
  }, [adminType, token]);
  

  

  const [newAdmin, setnewAdmin] = useState({
    userName: '',
    passwd: '',
    name: '',
    email: '',
    phone: '',
    adminLevel: ''
  });

  const [selectedStudents, setselectedStudents] = useState(null);
  const [selectedCompetitions, setselectedCompetitions] = useState(null);
  const [selectedAdmins, setselectedAdmins] = useState(null);
  const [filters, setFilters] = useState({});
  const [selectedButton, setSelectedButton] = useState('Students');
  const [visible, setVisible] = useState(false);

  const filterInputsStudents = [
    { field: "name", placeholder: "Filter by name" },
    { field: "email", placeholder: "Filter by email" },
  ];

  const filterInputsCompetitions = [
    { field: "name", placeholder: "Filter by name" },
    { field: "email", placeholder: "Filter by email" },
    { field: "Competitions", placeholder: "Filter by competitions" }
  ];

  const filterInputsAdmin = [
    { field: "name", placeholder: "Filter by name" },
    { field: "email", placeholder: "Filter by email" },
  ];

  function getData(){
    if(selectedButton === "Students" || selectedButton === "Competitions"){
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/members/?masterAdminToken=${token}`)
      .then(response => {setDataStudents(response.data.body); })
      .catch(error => {console.error(error.message);});

      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/competitions/?masterAdminToken=${token}`)
      .then(response => {setDataCompetitions(response.data.body); })
      .catch(error => {console.error(error.message);});
    }

    if(selectedButton === "Admin"){
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/admins/?masterAdminToken=${token}`)
      .then(response => {setdataAdmin(response.data.body); console.log(response.data)})
      .catch(error => {console.error(error.message);});
    }
  }

  const onInputChange = (e, field) => {
    const val = e.target.value;
    setFilters(prevFilters => ({ ...prevFilters, [field]: { value: val, matchMode: FilterMatchMode.CONTAINS } }));
  };

  const renderFilterInputs = (selected) => {
    
    let filterInputs = [];
    if (selected === "Students") {
      filterInputs = filterInputsStudents;
    } else if (selected === "Competitions") {
      filterInputs = filterInputsCompetitions;
    } else if (selected === "Admin") {
      filterInputs = filterInputsAdmin;
    }

      return (
        <div className="filter-inputs-container">
          {filterInputs.map(input => (
            <div key={input.field} className="p-col">
              <span className="p-float-label">
                <InputText id={input.field} value={filters[input.field]?.value || ""} onChange={e => onInputChange(e, input.field)} />
                <label htmlFor={input.field}>{input.placeholder}</label>
              </span>
            </div>
          ))}
        </div>
      );
  };




  const switchTable = (selected) => {
    setSelectedButton(selected);
  };

  const textEditor = (options) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  };
 
  const onRowEditComplete = (e) => {
    if(selectedButton === 'Students'){
      let _dataStudents = [...dataStudents];
      let { newData, index } = e;

  
      index = dataStudents.findIndex(dataStudents => dataStudents.email === _dataStudents[index].email);
      _dataStudents[index] = newData;

      setDataStudents(_dataStudents);
      const editRow = _dataStudents[index];
      updateRow(editRow, index);
    }
    if(selectedButton === 'Competitions'){
      let _dataCompetitions = [...dataCompetitions];
      let { newData, index } = e;

  
      index = dataCompetitions.findIndex(dataCompetitions => dataCompetitions.email === _dataCompetitions[index].email);
      _dataCompetitions[index] = newData;

      setDataCompetitions(_dataCompetitions);
      const editRow = _dataCompetitions[index];
      updateRow(editRow, index);

    }
    if(selectedButton === 'Admin'){
      let _dataAdmin = [...dataAdmin];
      let { newData, index } = e;

      _dataAdmin[index] = newData;
      
      const editRow = _dataAdmin[index];
      index = dataAdmin.findIndex(dataAdmin => dataAdmin.userName === editRow.userName);
      updateRow(editRow, index);
    }

  };

  function updateRow(editRow, index){
    
    if(selectedButton === "Students"){

      let link = `https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/update/members/updatefrommember?token=${token}&email=${dataStudents[index].email}`;
      let linkChanged = false;

      const properties = {
        email: 'newEmail',
        phone: 'newPhone',
        tshirt_size: 'newTshirt_size',
        age: 'newAge',
        bachelor: 'newBachelor',
        department: 'newDepartment',
        aca_years: 'newAcademic_Years',
        membership_paid: 'newMembership'
      };

      for (const prop in properties) {
        if (editRow[prop] !== dataStudents[index][prop]) {
          let value = editRow[prop];
          if (prop === 'phone') {
            value = value.replace(/-/g, "");
          }
          link = `${link}&${properties[prop]}=${value}`;
          linkChanged = true;
        }
      }

      if (linkChanged) {
        axios.put(link)
          .then((response) => {
            console.log(response.data);
            if (response.data.status_code === 201) {
              getData();
              alert(`${response.data.body}`);
            } else {
              alert(`${response.data.body}`);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert("NO CHANGES WERE MADE");
      }

    }

    if(selectedButton === "Competitions"){

  let link = `https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/update/competitionsmember/updatefromcompetitionsmember?token=${token}&email=${dataCompetitions[index].email}`;
  let linkChanged = false;

  const properties = {
    email: 'newEmail',
    phone: 'newPhone',
    asce_member: 'newAscemember',
    ascemembership: 'newAscemembership',
    competition_name: 'newCompetition_name',
    courses: 'newCourses',
    daily_availability: 'newDaily_Avail',
    travel_availability: 'newTravel',
    travel_june: 'newTravel_june',
    older_than_twentyfive: 'newOlder',
    heavy_driver: 'newHeavy',
    official_driver: 'newOffdriver',
    competitions_form: 'newCompetitions_form',
    experiences: 'newExperiences'
  };

  for (const prop in properties) {
    if (editRow[prop] !== dataCompetitions[index][prop]) {
      let value = editRow[prop];
      if (prop === 'phone') {
        value = value.replace(/-/g, "");
      }
      link = `${link}&${properties[prop]}=${value}`;
      linkChanged = true;
    }
  }
console.log(link)
  if (linkChanged) {
    axios.put(link)
      .then((response) => {
        console.log(response.data);
        if (response.data.status_code === 201) {
          getData();
          alert(`${response.data.body}`);
        } else {
          alert(`${response.data.body}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert("NO CHANGES WERE MADE");
  }


    }
    if(selectedButton === "Admin"){

      let link = `https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/update/admin/updatefromadmin/?userName=${editRow.userName}&masterAdminToken=${token}`;
      let linkChanged = false;

      const properties = {
        password: 'newPasswd',
        email: 'newEmail',
        phone: 'newPhone',
        adminLevel: 'newLevel'
      };

      for (const prop in properties) {
        if (editRow[prop] !== dataAdmin[index][prop]) {
          let value = editRow[prop];
          if (prop === 'phone') {
            value = value.replace(/-/g, "");
          }
          link = `${link}&${properties[prop]}=${value}`;
          linkChanged = true;
        }
      }

      if (linkChanged) {
        axios.put(link)
          .then((response) => {
            console.log(response.data);
            if (response.data.status_code === 201) {
              getData();
              alert(`${response.data.body}`);
            } else {
              alert(`${response.data.body}`);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert("NO CHANGES WERE MADE");
      }
    }

  }


  function checkAddAdminInputs(_newAdmin){
    const regexPassword = /[A-Z](?=.*[a-z])(?=.*\d)(?=.*[!@#$%&])[A-Za-z\d!@#$%&]{7,}$/;
    const regexUserName = /^[A-Z][A-Za-z0-9]*$/;
    const regexName = /^[A-Z][a-z]{2,}( [A-Z][a-z]{1,})+$/;
    const regexEmail = /^[a-z0-9_]+@[a-z]+(\.com)|[a-zA-Z]+_\d+@students\.pupr\.edu|[a-z]+@pupr\.edu$/;
    const regexPhone = /^[0-9]{10}$/;
    let hasError = false;
    
    
    if (!regexUserName.test(_newAdmin.userName)) {
      alert('incorrect username \n *USERNAME STARTS WITH UPPERCASE AND CAN ONLY CONTAIN LETTERS AND NUMBERS*');
      hasError = true;
    }
    if(!regexPassword.test(_newAdmin.passwd)){
      alert('incorrect password \n *PASSWORD NEDDS TO BE 8 CHARACTERS LONG* \n *PASSWORD STARTS WITH UPPERCASE AND MUST CONTAIN ATLEAST 1 LOWERCASE AND 1 SYMBOL*');
      hasError = true;
    }
    if(!regexName.test(_newAdmin.name)){
      alert('incorrect name \n *ENTER  FIRSTNAME AND  LASTNAME*');
      hasError = true;
    }
    if(!regexEmail.test(_newAdmin.email)){
      alert('incorrect email \n *ENTER A VALID EMAIL*');
      hasError = true;
    }
    if(!regexPhone.test(_newAdmin.phone)){
      alert('incorrect phone number \n *ENTER A VALID 10 DIGIT PHONE NUMBER*');
      hasError = true;
    }

    return(!hasError);
  }

  const deleteConfirmation = () =>{
    deleteInformation();
    setVisible(false);
  }

  const deleteInformation = () => {

    if(selectedButton === 'Students'){

      if(selectedStudents !== null){
        
        axios.delete(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/delete/members/deletemembers/?masterAdminToken=${token}&email=${selectedStudents.email}`)
        .then((response) => {
          console.log(response.data);
          if(response.data.status_code === 200){
            getData();
            alert(`${response.data.body}`);
            setselectedStudents(null)
          }else{
            alert(`${response.data.body}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });

      }else{
        alert("SELECT A MEMBER TO DELETE");
      }
    }
    if(selectedButton === 'Competitions'){
      
      if(selectedCompetitions !== null){
        
        axios.delete(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/delete/competitionsmember/deletecompetitionsmember/?masterAdminToken=${token}&email=${selectedCompetitions.email}`)
        .then((response) => {
          console.log(response.data);
          if(response.data.status_code === 200){
            getData();
            alert(`${response.data.body}`);
            setselectedCompetitions(null)
          }else{
            alert(`${response.data.body}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }else{
        alert("SELECT A COMPETITION SUBMITION TO DELETE");
      }

    }
    if(selectedButton === 'Admin'){
      console.log(selectedAdmins)
      if(selectedAdmins === null){
        
       alert("SELECT A USER TO DELETE");

      }else{
        axios.delete(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/delete/admin/deleteadminfromtable/?masterAdminToken=${token}&email=${selectedAdmins.email}`)
          .then((response) => {
            console.log(response.data);
            if(response.data.status_code === 200){
              getData();
              alert(`${response.data.body}`);
              setselectedAdmins(null)
            }else{
              alert(`${response.data.body}`);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function Logout(){
    console.log('test');
    localStorage.removeItem('token');
    window.location.href = '/AdminLogIn';
  }
  
  const handleAddAdminChange = (event) => {
    const { name, value} = event.target;
    setnewAdmin(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddAdmiinSubmit = (event) => {
    event.preventDefault();
    newAdmin.phone = newAdmin.phone.replace(/-/g, "");
    if(checkAddAdminInputs(newAdmin)){

      axios.post(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/create/admin/createadmin/?userName=${newAdmin.userName}&passwd=${newAdmin.passwd}&name=${newAdmin.name}&email=${newAdmin.email}&phone=${newAdmin.phone}&adminLevel=${newAdmin.adminLevel}&token=${token}`)
        .then((response) => {
          console.log(response.data);
          if(response.data.status_code === 201){
            console.log('Data changed')
            alert(`${response.data.body}`);
            getData();
            setnewAdmin("")
          }else{
            alert(`${response.data.body}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    }

  };


  return (

    <>
      <div className="Logout-button">
        <p>Welcome!  {userName}</p>
        <button  onClick={() => Logout()}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z" /></svg>
          Logout
          </button>
      </div>
      <div className="adminHeader">
        <ul>
        <li><button id={selectedButton === 'Students' ? 'selected' : ''} onClick={() => switchTable('Students') }>Students</button></li>
        <li><button id={selectedButton === 'Competitions' ? 'selected' : ''} onClick={() => switchTable('Competitions')}>Competitions</button></li>
        <li><button id={selectedButton === 'Admin' ? 'selected' : ''} onClick={() => switchTable('Admin')}>Admin</button></li>
        </ul>
     </div>      

      <div className="Dashboard">
  
        {selectedButton === 'Students' && (
          <div id="Students">
            <h2 className="tableHeader">ASCE Chapter Members</h2>
            <div>{renderFilterInputs("Students")}</div>
            {/* <button className="delete" onClick={() => deleteInformation(selectedStudents) }>Delete</button> */}
            {adminType === "MA" && (
              <button className="delete" onClick={() => setVisible(true) }>
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28"><path d="M264.666 957.333q-35.499 0-59.749-24.25t-24.25-59.749V313.333H140v-84h210.666v-38.666h260.001v38.666h210.666v84h-40.667v560.001q0 33.724-25.137 58.862-25.137 25.137-58.862 25.137H264.666Zm432.001-644H264.666v560.001h432.001V313.333ZM351 788.334h84V397h-84v391.334Zm176 0h84V397h-84v391.334ZM264.666 313.333v560.001-560.001Z"/></svg> 
                Delete
              </button>
            )}
            <DataTable
              editMode="row"
              filters={filters}
              paginator rows={5} rowsPerPageOptions={[5, 10, 20, 30]} 
              value={dataStudents} 
              stripedRows 
              showGridlines
              removableSort
              onRowEditComplete={onRowEditComplete}
              selection={selectedStudents} onSelectionChange={(e) => setselectedStudents(e.value)}
              resizableColumns
              rowClassName={"custom-row"}
              sortMode="multiple"
            >
              {adminType === "MA" && (
                <Column selectionMode="single" exportable={true}></Column>
              )}
              <Column field="idchapter_members" header="ID Chapter Member" sortable />
              <Column field="name" header="Name"  sortable />
              <Column field="email" header="Email" editor={(options) => textEditor(options)} sortable/>
              <Column field="phone" header="Phone Num." editor={(options) => textEditor(options)} sortable/>
              <Column field="tshirt_size" header="Shirt Size" editor={(options) => textEditor(options)} sortable/>
              <Column field="age" header="Age" editor={(options) => textEditor(options)} sortable />
              <Column field="bachelor" header="Bachelor" editor={(options) => textEditor(options)} sortable/>
              <Column field="department" header="Department" editor={(options) => textEditor(options)} sortable />
              <Column field="aca_years" header="Academic Year" editor={(options) => textEditor(options)} sortable/>
              <Column field="type" header="Member Type" sortable />
              <Column field="competitions_form" header="Competition Form"sortable/>
              <Column field="membership_paid" header="Paid Menmbership"  editor={(options) => textEditor(options)} sortable/>
              <Column field="membership_until" header="Membership Until"  sortable/> 
              <Column field="created_at" header="Created at"sortable/>
              <Column rowEditor headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>

            <div className="card flex justify-content-center">
              <Dialog header="WARNING" visible={visible} style={{ width: '25vw' }} onHide={() => setVisible(false)}>
                  <p className="m-0">
                    Are you sure you want to delete this Members?
                  </p>
                  <div className="cofinmation-button">
                    <div><button className="delete confirmation-yes"  onClick={() => deleteConfirmation()}>Yes</button></div>
                    <div><button className="delete confirmation" onClick={() => setVisible(false)}>No</button></div>
                  </div>
              </Dialog>
            </div>

          </div>
        )}

        {selectedButton === 'Competitions' && (
            <div id="Competitions">
              <h2 className="tableHeader">Competition Sign-up</h2>
              <div>{renderFilterInputs('Competitions')}</div>
              {/* <button className="delete" onClick={() => deleteInformation(selectedCompetitions) }>Delete</button> */}
              {adminType === "MA" && (
                <button className="delete" onClick={() => setVisible(true) }>
                  <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28"><path d="M264.666 957.333q-35.499 0-59.749-24.25t-24.25-59.749V313.333H140v-84h210.666v-38.666h260.001v38.666h210.666v84h-40.667v560.001q0 33.724-25.137 58.862-25.137 25.137-58.862 25.137H264.666Zm432.001-644H264.666v560.001h432.001V313.333ZM351 788.334h84V397h-84v391.334Zm176 0h84V397h-84v391.334ZM264.666 313.333v560.001-560.001Z"/></svg> 
                  Delete
                </button>
              )}
              <DataTable
              editMode="row"
              filters={filters}
              paginator rows={5} rowsPerPageOptions={[5, 10, 20, 30]} 
              value={dataCompetitions} 
              stripedRows 
              showGridlines
              removableSort
              onRowEditComplete={onRowEditComplete}
              selection={selectedCompetitions} onSelectionChange={(e) => setselectedCompetitions(e.value)}
              resizableColumns
              rowClassName={"custom-row"}
              sortMode="multiple"
              >
                {adminType === "MA" && (
                  <Column selectionMode="single" exportable={true}></Column>
                )}
                <Column field="idchapter_members" header="ID Chapter Member"/>
                <Column field="name" header="Name"  />
                <Column field="email" header="Email" editor={(options) => textEditor(options)} sortable/>
                <Column field="phone" header="Phone" editor={(options) => textEditor(options)} sortable/>
                <Column field="asce_member" header="ASCE Menber" editor={(options) => textEditor(options)} sortable/>
                <Column field="ascemembership" header="ASCE Menbership" editor={(options) => textEditor(options)} sortable/>
                <Column field="competition_name" header="Competitions"  body={rowData => <div className="multi-line">{rowData.competition_name}</div>} editor={(options) => textEditor(options)} sortable/>
                <Column field="daily_availability" header="Daily Availability" editor={(options) => textEditor(options)} />
                <Column field="courses" header="Recent Course" body={rowData => <div className="multi-line">{rowData.courses}</div>} editor={(options) => textEditor(options)} sortable/>
                <Column field="experiences" header="Experience" body={rowData => <div className="multi-line">{rowData.experiences}</div>} editor={(options) => textEditor(options)} />
                <Column field="travel_availability" header="Travel Availability" editor={(options) => textEditor(options)} sortable/>
                <Column field="travel_june" header="Travel Availability In June" editor={(options) => textEditor(options)} sortable/>
                <Column field="older_than_twentyfive" header="older25" editor={(options) => textEditor(options)} sortable/>
                <Column field="heavy_driver" header="Heavy Vehicle License" editor={(options) => textEditor(options)} sortable/>
                <Column field="official_driver" header="officialDriver" editor={(options) => textEditor(options)} sortable/>
                <Column field="created_at" header="Created At"sortable/>
                <Column field="competitions_form" header="Competitions Form" editor={(options) => textEditor(options)} sortable/>
                <Column rowEditor id="hidden" headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}/>
              </DataTable>

              <div className="card flex justify-content-center">
                <Dialog header="WARNING" visible={visible} style={{ width: '25vw' }} onHide={() => setVisible(false)}>
                    <p className="m-0">
                        Are you sure you want to delete this competition submissions?
                    </p>
                    <div className="cofinmation-button">
                      <div><button className="delete confirmation-yes"  onClick={() => deleteConfirmation()}>Yes</button></div>
                      <div><button className="delete confirmation" onClick={() => setVisible(false)}>No</button></div>
                    </div>
                </Dialog>
              </div>
            </div>
        )}

        {selectedButton === 'Admin' && (
          <div id="Admin">
            <h2 className="tableHeader">Admin Accounts</h2>
            <div>
              {renderFilterInputs("Admin")}
            </div>
            {adminType === "MA" && (
            <button className="delete" onClick={() => setVisible(true) }>
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28"><path d="M264.666 957.333q-35.499 0-59.749-24.25t-24.25-59.749V313.333H140v-84h210.666v-38.666h260.001v38.666h210.666v84h-40.667v560.001q0 33.724-25.137 58.862-25.137 25.137-58.862 25.137H264.666Zm432.001-644H264.666v560.001h432.001V313.333ZM351 788.334h84V397h-84v391.334Zm176 0h84V397h-84v391.334ZM264.666 313.333v560.001-560.001Z"/></svg> 
                Delete
            </button>
            )}
            <DataTable
              editMode="row"
              onRowEditComplete={onRowEditComplete}
              filters={filters}
              paginator rows={5} rowsPerPageOptions={[5, 10, 20, 30]} 
              value={dataAdmin} 
              selection={selectedAdmins} onSelectionChange={(e) => setselectedAdmins(e.value)}
              stripedRows 
              showGridlines
              removableSort 
              resizableColumns
              rowClassName={"custom-row"}
              sortMode="multiple"
            >
              {adminType === "MA" && (
              <Column selectionMode="single" exportable={true}></Column>
              )}
              <Column field="idAdministrators" header="idadministrstor"  sortable />
              <Column field="name" header="Name"  sortable />
              <Column field="userName" header="username"sortable/>
              {adminType === "MA" && (
              <Column field="password" header="password" editor={(options) => textEditor(options)}/>
              )}
              <Column field="email" header="Email" editor={(options) => textEditor(options)} sortable />
              <Column field="phone" header="Phone" editor={(options) => textEditor(options)} sortable/>
              <Column field="adminLevel" header="admin_level" editor={(options) => textEditor(options)} sortable />
              <Column field="createdAt" header="created_at"sortable/>
              <Column field="updatedAt" header="updated_at"sortable/>
              {adminType === "MA" && (
                <Column rowEditor  headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}/>
              )}
            </DataTable>
            {adminType === "MA" && (
              <div>
              <h2 className="tableHeader addAccountSpacing">Add Admin Account</h2>
              <form onSubmit={handleAddAdmiinSubmit}>

                <input className="p-inputtext" type="text" name="userName" placeholder="Username" onChange={handleAddAdminChange} required/>
                <input className="p-inputtext" type="text" name="passwd" placeholder="Password" onChange={handleAddAdminChange} required/>
                <input className="p-inputtext" type="text" name="name" placeholder="Name" onChange={handleAddAdminChange} required/>
                <input className="p-inputtext" type="email" name="email" placeholder="Email" onChange={handleAddAdminChange} required/>
                <input className="p-inputtext" type="number" name="phone" placeholder="Phone" onChange={handleAddAdminChange} required/>

                <p className="p-inputtext" id="adminLevel">Admin level:</p>
                <div className="p-radiobutton-box p-inputtext">
          
                  <div className="radioGroup">
                  <label className="p-inputtext" id="selectedColor" htmlFor="adminLevel">MA</label>                
                  <input  type="radio"    name="adminLevel" value="MA" onChange={handleAddAdminChange} required/>
                  </div>

                  <div className="radioGroup" >
                    <label className="p-inputtext" id="selectedColor" htmlFor="adminLevel">GA</label>
                    <input  type="radio"    name="adminLevel" value="GA" onChange={handleAddAdminChange} required/>
                  </div>

                </div>

                <input className="p-inputtext" id="submitButton" type="submit" />

              </form>
              </div>
            )}

            <div className="card flex justify-content-center">
              <Dialog header="WARNING" visible={visible} style={{ width: '25vw' }} onHide={() => setVisible(false)}>
                  <p className="m-0">
                      Are you sure you want to delete this user?
                  </p>
                  <div className="cofinmation-button">
                    <div><button className="delete confirmation-yes"  onClick={() => deleteConfirmation()}>Yes</button></div>
                    <div><button className="delete confirmation" onClick={() => setVisible(false)}>No</button></div>
                  </div>
              </Dialog>
            </div>


          </div>
          
        )}
      </div>
    </>
    
  );
};

export default Template;
