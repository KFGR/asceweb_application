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
  const token = "eyjhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG5UZXN0aW5nMSIsImV4cF9kYXRlIjoxNjg0MTE1MzM5LjkxMDE5NSwibGV2ZWwiOiJNQSJ9.KN1Jkl3vfH8P4qgiZy47QX37AF3pReoFcfgexnom-DY";
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const adminType = decodedToken.level;
  console.log(adminType);

  const [dataAdmin, setdataAdmin] = useState([]);  
  useEffect(() => {
    if (adminType === 'MA') {
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/admins/?masterAdminToken=${token}`)
        .then(response => {
            setdataAdmin(response.data.body); 
            console.log(response.data); 
            if(response.data.status_code === 401){
              window.location.href = '/Home';
            }
          })
        .catch(error => {console.error(error.message);});
    }
  }, [adminType]);
  

  const [dataCompetitions, setDataCompetitions] = useState([]);
  useEffect(() => {
    if (adminType === 'MA' || adminType === 'MA') {
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/competitions/?masterAdminToken=${token}`)
        .then(response => {
          setDataCompetitions(response.data.body); 
          console.log(response.data) 
          if(response.data.status_code === 401){
            window.location.href = '/Home';
          }
        })
        .catch(error => {console.error(error.message);});
    }
  }, [adminType]);
  

  const [dataStudents, setDataStudents] = useState([]);
  useEffect(() => {
    if (adminType === 'MA' || adminType === 'MA') {
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/members/?masterAdminToken=${token}`)
        .then(response => {
          setDataStudents(response.data.body); 
          if(response.data.status_code === 401){
            window.location.href = '/Home';
          }
        })
        .catch(error => {console.error(error.message);});
    }
  }, [adminType]);
  

  

  const [newAdmin, setnewAdmin] = useState({
    userName: '',
    passwd: '',
    name: '',
    email: '',
    phone: '',
    adminLevel: ''
  });

  const [selectedStudents, setselectedStudents] = useState([]);
  const [selectedCompetitions, setselectedCompetitions] = useState([]);
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
    { field: "Positions", placeholder: "Filter by Positions" }
  ];

  function getData(){
    if(selectedButton === "Students"){
      axios.get(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/user/table/members/?masterAdminToken=${token}`)
      .then(response => {setDataStudents(response.data.body); })
      .catch(error => {console.error(error.message);});
    }
    if(selectedButton === "Competitions"){
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

      _dataStudents[index] = newData;

      setDataStudents(_dataStudents);
      const editRow = _dataStudents[index];
      editRow.phone = editRow.phone.replace(/-/g, "");
      console.log(editRow);
      updateRow(editRow);
    }
    if(selectedButton === 'Competitions'){
      let _dataCompetitions = [...dataCompetitions];
      let { newData, index } = e;

      _dataCompetitions[index] = newData;

      setDataCompetitions(_dataCompetitions);
      const editRow = _dataCompetitions[index];
      editRow.phone = editRow.phone.replace(/-/g, "");
      console.log(editRow);
      updateRow(editRow);
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
      console.log('Students')
      axios.put(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/update/members/updatefrommember?token=${token}&name=${editRow.name}&email=${editRow.email}&phone=${editRow.phone}&tshirt_size=${editRow.tshirt_size}&age=${editRow.age}&bachelor=${editRow.bachelor}&department=${editRow.department}&Academic_Years=${editRow.aca_years}`)
      .then((response) => {
        console.log(response.data);
        if(response.data.status_code === 200){
          getData();
          alert(`${response.data.body}`);
        }else{
          alert(`${response.data.body}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    if(selectedButton === "Competitions"){
      console.log('Competitions')
    }
    if(selectedButton === "Admin"){

      let link = `https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/update/admin/updatefromadmin/?userName=${editRow.userName}&masterAdminToken=${token}`;
      let linkChanged = false;
      if(editRow.password !== dataAdmin[index].passwd){
        link = link + `&newPasswd=${editRow.password}`;
        linkChanged = true;
      }
      if(editRow.email !== dataAdmin[index].email){
        link = link + `&newEmail=${editRow.email}`;
        linkChanged = true;
      }
      if(editRow.phone !== dataAdmin[index].phone){
        editRow.phone = editRow.phone.replace(/-/g, "");
        link = link + `&newPhone=${editRow.phone}`;
        linkChanged = true;
      }
      if(editRow.adminLevel !== dataAdmin[index].adminLevel){
        link = link + `&newLevel=${editRow.adminLevel}`;
        linkChanged = true;
      }
      if(linkChanged){
        axios.put(link)
        .then((response) => {
          console.log(response.data);
          if(response.data.status_code === 201){
            getData();
            alert(`${response.data.body}`);
          }else{
            alert(`${response.data.body}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });

      }else{
        alert("NO CHANGES WERE MADE")
      }

    }

  }


  function checkAddAdminInputs(_newAdmin){
    const regexPassword = /[A-Z](?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_+={}[\]:;"'<>,.?/]{7,}$/;
    const regexUserName = /^[A-Z][A-Za-z0-9]*$/;
    const regexName = /^[A-Z][a-z]{2,}( [A-Z][a-z]{1,})+$/;
    const regexEmail = /^[a-z0-9_]+@[a-z\.a-z]+(\.com)|[a-z0-9_]+@[a-z\.a-z]+(\.edu)$/;
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

      if(selectedStudents.length !== 0){

        const deleteEmailsStudents = selectedStudents.map(obj => obj.email);
        console.log(deleteEmailsStudents);
        console.log("READY FOR API STUDENTS");
        
        // axios.delete(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/delete/members/deletemembers/?masterAdminToken=${token}&email=${deleteEmailsStudents}`)
        // .then((response) => {
        //   console.log(response.data);
        //   if(response.data.status_code === 200){
        //     getData();
        //     alert(`${response.data.body}`);
        //     setselectedStudents("")
        //   }else{
        //     alert(`${response.data.body}`);
        //   }
        // })
        // .catch((error) => {
        //   console.error(error);
        // });

      }else{
        alert("SELECT A MEMBER TO DELETE");
      }
    }
    if(selectedButton === 'Competitions'){
      
      if(selectedCompetitions.length !== 0){

        const deleteEmailsCompetitions = selectedCompetitions.map(obj => obj.email);
        console.log(deleteEmailsCompetitions)
        console.log("READY FOR API COMPETITIONS");
        
        // axios.delete(`https://ascewebbackend.azurewebsites.net/ascepupr/dashboard/admin/table/delete/competitionsmember/deletecompetitionsmember/?masterAdminToken=${token}&email=${deleteEmailsCompetitions}`)
        // .then((response) => {
        //   console.log(response.data);
        //   if(response.data.status_code === 200){
        //     getData();
        //     alert(`${response.data.body}`);
        //     setselectedCompetitions("")
        //   }else{
        //     alert(`${response.data.body}`);
        //   }
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
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
      <div className="adminHeader">
        <ul>
        <li><button id={selectedButton === 'Students' ? 'selected' : ''} onClick={() => switchTable('Students') }>Students</button></li>
        <li><button id={selectedButton === 'Competitions' ? 'selected' : ''} onClick={() => switchTable('Competitions')}>Competitions</button></li>

        {adminType === 'MA' && (
        <li><button id={selectedButton === 'Admin' ? 'selected' : ''} onClick={() => switchTable('Admin')}>Admin</button></li>
        )}
        </ul>
     </div>
    
      <div className="Dashboard">
  
        {selectedButton === 'Students' && (
          <div id="Students">
            <h2 className="tableHeader">ASCE Chapter Members</h2>
            <div>{renderFilterInputs("Students")}</div>
            {/* <button className="delete" onClick={() => deleteInformation(selectedStudents) }>Delete</button> */}
            <button className="delete" onClick={() => setVisible(true) }>Delete</button>
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
              <Column selectionMode="multiple" exportable={true}></Column>
              <Column field="idchapter_members" header="ID Chapter Member" sortable />
              <Column field="name" header="Name" editor={(options) => textEditor(options)} sortable />
              <Column field="email" header="Email" editor={(options) => textEditor(options)} sortable/>
              <Column field="phone" header="Phone Num." editor={(options) => textEditor(options)} sortable/>
              <Column field="tshirt_size" header="Shirt Size" editor={(options) => textEditor(options)} sortable/>
              <Column field="age" header="Age" editor={(options) => textEditor(options)} sortable />
              <Column field="bachelor" header="Bachelor" editor={(options) => textEditor(options)} sortable/>
              <Column field="department" header="Department" editor={(options) => textEditor(options)} sortable />
              <Column field="aca_years" header="Academic Year" editor={(options) => textEditor(options)} sortable/>
              <Column field="type" header="Member Type" sortable />
              <Column field="competitions_form" header="Competition Form"sortable/>
              {/* Make editable */}
              <Column field="membership_paid" header="Paid Menmbership"  sortable/>
              {/* Make editable */}
              <Column field="membership_until" header="Membership Until"  sortable/> 
              <Column field="created_at" header="Created at"sortable/>
              <Column rowEditor headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>

            <div className="card flex justify-content-center">
              <Dialog header="WARNING" visible={visible} style={{ width: '25vw' }} onHide={() => setVisible(false)}>
                  <p className="m-0">
                    Are you sure you want to delete {selectedStudents.length} Members?
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
              <button className="delete" onClick={() => setVisible(true) }>Delete</button>
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
                <Column selectionMode="multiple" exportable={true}></Column>
                <Column field="idchapter_members" header="ID Chapter Member"/>
                <Column field="name" header="Name"  />
                <Column field="email" header="Email"sortable/>
                <Column field="phone" header="Phone"sortable/>
                <Column field="ascemembership" header="ASCE Menbership"sortable/>
                <Column field="competition_name" header="Competitions"  body={rowData => <div className="multi-line">{rowData.competition_name}</div>} sortable/>
                <Column field="daily_availability" header="Daily Availability"/>
                <Column field="courses" header="Recent Course" body={rowData => <div className="multi-line">{rowData.courses}</div>} sortable/>
                {/* <Column field="Experience" header="Experience" body={rowData => <div className="multi-line">{rowData.Experience}</div>} /> */}
                <Column field="travel_availability" header="Travel Availability"sortable/>
                {/* <Column field="travelJune" header="Travel Availability In June"sortable/> */}
                <Column field="older_than_twentyfive" header="older25"sortable/>
                <Column field="heavy_driver" header="Heavy Vehicle License"sortable/>
                <Column field="official_driver" header="officialDriver"sortable/>
                <Column field="created_at" header="Created At"sortable/>
                <Column field="competitions_form" header="Competitions Form"sortable/>
                <Column rowEditor headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}></Column>
              </DataTable>

              <div className="card flex justify-content-center">
                <Dialog header="WARNING" visible={visible} style={{ width: '25vw' }} onHide={() => setVisible(false)}>
                    <p className="m-0">
                        Are you sure you want to delete {selectedCompetitions.length} competition submissions?
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
            {/* <button className="delete" onClick={() => deleteInformation() }>Delete</button> */}
            <button className="delete" onClick={() => setVisible(true) }>Delete</button>
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
              <Column selectionMode="single" exportable={true}></Column>
              <Column field="idAdministrators" header="idadministrstor"  sortable />
              <Column field="name" header="Name"  sortable />
              <Column field="userName" header="username"sortable/>
              <Column field="password" header="password" editor={(options) => textEditor(options)}/>
              <Column field="email" header="Email" editor={(options) => textEditor(options)} sortable />
              <Column field="phone" header="Phone" editor={(options) => textEditor(options)} sortable/>
              <Column field="adminLevel" header="admin_level" editor={(options) => textEditor(options)} sortable />
              <Column field="createdAt" header="created_at"sortable/>
              <Column field="updatedAt" header="updated_at"sortable/>
              <Column rowEditor headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>

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

            {/* <h2 className="tableHeader addAccountSpacing">Change Password</h2>
            <form onSubmit={handleNewPasswordSubmit}>

              <input className="p-inputtext" type="text" name="userName" placeholder="Username" onChange={handleNewPasswordChange} required/>
              <input className="p-inputtext" type="text" name="oldpasswd" placeholder="oldPassword" onChange={handleNewPasswordChange} required/>
              <input className="p-inputtext" type="text" name="newpasswd" placeholder="newPassword" onChange={handleNewPasswordChange} required/>
              <input className="p-inputtext" type="text" name="email" placeholder="Email" onChange={handleNewPasswordChange} required/>
              <input className="p-inputtext" id="submitButton" type="submit" />

            </form>

            <h2 className="tableHeader addAccountSpacing">Change Email</h2>
            <form onSubmit={handleNewEmailSubmit}>

              <input className="p-inputtext" type="text" name="userName" placeholder="Username" onChange={handleNewEmailChange} required/>
              <input className="p-inputtext" type="text" name="oldemail" placeholder="oldEmail" onChange={handleNewEmailChange} required/>
              <input className="p-inputtext" type="text" name="newemail" placeholder="newEmail" onChange={handleNewEmailChange} required/>
              <input className="p-inputtext" type="text" name="email" placeholder="Email" onChange={handleNewEmailChange} required/>
              <input className="p-inputtext" id="submitButton" type="submit" />

            </form> */}

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
