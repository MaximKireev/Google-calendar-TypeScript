import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cs from 'classnames';

import { MonthCalendarEvent } from "./MonthCalendarEvent/MonthCalendarEvent";
import { openEventCreatorWindow, changeCalendarView } from "../../redux/ui-events/ui-events-actions";
import { setSelectedEventId, setSelectedDate } from "../../redux/calendar-events/calendar-events-actions";
import {setListOfEventsInStorage} from "../../redux/calendar-events/calendar-events-selectors";
import {DayDataItem, EventDataItem} from "../../redux/calendar-events/calendar-events-reducer";
import "./CalendarHeaderCell.css";

type MonthCalendarCellProps = Pick <DayDataItem, "id" | "day" | "isCurrentMonth" | 'isToday' | 'size'> & {
	children?: JSX.Element;
};

export const MonthCalendarCell: React.FC<MonthCalendarCellProps> = (props) => {
	const { id, day, isCurrentMonth, isToday, size } = props;
	const dispatch = useDispatch();
	const listOfEventsInStorage = useSelector(setListOfEventsInStorage)! || []
	const listOfEventsThisDay = listOfEventsInStorage.filter((item: EventDataItem) => item.date === id);

	const clickOnCellHandler = (event: React.MouseEvent) => {
		const currentTarget = event.target as HTMLDivElement;

		if(currentTarget.className.includes ("badge")) {
			dispatch(changeCalendarView('day'))
			dispatch(setSelectedDate(id))
		}

		if (!currentTarget.className.includes("day-cell")) return;
		dispatch(setSelectedEventId(id));
		dispatch(openEventCreatorWindow());
	};

	return (
		<div
			onClick={clickOnCellHandler}
			className={cs('day-cell', {
				['small']: size === 'small',
				['prevOrNextStyle']: size !== 'small' && !isCurrentMonth,
			})}
		>
			<div
				className="badge"
				style={{
					color:  isToday? 'white' : 'black',
					backgroundColor: isToday? '#7982EC' : 'white',
				}}
			>
				{day}
			</div>
			{size==='small' && listOfEventsThisDay.length > 0
				? (
					<div className="calendar-small-events" />
				) : listOfEventsThisDay.map((event: EventDataItem) => (
					<MonthCalendarEvent events = {event} size = {size}/>
				))}
		</div>
	);
};
