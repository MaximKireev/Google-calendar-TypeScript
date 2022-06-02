import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import "./CalendarHeaderCell.css";
import { DayType } from "../../ts-generalTypes/propTypes";
import { MonthCalendarEvent } from "./MonthCalendarEvent/MonthCalendarEvent";
import { openEventCreatorWindow, changeCalendarView } from "../../redux/actions/actionsUI";
import { setSelectedEventId, setSelectedDate } from "../../redux/actions/actionsCalendar";
import { CalendarEventData } from "../../ts-generalTypes/InitialStateInterfaces";
import { setListOfEventsInStorage } from '../../redux/selectors'

type MonthCalendarCellProps = Pick <DayType, "id" | "day" | "isCurrentMonth" | 'isToday' | 'size'> & {
	children?: JSX.Element;
};

export const MonthCalendarCell: React.FC<MonthCalendarCellProps> = (props) => {
	const { id, day, isCurrentMonth, isToday, size } = props;
	const dispatch = useDispatch();
	const listOfEventsInStorage = useSelector(setListOfEventsInStorage)! || []
	const listOfEventsThisDay = listOfEventsInStorage.filter(
		(item: CalendarEventData) => item.date === id
	);
	const clickOnCellHandler = (event: React.MouseEvent) => {
		const currentTarget = event.target as HTMLDivElement;
		if(currentTarget.className.includes ("badge")){
			dispatch(changeCalendarView('day'))
			dispatch(setSelectedDate(id))
		}

		if (!currentTarget.className.includes("day-cell")) {
			return;
		} else {
			dispatch(setSelectedEventId(id));
			dispatch(openEventCreatorWindow());
		}
	};
let unniqueKey = uniqid()


	return (
		<div
			onClick={clickOnCellHandler}
			key={unniqueKey}
			className={size === 'small' ? "day-cell small" : !isCurrentMonth ? "day-cell prevOrNextStyle" :
			'day-cell'}
		>
		<div  
		className="badge"
		style={{backgroundColor: isToday? '#7982EC' : 'white', color:  isToday? 'white' : 'black'}}>{day}</div>	
			{size==='small' && listOfEventsThisDay.length > 0 ? <div className="calendar-small-events"></div>:
			 listOfEventsThisDay.map((event: CalendarEventData) => (
			<MonthCalendarEvent events = {event} size = {size}/>
			))}
		</div>
	);
};
