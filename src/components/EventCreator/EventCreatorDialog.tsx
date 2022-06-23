import React from "react";
import Draggable from "react-draggable";
import { TimePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import "antd/dist/antd.css";
import { toast } from "react-toastify";
import moment from 'moment';
import "./EventCreatorDialog.css";
import { closeEventCreatorWindow } from "../../redux/ui-events/ui-events-actions";
import { addNewEventToList } from "../../redux/calendar-events/calendar-events-actions";
import {
	getLocalStorageData,
	setLocalStorageData,
} from "../../helpers/local-storage-utils";
import { useInput } from "../../hooks/useInput";
import { useTextArea } from "../../hooks/useTextArea";
import { useTimePicker } from "../../hooks/useTimePicker";
import {selectCurrentSelectedEventId} from "../../redux/calendar-events/calendar-events-selectors";

const EventCreatorDialog = () => {
	const dispatch = useDispatch();
	const eventId = useSelector(selectCurrentSelectedEventId);
	const timePickerFromObj = useTimePicker("", true);
	const timePickerToObj = useTimePicker("", true);
	const inputValue = useInput("", true);
	const textAreaValue = useTextArea("", true);

	const storageValue = getLocalStorageData("events") || [];

	const generatedUniqueEventId = uniqid();

	const hadleFormData = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();
		
		let f: any = moment(timePickerFromObj.timeOption, 'HH:mm')
		let t: any = moment(timePickerToObj.timeOption, "HH:mm");
		if( f._d > t._d ){
			toast.error("Date From should be greater than date To!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 1500,
			});
			return}

		const payload = {
			uniqueEventId: generatedUniqueEventId,
			date: eventId,
			title: inputValue.value!,
			timeFrom: timePickerFromObj.timeOption,
			timeTo: timePickerToObj.timeOption,
			description: textAreaValue.value!,
		};
		dispatch(addNewEventToList(payload));

		setLocalStorageData("events", JSON.stringify([...storageValue, payload]));
		toast.success("Event succefully created!", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 2000,
		});
		setTimeout(() => dispatch(closeEventCreatorWindow()), 10);
	};

	return (
		<Draggable
			defaultPosition={{
				x: 750,
				y: 250,
			}}
		>
			<form onSubmit={hadleFormData} className="event-wrapper">
				<span className="event-data">{eventId}</span>
				<input className="task-input" {...inputValue} />
				{inputValue.error && (
					<span style={{ color: "red" }}>{inputValue.error}</span>
				)}

				<div
					style={{ display: "flex", justifyContent: "space-between" }}
					className="selectTime-wrapper"
				>
					<TimePicker format="HH:mm" minuteStep={15} {...timePickerFromObj} />
					<TimePicker format="HH:mm" {...timePickerToObj} minuteStep={15} />
				</div>
				<textarea
					className="task-description"
					cols={30}
					rows={10}
					{...textAreaValue}
				></textarea>
				{textAreaValue.error && (
					<span style={{ color: "red" }}>{textAreaValue.error}</span>
				)}

				<input type="submit" className="button-save" value={"Save task"} />

				<button
					type="submit"
					className="close"
					onClick={() => dispatch(closeEventCreatorWindow())}
				></button>
			</form>
		</Draggable>
	);
};

export default EventCreatorDialog;
