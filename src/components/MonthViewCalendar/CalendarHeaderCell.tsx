import React from "react";
import "./CalendarHeaderCell.css";

export interface CalendarHeaderCellProps {
	id: number;
	day: string;
	size: string
	children?: JSX.Element;
}

export const CalendarHeaderCell = ({ day, size }: CalendarHeaderCellProps) => (
	<div className={size === 'small'? "day-cell small" : "day-cell" }>
		{day}
	</div>
);
