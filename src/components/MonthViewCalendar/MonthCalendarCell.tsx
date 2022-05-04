import './CalendarHeaderCell.css'
import React from 'react'
import {DayType} from '../../ts-generalTypes/propTypes'



type MonthCalendarCellProps = Pick<DayType, 'id' | 'day' | 'isCurrentMonth'> & {
  children?: JSX.Element,
}

export const MonthCalendarCell: React.FC<MonthCalendarCellProps> = (props) => {
  const {id, day, isCurrentMonth} = props

  return (
    <div
    key={id} 
    className={!isCurrentMonth? 'day-cell prevOrNextStyle' : 'day-cell' }
    >
      {day}
    </div>
  );
};
