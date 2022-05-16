import React from "react";
import Draggable from "react-draggable";
import { TimePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "./EventCreatorForm.css";
import { closeEventCreatorWindow } from "../../redux/actions/actionsUI";
import { useLocalStorageValue } from "../../hooks/useLocalStorageValue";
import { selectCurrentSelectedEventId } from "../../redux/selectors";

type FormErrors = {
	titleError: { isEmpty: boolean; message?: string };
	textAreaError?: { isEmpty: boolean; message: string };
};

const EventCreatorWindow = () => {
	const dispatch = useDispatch();
	const eventId = useSelector(selectCurrentSelectedEventId);
	const [inputValue, setInputValue] = React.useState("");
	const [timeFrom, setTimeFrom] = React.useState("");
	const [timeTo, setTimeTo] = React.useState("");

	const [storageValue, setStorageValue] = useLocalStorageValue(
		undefined,
		"events"
	);

	const generatedUniqueEventId = Math.floor(Math.random() * 100000000);

	const [TextAreaValue, setTextAreaValue] = React.useState("");

	const inputValueHandler = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();
		const currentTarget = e.target as HTMLInputElement;
		setInputValue(currentTarget.value);
	};

	const TextAreaValueHandler = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();
		const currentTarget = e.target as HTMLTextAreaElement;

		setTextAreaValue(currentTarget.value);
	};
	const timeFromHandler = (item: any) => {
		let date = new Date(item._d);
		setTimeFrom(`${date.getHours()}:${date.getMinutes()}`);
	};
	const timeToHandler = (item: any) => {
		let date = new Date(item._d);
		setTimeTo(`${date.getHours()}:${date.getMinutes()}`);
	};
	const hadleFormData = (e: React.SyntheticEvent<EventTarget>) => {
		{
			setStorageValue([
				...storageValue,
				{
					uniqueEventId: generatedUniqueEventId,
					date: eventId,
					title: inputValue,
					timeFrom: timeFrom,
					timeTo: timeTo,
					description: TextAreaValue,
				},
			]);
			setTimeout(() => dispatch(closeEventCreatorWindow()), 10);
		}
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
					onChange={inputValueHandler}
					type="text"
					placeholder="Title here"
					className="task-input"
				/>

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
					onChange={TextAreaValueHandler}
					className="task-description"
					name=""
					id=""
					cols={30}
					rows={10}
				></textarea>
				<input type="submit" className="button-save" value={"Save task"} />

				<button
					type="button"
					className="close"
					onClick={() => dispatch(closeEventCreatorWindow())}
				></button>
			</form>
		</Draggable>
	);
};

export default EventCreatorWindow;
