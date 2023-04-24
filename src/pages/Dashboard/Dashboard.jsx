import "./Dashboard.css";
import React, {useState} from "react";
import {DataTable} from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import  {FilterMatchMode} from "primereact/api";
import  {InputText} from "primereact/inputtext";                                 
        

function Template() {

  const data = [
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

const [filters, setFilters] = useState({});

const filterInputs = [
  { field: "name", placeholder: "Filter by name" },
  { field: "email", placeholder: "Filter by email" },
  { field: "Competitions", placeholder: "Filter by competitions" }
];

const onInputChange = (e, field) => {
  const val = e.target.value;
  setFilters(prevFilters => ({ ...prevFilters, [field]: { value: val, matchMode: FilterMatchMode.CONTAINS } }));
};

const renderFilterInputs = () => {
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

  return (
    <div className="Dashboard">

      <div>{renderFilterInputs()}</div>

      <DataTable
      filters={filters} 
      value={data} 
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
  );
};

export default Template;
