import "./Dashboard.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {DataTable} from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import  {FilterMatchMode} from "primereact/api";
import  {InputText} from "primereact/inputtext";                                 
        
        



function Template() {


  // const [adminData, setAdminData] = useState([]);

  // // function handleData(event){
  // //   setAdminData(event.target.value);
  // // }

  // useEffect(() => {
  //   axios.get('https://ascewebbackend.azurewebsites.net/Content/Admins/')
  //     .then(response => {setAdminData(response.data); console.log(response.data)})
  //     .catch(error => {console.error(error.message);});
  //     console.log('https://ascewebbackend.azurewebsites.net/Content/Admins/')
  // }, []);

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



  const [selectedStudents, setselectedStudents] = useState([]);
  const [selectedCompetitions, setselectedCompetitions] = useState([]);
  const [selectedAdmins, setselectedAdmins] = useState([]);
  const [filters, setFilters] = useState({});
  const [newAdmin, setnewAdmin] = useState({
    userName: '',
    passwd: '',
    name: '',
    email: '',
    adminLevel: '',
  });

  let test = "GA";
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
  ]

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


  const [selectedButton, setSelectedButton] = useState('Students');

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
      // let _adminData = [...adminData];
      // let { newData, index } = e;

      // _adminData[index] = newData;

      // setAdminData(_adminData);
      // const editRow = JSON.stringify(_adminData[index]);
      // console.log(editRow)
      console.log('Admin')
    }

  };

  function checkInputs(_newAdmin){
    const regexText = /^([a-zA-Z]+[’'`-]?[a-zA-Z]+[ ]?)+$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let hasError = false;
  
    if (!regexText.test(_newAdmin.userName)) {
      alert('incorrect username *ENTER ONLY LETTER*');
      hasError = true;
    }
    if(!regexText.test(_newAdmin.passwd)){
      alert('password *ENTER ONLY LETTER*');
      hasError = true;
    }
    if(!regexText.test(_newAdmin.name)){
      alert('name *ENTER ONLY LETTER*');
      hasError = true;
    }
    if(!regexEmail.test(_newAdmin.email)){
      alert('email');
      hasError = true;
    }

    return(!hasError);
  }


  const deleteInformation = (delInfo) => {

    if(selectedButton === 'Students'){
      if(delInfo.length !== 0 ){
        console.log(JSON.stringify(delInfo))
      }
    }
    if(selectedButton === 'Competitions'){
      if(delInfo.length !== 0 ){
        console.log(JSON.stringify(delInfo))
      }
    }
    if(selectedButton === 'Admin'){
      if(delInfo.length !== 0 ){
      console.log(JSON.stringify(delInfo))
      }
    }

  }

  const handleChange = (event) => {
    const { name, value} = event.target;
    setnewAdmin(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(checkInputs(newAdmin)){
      console.log(newAdmin);
    }

  };


  return (

    <>
      <div className="adminHeader">
        <ul>
        <li><button id={selectedButton === 'Students' ? 'selected' : ''} onClick={() => switchTable('Students') }>Students</button></li>
        <li><button id={selectedButton === 'Competitions' ? 'selected' : ''} onClick={() => switchTable('Competitions')}>Competitions</button></li>

        {test === 'GA' && (
        <li><button id={selectedButton === 'Admin' ? 'selected' : ''} onClick={() => switchTable('Admin')}>Admin</button></li>
        )}
        </ul>
     </div>
    
      <div className="Dashboard">
  
        {selectedButton === 'Students' && (
          <div id="Students">
            <h2 className="tableHeader">ASCE Chapter Members</h2>
            <div>{renderFilterInputs("Students")}</div>
            <button className="delete" onClick={() => deleteInformation(selectedStudents) }>Delete</button>
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
          </div>
        )}

        {selectedButton === 'Competitions' && (
            <div id="Competitions">
              <h2 className="tableHeader">Competition Sign-up</h2>
              <div>{renderFilterInputs('Competitions')}</div>
              <button className="delete" onClick={() => deleteInformation(selectedCompetitions) }>Delete</button>
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

            </div>
        )}

        {selectedButton === 'Admin' && (
          <div id="Admin">
            <h2 className="tableHeader">Admin Accounts</h2>
            <div>
              {renderFilterInputs("Admin")}
            </div>
            <button className="delete" onClick={() => deleteInformation(selectedAdmins) }>Delete</button>
            <DataTable
              editMode="row"
              onRowEditComplete={onRowEditComplete}
              filters={filters}
              paginator rows={5} rowsPerPageOptions={[5, 10, 20, 30]} 
              value={dataStudents} 
              selection={selectedAdmins} onSelectionChange={(e) => setselectedAdmins(e.value)}
              stripedRows 
              showGridlines
              removableSort 
              resizableColumns
              rowClassName={"custom-row"}
              sortMode="multiple"
            >
              <Column selectionMode="multiple" exportable={true}></Column>
              <Column field="idAdministrators" header="idadministrstor" editor={(options) => textEditor(options)} sortable />
              <Column field="name" header="Name" editor={(options) => textEditor(options)} sortable />
              <Column field="userName" header="username"sortable/>
              <Column field="password" header="password"/>
              <Column field="email" header="Email" sortable />
              <Column field="adminLevel" header="admin_level" sortable />
              <Column field="createdAt" header="created_at"sortable/>
              <Column field="updatedAt" header="updated_at"sortable/>
              <Column rowEditor headerStyle={{ width: '30px', minWidth: '30px' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>

            <h2 className="tableHeader addAccountSpacing">Add Admin Account</h2>
            <form onSubmit={handleSubmit}>

              <input className="p-inputtext" type="text" name="userName" placeholder="Username" onChange={handleChange} required/>
              <input className="p-inputtext" type="text" name="passwd" placeholder="Password" onChange={handleChange} required/>
              <input className="p-inputtext" type="text" name="name" placeholder="Name" onChange={handleChange} required/>
              <input className="p-inputtext" type="text" name="email" placeholder="Email" onChange={handleChange} required/>

              <p className="p-inputtext" id="adminLevel">Admin level:</p>
              <div className="p-radiobutton-box p-inputtext">
        
                <div className="radioGroup">
                <label className="p-inputtext" id="selectedColor" htmlFor="adminLevel">MA</label>                
                <input  type="radio"    name="adminLevel" value="MA" onChange={handleChange} required/>
                </div>

                <div className="radioGroup" >
                  <label className="p-inputtext" id="selectedColor" htmlFor="adminLevel">GA</label>
                  <input  type="radio"    name="adminLevel" value="GA" onChange={handleChange} required/>
                </div>

              </div>

              <input className="p-inputtext" id="submitButton" type="submit" />
              <label htmlFor="in"></label>

            </form>

          </div>
          
        )}
      </div>
    </>
    
  );
};

export default Template;
