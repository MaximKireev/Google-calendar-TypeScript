import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { closeEventModalPopup } from "../../redux/actions/actionsUI";
import Draggable from "react-draggable";
import "./EventDetailsModalLayout.css";
import { selectCurrentSelectedEventId } from "../../redux/selectors";
import { useLocalStorageValue } from "../../hooks/useLocalStorageValue";
import { CalendarEventData } from "../../ts-generalTypes/InitialStateInterfaces";

export const EventDetailsModalLayout = (props: any) => {
	const { children } = props;
	const dispatch = useDispatch();
	const id = useSelector(selectCurrentSelectedEventId);
	const [events, setEvents] = useLocalStorageValue(undefined, "events");
	const filteredEventData = events.filter(
		(item: CalendarEventData) => item.uniqueEventId.toString() !== id
	);

	const deleteEventHandler = () => {
		setEvents([...filteredEventData])
	}

	return (
		<Draggable defaultPosition={{ x: 750, y: 250 }}>
			<div className="eventDetails-wrapper">
				<div className="controls">
					<Button shape="circle" icon={<EditOutlined />} size="middle" />
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
