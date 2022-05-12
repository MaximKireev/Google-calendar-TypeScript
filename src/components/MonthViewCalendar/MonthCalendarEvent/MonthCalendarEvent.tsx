import React from "react";
import "./MonthCalendarEvent.css";
import { CalendarEventData } from "../../../ts-generalTypes/InitialStateInterfaces";

export const MonthCalendarEvent = (props: CalendarEventData) => {
	const { id, description } = props;
	return (
		<div id={id} className="monthEvent">
			<p className="monthEvent-description">{description}</p>
		</div>
	);
};
