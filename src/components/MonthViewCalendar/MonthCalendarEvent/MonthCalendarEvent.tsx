import React from "react";
import { useDispatch } from "react-redux";
import "./MonthCalendarEvent.css";
import { openEventModalPopup } from '../../../redux/ui-events/ui-events-actions'
import { setSelectedEventId } from '../../../redux/calendar-events/calendar-events-actions'
import {EventDataItem} from "../../../redux/calendar-events/calendar-events-reducer";

interface MonthCalendarEventProps {
	events: EventDataItem,
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

		
		<div id={`${uniqueEventId}`} 
		className="monthEvent" 
		onClick={handleOnEventClick}>
		<p className="monthEvent-description">{description}</p>
		</div>
	
		
		
	);
};
