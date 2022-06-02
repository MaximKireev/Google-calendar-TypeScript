import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HourCell } from "./HourCell";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { EventInDayView } from './EventInDayView'
import { selectCurrentSelectedDate, setListOfEventsInStorage } from "../../redux/selectors";
import { day_hours } from "../../helpers/fixtures";

export const DayViewCalendar = () => {
	const currentSelectedDate = useSelector(selectCurrentSelectedDate) || '';
	const listOfEvents = useSelector(setListOfEventsInStorage) || [];
	const listOfEventsThisDay = listOfEvents.filter(event => event.date === currentSelectedDate);
	const [eventsWithCoordinates, seteventsWithCoordinates] = React.useState<{}[]>()

	React.useEffect(() => {
		const timeSlots = Array.from(document.querySelectorAll('.quarter-of-an-hour'));
		let arr: {id: string, top: number} [] = []
		for(let t of timeSlots){
		  let coordinates = t.getBoundingClientRect();
		  let id = t.id
		  arr.push({id, top: coordinates.top})
		}
		if(listOfEventsThisDay.length>0) {
			let newArr: any [] = []
			listOfEventsThisDay.map(item => {
				let a = arr.filter(item_a => item.timeFrom === item_a.id);
				let b = arr.filter(item_b => item.timeTo === item_b.id);
				newArr.push({...item, x1: a[0].top, x2: b[0].top})
			})
			seteventsWithCoordinates(newArr)

		}},[])

	return (
		<div className="day-view-wrapper" 
		style = {{width: '100%', 
		boxSizing: 'border-box', 
		overflowX: 'scroll',}}>
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
					<HourCell time = {item} currentSelectedDate = {currentSelectedDate}/>
				))}
				{eventsWithCoordinates? eventsWithCoordinates.map(event => <EventInDayView top = {22} height = {22}/>) : null}
			</ErrorBoundary>
		</div>
	);
};
