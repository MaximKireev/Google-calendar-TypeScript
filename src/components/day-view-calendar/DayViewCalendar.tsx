// import React from "react";
// import { day_hours } from "../../helpers/fixtures";
// import { HourCell } from "./HourCell";
// import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
// import { useSelector, useDispatch } from "react-redux";
// import {
// 	selectCurrentSelectedDate,
// 	selectInitialEvents,
// } from "../../redux/selectors";
// import { dayComponentWasLoaded } from "../../redux/actions";

// const DayView = () => {
// 	const dispatch = useDispatch();

// 	const currentSelectedDate = useSelector(selectCurrentSelectedDate);
// 	const events = useSelector(selectInitialEvents);
// 	const searchingDate = `${currentSelectedDate.day}.${currentSelectedDate.monthNumber}.${currentSelectedDate.year}`;
// 	const eventsThisDayArray = events.filter((ev) => ev.data === searchingDate);
// 	React.useState(() => {
// 		dispatch(dayComponentWasLoaded());
// 	});

// 	return (
// 		<div className="day-view-wrapper">
// 			<ErrorBoundary>
// 				{currentSelectedDate ? (
// 					<div
// 						style={{
// 							display: "flex",
// 							flexDirection: "column",
// 							color: "black",
// 						}}
// 						className="data-dayview-wrapper"
// 					>
// 						<span
// 							style={{ fontWeight: "bold", alignSelf: "center" }}
// 						>{`${currentSelectedDate?.day}`}</span>
// 						<span
// 							style={{ fontWeight: "bold", alignSelf: "center" }}
// 						>{`${currentSelectedDate?.weekDay}`}</span>
// 					</div>
// 				) : null}
// 				{day_hours.map((item) => (
// 					<HourCell eventsThisDayArray={eventsThisDayArray} value={item} />
// 				))}
// 			</ErrorBoundary>
// 		</div>
// 	);
// };

// export default DayView;
