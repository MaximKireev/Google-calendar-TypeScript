import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CalendarHeaderCell.css";
import { DayType } from "../../ts-generalTypes/propTypes";
import { MonthCalendarEvent } from "./MonthCalendarEvent/MonthCalendarEvent";
import { openEventCreatorWindow } from "../../redux/actions/actionsUI";
import { setSelectedEventId } from "../../redux/actions/actionsCalendar";
import { CalendarEventData } from "../../ts-generalTypes/InitialStateInterfaces";
import { setListOfEventsInStorage } from '../../redux/selectors'

type MonthCalendarCellProps = Pick <DayType, "id" | "day" | "isCurrentMonth" | 'isToday' | 'size'> & {
	children?: JSX.Element;
};

export const MonthCalendarCell: React.FC<MonthCalendarCellProps> = (props) => {
	const { id, day, isCurrentMonth, isToday, size } = props;
	const dispatch = useDispatch();
	const listOfEventsInStorage = useSelector(setListOfEventsInStorage)! || []
	const listOfEventsThisDay = listOfEventsInStorage.filter(
		(item: CalendarEventData) => item.date === id
	);
	const clickOnCellHandler = (event: React.MouseEvent) => {
		const currentTarget = event.target as HTMLDivElement;

		if (!currentTarget.className.includes("day-cell")) {
			return;
		} else {
			dispatch(setSelectedEventId(id));
			dispatch(openEventCreatorWindow());
		}
	};



	return (
		<div
			onClick={clickOnCellHandler}
			key={id}
			className={!isCurrentMonth ? "day-cell prevOrNextStyle" : isToday? "day-cell today" : size === 'small' ? "day-cell small" : 'day-cell'}
		>
			{day}

			{listOfEventsThisDay.map((event: CalendarEventData) => (
				<MonthCalendarEvent {...event} />
			))}
		</div>
	);
};
