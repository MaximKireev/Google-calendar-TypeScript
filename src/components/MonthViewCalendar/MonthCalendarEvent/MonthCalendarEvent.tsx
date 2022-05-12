import React from "react";
import { useDispatch } from "react-redux";
import "./MonthCalendarEvent.css";
import { CalendarEventData } from "../../../ts-generalTypes/InitialStateInterfaces";
import { openEventModalPopup } from '../../../redux/actions/actionsUI'

export const MonthCalendarEvent = (props: CalendarEventData) => {
	const dispatch = useDispatch()
	const { id, description } = props;
	return (
		<div id={id} className="monthEvent" 
		onClick={() => dispatch(openEventModalPopup(id))}>
			<p className="monthEvent-description">{description}</p>
		</div>
	);
};
