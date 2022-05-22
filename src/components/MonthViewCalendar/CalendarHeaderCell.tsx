import React from "react";
import "./CalendarHeaderCell.css";

export interface CalendarHeaderCellProps {
	id: number;
	day: string;
	size: string
	children?: JSX.Element;
}

export const CalendarHeaderCell = ({ id, day, size }: CalendarHeaderCellProps) => (
	<div key={id} className={size === 'small'? "day-cell small" : "day-cell" }>
		{day}
	</div>
);
