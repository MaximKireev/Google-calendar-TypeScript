import "antd/dist/antd.css";
import "./EventCreatorForm.css";
import { TimePicker } from 'antd';
import Draggable from "react-draggable";
import React from "react";
import { useDispatch } from "react-redux";
import {closeEventCreatorWindow} from '../../redux/actions/actionsUI'



const EventCreatorWindow = () => {
	const dispatch = useDispatch()
	const [inputValue, setInputValue] = React.useState('');
	const [timeFrom, setTimeFrom] = React.useState();
	const [timeTo, setTimeTo] = React.useState([]);

	const [TextAreaValue, setTextAreaValue] = React.useState('');

	const inputValueHandler = (e: React.SyntheticEvent<EventTarget> ) => {
		e.preventDefault();
		const currentTarget = e.target as HTMLInputElement
		setInputValue(currentTarget.value);
	};

	const TextAreaValueHandler = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();
		const currentTarget = e.target as HTMLTextAreaElement

		setTextAreaValue(currentTarget.value);
	};
	// const timeFromHandler = (event: React.SyntheticEvent<EventTarget>) => {
	// 	const currentTarget = e.target as 
	// 	setTimeFrom(currentTarget.value);
	// };
	// const timeToHandler = (event: React.SyntheticEvent<EventTarget>) => {
	// 	setTimeTo(event.target.value);
	// };
	const hadleFormData = () => {
		console.log(inputValue, timeFrom, timeTo, TextAreaValue)
	};

	return (
		<Draggable
			defaultPosition={{
				x: 750,
				y: 250,
			}}
		>
			<form className="event-wrapper">
				<span className="event-data"></span>
				<input
					onChange={inputValueHandler}
					type="text"
					placeholder="Title here"
					className="task-input"
				/>
				<div
					style={{ display: "flex", justifyContent: "space-between" }}
					className="selectTime-wrapper">
                    <TimePicker minuteStep={15}/>
                    <TimePicker minuteStep={15}/>
				</div>
				<textarea
					onChange={TextAreaValueHandler}
					className="task-description"
					name=""
					id=""
					cols={30}
					rows={10}
				></textarea>
				<button onClick={hadleFormData} type="button" className="button-save">
					Save task
				</button>
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
