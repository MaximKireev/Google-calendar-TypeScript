import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { EventDetailsModalLayout } from "../EventDetailsModalLayout";
import {
	selectCurrentSelectedEventId,
	setIsEventModalEditable,
} from "../../../redux/selectors";
import { makeEventDetailsModalEditable } from "../../../redux/actions/actionsUI";

import { useLocalStorageValue } from "../../../hooks/useLocalStorageValue";
import { CalendarEventData } from "../../../ts-generalTypes/InitialStateInterfaces";
import './ShowEventDetails.css'

export const EventDetailsPopup = () => {
	const dispatch = useDispatch()
	const id = useSelector(selectCurrentSelectedEventId);
	const isEventModalEditable = useSelector(setIsEventModalEditable);

	const [events] = useLocalStorageValue(undefined, "events");
	const filteredEventData = events.filter(
		(item: CalendarEventData) => item.uniqueEventId.toString() === id
	);

	return (
		<EventDetailsModalLayout>
			<h2 className="event-title" 
				contentEditable={isEventModalEditable}
				>
				{filteredEventData[0].title}
			</h2>
			<p
				className="event-duration"
				contentEditable={isEventModalEditable}
			>{`${filteredEventData[0].timeFrom} - ${filteredEventData[0].timeTo}`}</p>
			<p className="event-description" contentEditable={isEventModalEditable}>
				{filteredEventData[0].description}
			</p>
			<div className = 'controls control-buttons'>
				<Button type="primary" 
				onClick={() => {}}
				disabled = {!isEventModalEditable}
				>Update event</Button>
				<Button 
				type="primary" 
				danger
				onClick={() => dispatch(makeEventDetailsModalEditable())}
				disabled = {!isEventModalEditable}
				>Cancel</Button>
				</div>
		</EventDetailsModalLayout>
	);
};
