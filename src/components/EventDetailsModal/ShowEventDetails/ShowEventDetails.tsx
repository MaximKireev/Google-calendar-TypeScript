import React from 'react'
import { EventDetailsModalLayout } from "../EventDetailsModalLayout";

export const EventDetailsPopup = () => {
	return (
		<EventDetailsModalLayout>
			<h2 className="event-title">targetEvent[0].title</h2>
			<p className="event-duration">09:15 - 09:45</p>
			<p className="event-description">targetEvent[0].description</p>
		</EventDetailsModalLayout>
	);
};
