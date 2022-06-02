import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HourCell } from "./HourCell";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { selectCurrentSelectedDate } from "../../redux/selectors";
import { day_hours } from "../../helpers/fixtures";

export const DayViewCalendar = () => {
	const dispatch = useDispatch();
	const currentSelectedDate = useSelector(selectCurrentSelectedDate);
	return (
		<div className="day-view-wrapper">
			<ErrorBoundary>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						color: "black",
					}}
					className="data-dayview-wrapper"
				>
					<span style={{ fontWeight: "bold", alignSelf: "center" }}>
						{currentSelectedDate}
					</span>
					<span style={{ fontWeight: "bold", alignSelf: "center" }}>
						{currentSelectedDate}
					</span>
				</div>
				{day_hours.map((item) => (
					<HourCell />
				))}
			</ErrorBoundary>
		</div>
	);
};
