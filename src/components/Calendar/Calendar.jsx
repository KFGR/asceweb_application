import "./Calendar.css";
import React from "react";
import "./Calendar.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

function template() {
  return (
    <>
      {/* <h3>Event Calendar</h3> */}
      <div className="calendarsize">
        <FullCalendar
          plugins={[ dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          aspectRatio={1.5}
          // contentHeight={650}
          googleCalendarApiKey = "AIzaSyCSrHS44Yste7ErEJ1WAMSoi3XTOtGKStA"
          events = {{
            googleCalendarId: 'ascepuprchapter@gmail.com'
          }}
          
        />
      </div>

    </>
  );
};

export default template;

