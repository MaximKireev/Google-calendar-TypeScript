import React from 'react';
import './YearViewCalendar.css'
import Calendar from '../MonthViewCalendar/MonthCalendar';
import { useSelector } from 'react-redux';
import {createYearCalendarMatrix} from '../../helpers/createYearCalendar';
import {selectCurrentDate} from "../../redux/calendar-events/calendar-events-selectors";

export const YearViewCalendar = () => {
    const {year} = useSelector(selectCurrentDate)!
    const month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (<div className='year-view-calendar'>
        {month.map( (calendar, idx) =><div className='month-in-year-wrapper'><h3>{`${calendar} ${year}`}</h3> 
        <Calendar 
        size = 'small'
        calendarMatrix = {createYearCalendarMatrix(new Date(Number(year), idx+1, 1))} /></div>)}
        
    </div>)
}