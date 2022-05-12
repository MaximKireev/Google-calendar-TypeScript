import React from "react";
import { useSelector } from "react-redux";
import { EventDetailsModalLayout } from "../EventDetailsModalLayout";
import { selectCurrentSelectedEventId } from "../../../redux/selectors";
import { useLocalStorageValue } from "../../../hooks/useLocalStorageValue";
import { CalendarEventData } from "../../../ts-generalTypes/InitialStateInterfaces";

export const EventDetailsPopup = () => {
	const id = useSelector(selectCurrentSelectedEventId);
	const [events] = useLocalStorageValue(undefined, "events");
	const filteredEventData = events.filter(
		(item: CalendarEventData) => item.uniqueEventId.toString() === id
	);

	return (
		<EventDetailsModalLayout>
			<h2 className="event-title">{filteredEventData[0].title}</h2>
			<p className="event-duration">{`${filteredEventData[0].timeFrom} - ${filteredEventData[0].timeTo}`}</p>
			<p className="event-description">{filteredEventData[0].description}</p>
		</EventDetailsModalLayout>
	);
};
