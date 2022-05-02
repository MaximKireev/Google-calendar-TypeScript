import "./OneDayCell.css";
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import { Badge } from 'antd';
import {useNavigate} from 'react-router-dom';
// import {
//   openEventCreatorWindow, 
//   setSelectedDate, 
//   setMouseCoordinates} from '../../redux/actions';
//   import {selectInitialEvents} from '../../redux/selectors'
//   import {EventInMonthView} from './EventInMothView/EventInMonthView.jsx'
import {DateObject} from '../../../ts-generalTypes/InitialStateInterfaces'

interface DayCellProps {
  fullItemData:  DateObject
}



  const OneDayCell: React.FC <DayCellProps> = ({fullItemData}) => {

    const { id, day, nextOrPrev, cell } = fullItemData;
    const dispatch = useDispatch()
    // const initialEvents = useSelector(selectInitialEvents)  
    // const renderEvents = initialEvents.filter(item => item.data === id);
 
  const createAnEvent = (event: MouseEvent) => {
    let x = event.offsetX;
    let y = event.offsetY;

//   if(!event.target.getAttribute('data-cell')) return;
//   else 
//   dispatch(setMouseCoordinates({clientX: x, clientY: y}))
//   dispatch(openEventCreatorWindow());
//   dispatch(setSelectedDate(id))}

  
//   const switchToDayComponent = () => {
//     dispatch(setSelectedDate(id))
//     navigate(`/day`, {replace: true})
//   };



  return (
    <div
    // onClick={createAnEvent} 
    key={id} 
    className={nextOrPrev? 'day-cell prevOrNextStyle': 'day-cell'}
    data-cell = {cell}>
       <Badge
    //    onClick = {switchToDayComponent}
       count={day} 
       style={{ 
       color: 'black', 
       backgroundColor: 'white',  
       fontSize: '16px',
       cursor: 'pointer' }}>
       </Badge>
      {/* {
        renderEvents?.map(item => 
          <EventInMonthView item = {item}/>)
      } */}
    </div>
  );
    }
  }
  export {OneDayCell}
