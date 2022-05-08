import "./CalendarHeaderCell.css";
import React from "react";
import { DayType } from "../../ts-generalTypes/propTypes";
import { getMonthCalendarEvents } from "../../redux/mocked-data";
import { MonthCalendarEvent } from "./MonthCalendarEvent/MonthCalendarEvent";
import {openEventCreatorWindow} from '../../redux/actions/actionsUI'
import {useDispatch} from 'react-redux'

type MonthCalendarCellProps = Pick<DayType,  "id" | "day" | "isCurrentMonth"> & {
	children?: JSX.Element;
};

export const MonthCalendarCell: React.FC<MonthCalendarCellProps> = (props) => {
	const { id, day, isCurrentMonth } = props;
	const dispatch = useDispatch()

	const listOfEventsThisDay = getMonthCalendarEvents(id);
	const clickOnCellHandler = (event: React.MouseEvent) => {
		const currentTarget = event.target as HTMLDivElement;

		if (!currentTarget.className.includes("day-cell")) { return }
		else dispatch(openEventCreatorWindow())
	}

	return (
		<div
			onClick={clickOnCellHandler}
			key={id}
			className={!isCurrentMonth ? "day-cell prevOrNextStyle" : "day-cell"}
		>
			{day}

			{listOfEventsThisDay.map(event => (
				<MonthCalendarEvent {...event} />
			))}
		</div>
	);
};
