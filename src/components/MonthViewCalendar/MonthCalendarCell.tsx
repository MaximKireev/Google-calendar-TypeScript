import React from "react";
import { useDispatch } from "react-redux";
import "./CalendarHeaderCell.css";
import { DayType } from "../../ts-generalTypes/propTypes";
import { MonthCalendarEvent } from "./MonthCalendarEvent/MonthCalendarEvent";
import { openEventCreatorWindow } from "../../redux/actions/actionsUI";
import { setSelectedEventId } from "../../redux/actions/actionsCalendar";
import { useLocalStorageValue } from "../../hooks/useLocalStorageValue";
import { CalendarEventData } from "../../ts-generalTypes/InitialStateInterfaces";

type MonthCalendarCellProps = Pick<DayType, "id" | "day" | "isCurrentMonth"> & {
	children?: JSX.Element;
};

export const MonthCalendarCell: React.FC<MonthCalendarCellProps> = (props) => {
	const { id, day, isCurrentMonth } = props;
	const dispatch = useDispatch();
	const [val] = useLocalStorageValue(undefined, "events");
	const listOfEventsThisDay = val.filter(
		(item: CalendarEventData) => item.id === id
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
			className={!isCurrentMonth ? "day-cell prevOrNextStyle" : "day-cell"}
		>
			{day}

			{listOfEventsThisDay.map((event: CalendarEventData) => (
				<MonthCalendarEvent {...event} />
			))}
		</div>
	);
};
