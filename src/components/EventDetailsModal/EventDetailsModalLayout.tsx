import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
	closeEventModalPopup,
	makeEventDetailsModalEditable,
} from "../../redux/ui-events/ui-events-actions";
import { deleteEvent } from "../../redux/calendar-events/calendar-events-actions";
import Draggable from "react-draggable";
import "./EventDetailsModalLayout.css";
import {
	getLocalStorageData,
	setLocalStorageData,
} from "../../helpers/local-storage-utils";
import {selectCurrentSelectedEventId} from "../../redux/calendar-events/calendar-events-selectors";
import {EventDataItem} from "../../redux/calendar-events/calendar-events-reducer";

export const EventDetailsModalLayout = (props: any) => {
	const { children } = props;
	const dispatch = useDispatch();
	const id = useSelector(selectCurrentSelectedEventId) || "";
	const events = getLocalStorageData("events");
	const filteredEventData = events.filter(
		(item: EventDataItem) => item.uniqueEventId.toString() !== id
	);

	const deleteEventHandler = () => {
		dispatch(deleteEvent(id));
		setLocalStorageData(
			"events",
			JSON.stringify([...filteredEventData])
		);
		setTimeout(() => dispatch(closeEventModalPopup()), 10);
	};

	return (
		<Draggable defaultPosition={{ x: 750, y: 250 }}>
			<div className="eventDetails-wrapper">
				<div className="controls">
					<Button
						shape="circle"
						icon={<EditOutlined />}
						size="middle"
						onClick={() => dispatch(makeEventDetailsModalEditable())}
					/>
					<Button
						shape="circle"
						icon={<DeleteOutlined />}
						danger
						size="middle"
						onClick={deleteEventHandler}
					/>
					<Button
						shape="circle"
						icon={<CloseOutlined />}
						size="middle"
						onClick={() => dispatch(closeEventModalPopup())}
					/>
				</div>

				{children}
			</div>
		</Draggable>
	);
};
