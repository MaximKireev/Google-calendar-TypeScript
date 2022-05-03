import "./CalendarHeaderCell.css";
import React from 'react'
import {CalendarHeaderCellProps} from '../../ts-generalTypes/propTypes'




export const CalendarHeaderCell: React.FC<CalendarHeaderCellProps> = (props) => {
let {id, day} = props.days

  return (
    <div
    key={id} 
    className='day-cell'
    >
    {day}
     
      
     {props.children}
    </div>
  );
};


