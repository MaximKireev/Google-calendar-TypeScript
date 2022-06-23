import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HourCell } from "./HourCell";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { EventInDayView } from "./EventInDayView";
import { day_hours } from "../../helpers/fixtures";
import {
  selectCurrentSelectedDate,
  setListOfEventsInStorage
} from "../../redux/calendar-events/calendar-events-selectors";
export const DayViewCalendar = () => {
  const currentSelectedDate = useSelector(selectCurrentSelectedDate) || "";
  const listOfEvents = useSelector(setListOfEventsInStorage) || [];
  const listOfEventsThisDay = listOfEvents.filter(
    (event) => event.date === currentSelectedDate
  );

  console.log(listOfEventsThisDay)

  const [eventsWithCoordinates, seteventsWithCoordinates] =
    React.useState<{}[]>([]);

  React.useEffect(() => {
    const timeSlots = Array.from(
      document.querySelectorAll(".quarter-of-an-hour")
    );
    let arr: { id: string; top: number }[] = [];
    for (let t of timeSlots) {
      let coordinates = t.getBoundingClientRect();
      let id = t.id;
      arr.push({ id, top: coordinates.top });
    }

    let newArr: any[] = [];
    if (listOfEventsThisDay.length > 0) { 
    listOfEventsThisDay.map((item) => {
      let a = arr.filter((item_a) => item.timeFrom === item_a.id);
      let b = arr.filter((item_b) => item.timeTo === item_b.id);
      newArr.push({ ...item, x1: a[0].top, x2: b[0].top });
      seteventsWithCoordinates(newArr);

    })} 
  }, [currentSelectedDate]);

  return (
    <div className="day-view-wrapper" style={{ width: "100%" }}>
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
          <HourCell time={item} currentSelectedDate={currentSelectedDate} />
        ))}
        {listOfEventsThisDay.length > 0
          ? eventsWithCoordinates.map((event: any) => (
            <EventInDayView
              top={event.x1}
              height={event.x2 - event.x1}
              description={event.description}
            />
          ))
          : null}
      </ErrorBoundary>
    </div>
  );
};
