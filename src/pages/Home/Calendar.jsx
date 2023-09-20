import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


export default function Calendar() { 
    
    return ( <> 
    <FullCalendar 
    plugins={[dayGridPlugin, bootstrap5Plugin]} 
    initialView="dayGridMonth" 
    events={[ { title: 'event 5', date: '2023-09-20' }, 
            { title: 'event 2', date: '2019-04-02' } ]} 
    themeSystem="bootstrap5"
    
    /> 
    
    </> ); 
    }