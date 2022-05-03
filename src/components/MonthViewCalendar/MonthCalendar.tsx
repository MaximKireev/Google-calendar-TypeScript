import './MonthCalendar.css'
import React from 'react';
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";
import {selectWeekDaysName, selectCurrentCalendar} from '../../redux/selectors'
import {useSelector} from 'react-redux'
import {CalendarHeaderCell} from './CalendarHeaderCell'
import {MonthCalendarCell} from './MonthCalendarCell'


const Calendar = () => {

    const weekDaysName = useSelector(selectWeekDaysName);
    const currentCalendar = useSelector(selectCurrentCalendar)!
    
  
  return (
    <div className="calendar-wrapper">
      <ErrorBoundary>
      <div className="week-wrapper">
          {weekDaysName.map(item => <CalendarHeaderCell days={item}/>)}
          </div>
      </ErrorBoundary>
      <ErrorBoundary>
{currentCalendar.map((week: any) =>
<div className='week-wrapper'>
  {week.map((day: any) => <MonthCalendarCell dayprop = {day} />)}
</div>)}
      </ErrorBoundary>
    </div>
  );
};



export default Calendar
