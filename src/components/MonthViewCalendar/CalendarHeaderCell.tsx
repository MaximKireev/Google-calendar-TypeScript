import React from "react";
import "./CalendarHeaderCell.css";

export interface CalendarHeaderCellProps {
	id: number;
	day: string;
	children?: JSX.Element;
}

export const CalendarHeaderCell = ({ id, day }: CalendarHeaderCellProps) => (
	<div key={id} className="day-cell">
		{day}
	</div>
);
