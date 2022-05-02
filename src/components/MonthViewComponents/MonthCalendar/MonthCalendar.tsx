//import  Cell  from './Cell';
import './MonthCalendar.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import EventCreatorWindow from '../EventCreator/EventCreatorWindow'
import {ErrorBoundary} from "../../ErrorBoundary/ErrorBoundary";
import {selectCurrentCalendar} from '../../../redux/selectors'
//import {monthComponentWasLoaded} from '../../redux/actions'
import {OneDayCell} from '../OneDayCell/OneDayCell'


export const Calendar: React.FC = () => {
  const dispatch = useDispatch();
  const currentCalendar = useSelector(selectCurrentCalendar)
  console.log(currentCalendar)  
  //   const isEventCreatorWindowVisible = 
//   useSelector(selectIsEventCreatorWindowVisible);

//   React.useState(() => {
//     dispatch(monthComponentWasLoaded())
//       })
  return (
    <div className="calendar-wrapper">
<ErrorBoundary>
      {currentCalendar?.map((item, idx: number) => (
        <div key = {idx} className="weak-wrapper">
          {item.map( innerItem => 
        <OneDayCell 
        key = {innerItem.id} 
        fullItemData = {innerItem} />
          )}
        </div>
      ))}
      {/* {isEventCreatorWindowVisible? <EventCreatorWindow /> : null} */}
      </ErrorBoundary>
    </div>
  );
};



