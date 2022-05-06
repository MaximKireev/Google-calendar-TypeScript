import "./CalendarHeaderCell.css";
import React from "react";
import { DayType } from "../../ts-generalTypes/propTypes";
import { getMonthCalendarEvents } from "../../redux/mocked-data";
import { MonthCalendarEvent } from "./MonthCalendarEvent/MonthCalendarEvent";

type MonthCalendarCellProps = Pick<DayType, "id" | "day" | "isCurrentMonth"> & {
	children?: JSX.Element;
};

export const MonthCalendarCell: React.FC<MonthCalendarCellProps> = (props) => {
	const { id, day, isCurrentMonth } = props;

	const listOfEventsThisDay = getMonthCalendarEvents(id);

	return (
		<div
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
