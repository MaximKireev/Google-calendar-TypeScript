import React from 'react'
import './DayViewCalendar.css'

interface HourCellProps {
  time: string,
  currentSelectedDate: string
}

export const HourCell = ({time}: HourCellProps) => {
 const timeForId = time.split(":")



    return (
      <div
        className="hour-cell-wrapper"
      >
        <span className='time'>{time}</span>
        <div className= 'quarter-of-an-hour' id = {time}></div>
        <div className="quarter-of-an-hour" id = {`${timeForId[0]}:15`}></div>
        <div className="quarter-of-an-hour" id = {`${timeForId[0]}:30`}></div>
        <div className="quarter-of-an-hour" id = {`${timeForId[0]}:45`}></div>
      </div>
    );
  };
  