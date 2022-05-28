import React from "react";
import { useDispatch } from "react-redux";
import "./MonthCalendarEvent.css";
import { CalendarEventData } from "../../../ts-generalTypes/InitialStateInterfaces";
import { openEventModalPopup } from '../../../redux/actions/actionsUI'
import { setSelectedEventId } from '../../../redux/actions/actionsCalendar'

interface MonthCalendarEventProps {
	events: CalendarEventData,
	size?: string
}

export const MonthCalendarEvent = (props: MonthCalendarEventProps) => {
	const dispatch = useDispatch()
	const handleOnEventClick = () => {
		dispatch(setSelectedEventId(`${uniqueEventId}`))
		dispatch(openEventModalPopup())
	}

	const { uniqueEventId, description } = props.events;
	return (

		
		<div id={`${uniqueEventId}`} className="monthEvent" 
		onClick={handleOnEventClick}>
		<p className="monthEvent-description">{description}</p>
		</div>
	
		
		
	);
};
