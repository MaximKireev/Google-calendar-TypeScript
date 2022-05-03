import './CalendarHeaderCell.css'
import React from 'react'
import {CalendarDateObjectProps} from '../../ts-generalTypes/propTypes'





export const MonthCalendarCell: React.FC<CalendarDateObjectProps> = (props) => {
let {id, day, nextOrPrev} = props.dayprop

  return (
    <div
    key={id} 
    className={nextOrPrev? 'day-cell prevOrNextStyle' : 'day-cell' }>
    {day}
     
      
     {props.children}
    </div>
  );
};
