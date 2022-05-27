import React from "react";
import Draggable from "react-draggable";
import { TimePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import "antd/dist/antd.css";
import "./EventCreatorDialog.css";
import { closeEventCreatorWindow } from "../../redux/actions/actionsUI";
import { addNewEventToList } from "../../redux/actions/actionsCalendar";
import { useLocalStorageValue } from "../../hooks/useLocalStorageValue";
import { selectCurrentSelectedEventId } from "../../redux/selectors";
import { useInput, useTextArea } from "../../hooks/useFormElements";

const EventCreatorDialog = () => {
	const dispatch = useDispatch();
	const eventId = useSelector(selectCurrentSelectedEventId);
	const [timeFrom, setTimeFrom] = React.useState("");
	const [timeTo, setTimeTo] = React.useState("");
	const inputValue = useInput('', true);
	const textAreaValue = useTextArea('', true);
	

	const [storageValue, setStorageValue] = useLocalStorageValue(
		undefined,
		"events"
	);

	const generatedUniqueEventId = uniqid();


	const timeFromHandler = (item: any) => {
		let date = new Date(item._d);
		setTimeFrom(`${date.getHours()}:${date.getMinutes()}`);
	};
	const timeToHandler = (item: any) => {
		let date = new Date(item._d);
		setTimeTo(`${date.getHours()}:${date.getMinutes()}`);
	};
	const hadleFormData = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();
		const payload = {
			uniqueEventId: generatedUniqueEventId,
			date: eventId,
			title: inputValue.value!,
			timeFrom: timeFrom,
			timeTo: timeTo,
			description: textAreaValue.value!,
		};
		dispatch(addNewEventToList(payload));

		setStorageValue([...storageValue, payload]);

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
				<span className="event-data"></span>
				<input
				className="task-input"
				{...inputValue}/>
				{inputValue.error && <span style={{ color: 'red'}}>{inputValue.error}</span>}

				<div
					style={{ display: "flex", justifyContent: "space-between" }}
					className="selectTime-wrapper"
				>
					<TimePicker
						format="HH:mm"
						onSelect={(item) => timeFromHandler(item)}
						minuteStep={15}
					/>
					<TimePicker
						format="HH:mm"
						onSelect={(item) => timeToHandler(item)}
						minuteStep={15}
					/>
				</div>
				<textarea
					className="task-description"
					cols={30}
					rows={10}
					{...textAreaValue}
				></textarea>
				{textAreaValue.error && <span style={{ color: 'red'}}>{textAreaValue.error}</span>}

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
