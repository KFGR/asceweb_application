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
  const masterAdminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RpbmdBUElGcm9udEVuZDIiLCJleHBfZGF0ZSI6MTY4MzcyOTc1MC4wMTEzNjEsImxldmVsIjoiTUEifQ.yqC2fTXjRijXn8_hD0296zdr25UQg0oj0GZUcAB0Lt4";
  const [dataAdmin, setdataAdmin] = useState([]);

  useEffect(() => {
    axios.get(`https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/GET_ADMINS/?masterAdminToken=${masterAdminToken}`)
      .then(response => {setdataAdmin(response.data.body); console.log(response.data)})
      .catch(error => {console.error(error.message);});
  }, []);

  // const [dataCompetitions, setDataCompetitions] = useState([]);

  // useEffect(() => {
  //   axios.get('*INSERT getCompetitions API*')
  //     .then(response => {setDataCompetitions(response.data); console.log(response.data)})
  //     .catch(error => {console.error(error.message);});
  // }, []);

  //    DELETE THE VARIABLE BELOW WHEN YOU ADD THE GETCOMPETITIONS API ABOVE
  const dataCompetitions = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      ASCEMenber: true,
      ASCENumber: "123456",
      Weekday: "Monday",
      Competitions: "Steel Bridge, Concrete Canoe",
      recentCourse: "Structural Engineering",
      Experience: "2 years",
      Travel: true,
      travelJune: true,
      older25: false,
      heavyvehicleLicense: false,
      officialDriver: false
      },
      {
        name: "Emily Chen",
        email: "emily.chen@example.com",
        ASCEMenber: false,
        ASCENumber: "",
        Weekday: "Tuesday",
        Competitions: "Concrete Frisbee, Environmental",
        recentCourse: "Environmental Engineering",
        Experience: "1 year",
        Travel: true,
        travelJune: false,
        older25: false,
        heavyvehicleLicense: false,
        officialDriver: false
        },
        {
          name: "Michael Rodriguez",
          email: "michael.rodriguez@example.com",
          ASCEMenber: true,
          ASCENumber: "234567",
          Weekday: "Wednesday",
          Competitions: "Geotechnical, Pavement",
          recentCourse: "Geotechnical Engineering",
          Experience: "4 years",
          Travel: false,
          travelJune: false,
          older25: true,
          heavyvehicleLicense: false,
          officialDriver: true
        },
        {
          name: "Sophia Kim",
          email: "sophia.kim@example.com",
          ASCEMenber: false,
          ASCENumber: "",
          Weekday: "Thursday",
          Competitions: "Steel Bridge, Concrete Canoe",
          recentCourse: "Structural Engineering",
          Experience: "3 years",
          Travel: true,
          travelJune: true,
          older25: true,
          heavyvehicleLicense: false,
          officialDriver: false
        },
        {
          name: "Daniel Nguyen",
          email: "daniel.nguyen@example.com",
          ASCEMenber: true,
          ASCENumber: "345678",
          Weekday: "Friday",
          Competitions: "Environmental, Concrete Canoe",
          recentCourse: "Environmental Engineering",
          Experience: "6 years",
          Travel: true,
          travelJune: false,
          older25: true,
          heavyvehicleLicense: true,
          officialDriver: true
        },
        {
          name: "Jessica Lee",
          email: "jessica.lee@example.com",
          ASCEMenber: false,
          ASCENumber: "",
          Weekday: "Saturday",
          Competitions: "Geotechnical, Pavement",
          recentCourse: "Geotechnical Engineering",
          Experience: "2 years",
          Travel: true,
          travelJune: true,
          older25: false,
          heavyvehicleLicense: false,
          officialDriver: false
        },
        {
          name: "Brian Lee",
          email: "brian.lee@example.com",
          ASCEMenber: false,
          ASCENumber: "",
          Weekday: "Tuesday",
          Competitions: "Geotechnical, Environmental",
          recentCourse: "Geotechnical Engineering",
          Experience: "5 years",
          Travel: true,
          travelJune: false,
          older25: true,
          heavyvehicleLicense: false,
          officialDriver: false
        },
        {
          name: "David Kim",
          email: "david.kim@example.com",
          ASCEMenber: true,
          ASCENumber: "456789",
          Weekday: "Monday",
          Competitions: "Steel Bridge, Pavement",
          recentCourse: "Structural Engineering",
          Experience: "8 years",
          Travel: true,
          travelJune: true,
          older25: true,
          heavyvehicleLicense: true,
          officialDriver: true
        },
        {
          name: "Karen Wong",
          email: "karen.wong@example.com",
          ASCEMenber: false,
          ASCENumber: "",
          Weekday: "Wednesday",
          Competitions: "Environmental, Concrete Canoe",
          recentCourse: "Environmental Engineering",
          Experience: "2 years",
          Travel: true,
          travelJune: false,
          older25: true,
          heavyvehicleLicense: false,
          officialDriver: false
        }
  ]


  // const [dataStudents, setDataStudents] = useState([]);

  // useEffect(() => {
  //   axios.get('*INSERT getStudents API*')
  //     .then(response => {setDataStudents(response.data); console.log(response.data)})
  //     .catch(error => {console.error(error.message);});
  // }, []);

  //    DELETE THE VARIABLE BELOW WHEN YOU ADD THE GETSTUDENTS API ABOVE
  const dataStudents = [
    {
      name: "John",
      email: "john.smith@example.com",
      phone: "7871231234",
      shirtSize: "XL",
      age: "24",
      bachelor: "cs",
      department: "cs",
      academicYear: "3rd",
      paidMenmbership: "YES"
    },
    {
      name: "Pepe",
      email: "pepe.smith@example.com",
      phone: "7871231234",
      shirtSize: "L",
      age: "23",
      bachelor: "coe",
      department: "coe",
      academicYear: "2rd",
      paidMenmbership: "NO"
    }
  ]
  

  const [newAdmin, setnewAdmin] = useState({
    userName: '',
    passwd: '',
    name: '',
    email: '',
    phone: '',
    adminLevel: ''
  });

  // const [newPassword, setnewPassword] = useState({
  //   userName: '',
  //   oldpasswd: '',
  //   newpasswd: '',
  //   email: '',
  // });

  // const [newEmail, setnewEmail] = useState({
  //   userName: '',
  //   oldemail: '',
  //   newemail: '',
  // });

  const [selectedStudents, setselectedStudents] = useState([]);
  const [selectedCompetitions, setselectedCompetitions] = useState([]);
  const [selectedAdmins, setselectedAdmins] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedButton, setSelectedButton] = useState('Students');
  const [visible, setVisible] = useState(false);
  const adminType = "MA";

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
      // let _dataStudents = [...dataStudents];
      // let { newData, index } = e;

      // _dataStudents[index] = newData;

      // setdataStudents(_dataStudents);
      // const editRow = JSON.stringify(_dataStudents[index]);
      // console.log(editRow)
      console.log('students')
    }
    if(selectedButton === 'Competitions'){
      // let _dataCompetitions = [...dataCompetitions];
      // let { newData, index } = e;

      // _dataCompetitions[index] = newData;

      // setdataCompetitions(_dataCompetitions);
      // const editRow = JSON.stringify(_dataCompetitions[index]);
      // console.log(editRow)
      console.log('Competitions')
    }
    if(selectedButton === 'Admin'){
      let _dataAdmin = [...dataAdmin];
      let { newData, index } = e;

      _dataAdmin[index] = newData;

      setdataAdmin(_dataAdmin);
      const editRow = _dataAdmin[index];
      editRow.phone = editRow.phone.replace(/-/g, "");
      console.log(editRow)
      axios.put(`https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/CHANGE_PASSWD_EMAIL/?userName=${editRow.userName}&masterAdminToken=${masterAdminToken}&newPasswd=${editRow.password}&newEmail=${editRow.email}&newPhone=${editRow.phone}`)
      .then((response) => {
        console.log(response.data);
        if(response.data.status_code === 200){
          //reload page
        }else{
          alert(`${response.data.body}`)
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }

  };

  function checkInputs(_newAdmin){
    const regexPassword = /^[A-Z][a-zA-Z0-9]{7,}$/;
    const regexUserName = /^[A-Z][A-Za-z0-9]*$/;
    const regexName = /^[A-Z][A-Za-z\s]*$/;
    const regexEmail = /^[a-z0-9_]+@[a-z\.a-z]+(\.com)|[a-z0-9_]+@[a-z\.a-z]+(\.edu)$/;
    const regexPhone = /^[0-9]{10}$/;
    let hasError = false;
  
    if (!regexUserName.test(_newAdmin.userName)) {
      alert('incorrect username \n *USERNAME STARTS WITH UPPERCASE AND CAN ONLY CONTAIN NUMBERS*');
      hasError = true;
    }
    if(!regexPassword.test(_newAdmin.passwd)){
      alert('incorrect password \n *PASSWORD NEDDS TO BE 8 CHARACTERS LONG* \n *PASSWORD STARTS WITH UPPERCASE AND MUST CONTAIN 1 SYMBOL*');
      hasError = true;
    }
    if(!regexName.test(_newAdmin.name)){
      alert('incorrect name \n *ENTER ONLY LETTER*');
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
        //ADD DELETE API USING THIS VARIABLE ====>  selectedCompetitions
      }else{
        alert("SELECT A USER TO DELETE");
      }
    }
    if(selectedButton === 'Competitions'){
      

      if(selectedCompetitions.length !== 0){

        const deleteEmailsCompetitions = selectedCompetitions.map(obj => obj.email);
        console.log(deleteEmailsCompetitions)
        console.log("READY FOR API COMPETITIONS");
        //ADD DELETE API USING THIS VARIABLE ====>  selectedCompetitions
      }else{
        alert("SELECT A USER TO DELETE");
      }

    }
    if(selectedButton === 'Admin'){

      if(selectedAdmins.length !== 0){

        console.log(selectedAdmins.email);
        axios.delete(`https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/DEL_ACCOUNT/?masterAdminToken=${masterAdminToken}&email=${selectedAdmins.email}`)
          .then((response) => {
            console.log(response.data);
            if(response.data.status_code === 200){
              //reload page
            }else{
              alert(`${response.data.body}`)
            }
          })
          .catch((error) => {
            console.error(error);
          });

      }else{
        alert("SELECT A USER TO DELETE");
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
    if(checkInputs(newAdmin)){

      axios.post(`https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/CREATE_ACCOUNT/?userName=${newAdmin.userName}&passwd=${newAdmin.passwd}&name=${newAdmin.name}&email=${newAdmin.email}&phone=${newAdmin.phone}&adminLevel=${newAdmin.adminLevel}&masterAdminToken=${masterAdminToken}`)
        .then((response) => {
          console.log(response.data);
          if(response.data.status_code === 200){
            //reload page
          }else{
            alert(`${response.data.body}`)
          }
        })
        .catch((error) => {
          console.error(error);
        });

    }

  };

  // const handleNewPasswordChange = (event) => {
  //   const { name, value} = event.target;
  //   setnewPassword(prevState => ({ ...prevState, [name]: value }));
  // };

  // const handleNewPasswordSubmit = (event) => {
  //   event.preventDefault();
  //   if(checkInputs(newPassword)){
  //     console.log(newPassword);
  //   }

  // };

  // const handleNewEmailChange = (event) => {
  //   const { name, value} = event.target;
  //   setnewEmail(prevState => ({ ...prevState, [name]: value }));
  // };

  // const handleNewEmailSubmit = (event) => {
  //   event.preventDefault();
  //   if(checkInputs(newEmail)){
  //     console.log(newEmail);
  //   }

  // };


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
              <Column field="name" header="Name" sortable />
              <Column field="email" header="Email"sortable/>
              <Column field="phone" header="Phone Num." sortable />
              <Column field="shirtSize" header="shirtSize"sortable/>
              <Column field="age" header="Age" sortable />
              <Column field="bachelor" header="Bachelor"sortable/>
              <Column field="department" header="Department" sortable />
              <Column field="academicYear" header="Academic Year"sortable/>
              <Column field="paidMenmbership" header="Paid Menmbership"sortable/>
              <Column rowEditor headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>

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
                <Column field="name" header="Name" editor={(options) => textEditor(options)} sortable />
                <Column field="email" header="Email"sortable/>
                <Column field="ASCEMenber" header="ASCEMenber"sortable/>
                <Column field="ASCENumber" header="ASCENumber"sortable/>
                <Column field="Weekday" header="Weekday"/>
                <Column field="Competitions" header="Competitions"  body={rowData => <div className="multi-line">{rowData.Competitions}</div>} sortable/>
                <Column field="recentCourse" header="recentCourse" body={rowData => <div className="multi-line">{rowData.recentCourse}</div>} sortable/>
                <Column field="Experience" header="Experience" body={rowData => <div className="multi-line">{rowData.Experience}</div>} />
                <Column field="Travel" header="Travel"sortable/>
                <Column field="travelJune" header="travelJune"sortable/>
                <Column field="older25" header="older25"sortable/>
                <Column field="heavyvehicleLicense" header="heavyvehicleLicense"sortable/>
                <Column field="officialDriver" header="officialDriver"sortable/>
                <Column rowEditor headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}></Column>
              </DataTable>

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
              <Column field="adminLevel" header="admin_level" sortable />
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
