import "./Dashboard.css";
import React, {useState} from "react";
import {DataTable} from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import  {FilterMatchMode} from "primereact/api";
import  {InputText} from "primereact/inputtext";                                 
        

function Template() {

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

  const dataAdmin = [
  {
    name: "Pedro",
    email: "pedro@gmail.com",
    phone: "6763913957",
    Position: "President"
  }
  ]


 const test = "";



  const [filters, setFilters] = useState({});

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


  return (

    <>
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
            <DataTable
              filters={filters}
              paginator rows={5} rowsPerPageOptions={[5, 10, 20, 30]} 
              value={dataStudents} 
              stripedRows 
              showGridlines
              removableSort 
              resizableColumns
              rowClassName={"custom-row"}
              sortMode="multiple"
            >
              <Column field="name" header="Name" sortable />
              <Column field="email" header="Email"sortable/>
              <Column field="phone" header="Phone Num." sortable />
              <Column field="shirtSize" header="shirtSize"sortable/>
              <Column field="age" header="Age" sortable />
              <Column field="bachelor" header="Bachelor"sortable/>
              <Column field="department" header="Department" sortable />
              <Column field="academicYear" header="Academic Year"sortable/>
              <Column field="paidMenmbership" header="Paid Menmbership"sortable/>
            </DataTable>
          </div>
        )}

        {selectedButton === 'Competitions' && (
            <div id="Competitions">
              <h2 className="tableHeader">Competition Sign-up</h2>
              <div>{renderFilterInputs('Competitions')}</div>
              <DataTable
              filters={filters}
              paginator rows={5} rowsPerPageOptions={[5, 10, 20, 30]} 
              value={dataCompetitions} 
              stripedRows 
              showGridlines
              removableSort 
              resizableColumns
              rowClassName={"custom-row"}
              sortMode="multiple"
              >
                <Column field="name" header="Name" sortable />
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
              </DataTable>

            </div>
          )}
        
        {selectedButton === 'Admin' && (
          <div id="Admin">
            <h2 className="tableHeader">Admin Accounts</h2>
            <div>{renderFilterInputs("Admin")}</div>
            <DataTable
              filters={filters}
              paginator rows={5} rowsPerPageOptions={[5, 10, 20, 30]} 
              value={dataAdmin} 
              stripedRows 
              showGridlines
              removableSort 
              resizableColumns
              rowClassName={"custom-row"}
              sortMode="multiple"
            >
              <Column field="idadministrstor" header="idadministrstor" sortable />
              <Column field="name" header="Name" sortable />
              <Column field="username" header="username"sortable/>
              <Column field="email" header="Email" sortable />
              <Column field="admin_level" header="admin_level" sortable />
              <Column field="created_at" header="created_at"sortable/>
              <Column field="updated_at" header="updated_at"sortable/>
            </DataTable>
          </div>
        )}

      </div>
    </>
    
  );
};

export default Template;
