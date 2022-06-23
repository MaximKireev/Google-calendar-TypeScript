import React from "react";
import { useSelector } from "react-redux";

import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { CalendarHeaderCell } from "./CalendarHeaderCell";
import { MonthCalendarCell } from "./MonthCalendarCell";
import {selectCurrentCalendar} from "../../redux/calendar-events/calendar-events-selectors";
import {selectWeekDaysName} from "../../redux/ui-events/ui-events-selectors";
import {DayDataItem} from "../../redux/calendar-events/calendar-events-reducer";
import "./MonthCalendar.css";

interface MonthCalendaProps {
	size: string,
	calendarMatrix?: DayDataItem[][]
}

const Calendar = ({size, calendarMatrix}: MonthCalendaProps) => {
	const weekDaysName = useSelector(selectWeekDaysName);
	const currentCalendar = calendarMatrix? calendarMatrix : useSelector(selectCurrentCalendar)!;
	
	const renderCalendarWeek = (week: DayDataItem[]) => (
		<div key = {Math.random()*1000} className="week-wrapper">
			{week.map(({ id, day, isCurrentMonth, isToday }: DayDataItem) => (
				<MonthCalendarCell
					key={id}
					id={id}
					day={day}
					isCurrentMonth={ isCurrentMonth }
					isToday = { isToday }
					size = {size}
				/>
			))}
		</div>
	);

	return (
		<div className="month-wrapper">
			<ErrorBoundary>
				<div key = {0} className="week-wrapper">
					{weekDaysName.map(({ id, day }) => (
						<CalendarHeaderCell key={id} id={id} day={day} size = {size}/>
					))}
				</div>
			</ErrorBoundary>
			<ErrorBoundary>
				{currentCalendar.map(renderCalendarWeek)}
			</ErrorBoundary>
		</div>
	);
};

export default Calendar;
