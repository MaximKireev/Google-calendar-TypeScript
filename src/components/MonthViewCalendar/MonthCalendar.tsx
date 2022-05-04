import './MonthCalendar.css'
import React from 'react';
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";
import {selectWeekDaysName, selectCurrentCalendar} from '../../redux/selectors'
import {useSelector} from 'react-redux'
import {CalendarHeaderCell} from './CalendarHeaderCell'
import {MonthCalendarCell} from './MonthCalendarCell'
import {createCalendarMatrix} from "../../helpers/createCalendar";
import {DayType} from "../../ts-generalTypes/propTypes";


const Calendar = () => {

    const weekDaysName = useSelector(selectWeekDaysName);

    // const selectedDay = useSelector(selectSelectedDay);
    // const onSetSelectedDay = useAction(setSelectedDay);

  const currentCalendar = createCalendarMatrix();

  const renderCalendarWeek = (week: DayType[]) => (
    <div className='week-wrapper'>
      {week.map(({id, day, isCurrentMonth}: DayType) => (
        <MonthCalendarCell key={id} id={id} day={day} isCurrentMonth={isCurrentMonth} />
      ))}
    </div>
  );
  
  return (
    <div className="calendar-wrapper">
      <ErrorBoundary>
      <div className="week-wrapper">
        {weekDaysName.map(({id, day}) => (
          <CalendarHeaderCell key={id} id={id} day={day}/>
        ))}
      </div>
      </ErrorBoundary>
      <ErrorBoundary>
        {currentCalendar.map(renderCalendarWeek)}
      </ErrorBoundary>
    </div>
  );
};



export default Calendar
