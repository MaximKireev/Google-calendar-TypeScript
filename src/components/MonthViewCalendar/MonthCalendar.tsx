import React from "react";
import { useSelector } from "react-redux";
import "./MonthCalendar.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import {
	selectWeekDaysName,
	selectCurrentCalendar,
} from "../../redux/selectors";
import { CalendarHeaderCell } from "./CalendarHeaderCell";
import { MonthCalendarCell } from "./MonthCalendarCell";
import { DayType } from "../../ts-generalTypes/propTypes";

const Calendar = () => {
	const weekDaysName = useSelector(selectWeekDaysName);
	const currentCalendar = useSelector(selectCurrentCalendar)!;
	const renderCalendarWeek = (week: DayType[]) => (
		<div className="week-wrapper">
			{week.map(({ id, day, isCurrentMonth, isToday }: DayType) => (
				<MonthCalendarCell
					key={id}
					id={id}
					day={day}
					isCurrentMonth={ isCurrentMonth }
					isToday = { isToday }
				/>
			))}
		</div>
	);

	return (
		<div className="month-wrapper">
			<ErrorBoundary>
				<div className="week-wrapper">
					{weekDaysName.map(({ id, day }) => (
						<CalendarHeaderCell key={id} id={id} day={day} />
					))}
				</div>
			</ErrorBoundary>
			<ErrorBoundary>{currentCalendar.map(renderCalendarWeek)}</ErrorBoundary>
		</div>
	);
};

export default Calendar;
