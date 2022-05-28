import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { EventDetailsModalLayout } from "../EventDetailsModalLayout";
import {
  selectCurrentSelectedEventId,
  setIsEventModalEditable,
} from "../../../redux/selectors";
import { makeEventDetailsModalEditable } from "../../../redux/actions/actionsUI";
import { updateEventData } from "../../../redux/actions/actionsCalendar";
import { CalendarEventData } from "../../../ts-generalTypes/InitialStateInterfaces";
import "./ShowEventDetails.css";
import { useInput } from "../../../hooks/useFormElements";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../../helpers/local-storage-utils";

export const EventDetailsPopup = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectCurrentSelectedEventId);
  const isEventModalEditable = useSelector(setIsEventModalEditable);

  const events = getLocalStorageData("events");
  const filteredEventData = events.filter(
    (item: CalendarEventData) => item.uniqueEventId === id
  );
  console.log(filteredEventData);
  const eventTitleValue = useInput(filteredEventData[0].title, false);
  const eventDescriptionValue = useInput(
    filteredEventData[0].description,
    false
  );

  const updateEventHandler = () => {
    const updatedEventObject = {
      ...filteredEventData[0],
      title: eventTitleValue.value,
      description: eventDescriptionValue.value,
    };
    dispatch(updateEventData(updatedEventObject));
    const updateIndex = events
      .map((item: CalendarEventData) => item.uniqueEventId)
      .indexOf(id);

    setLocalStorageData(
      "events",
      JSON.stringify([
        ...events.slice(0, updateIndex),
        updatedEventObject,
        ...events.slice(updateIndex + 1),
      ])
    );
  };
  return (
    <EventDetailsModalLayout>
      <input
        className="event-title"
        disabled={!isEventModalEditable}
        {...eventTitleValue}
      />
      <p
        className="event-duration"
        contentEditable={isEventModalEditable}
      >{`${filteredEventData[0].timeFrom} - ${filteredEventData[0].timeTo}`}</p>
      <input
        {...eventDescriptionValue}
        className="event-description"
        disabled={!isEventModalEditable}
      />
      <div className="controls control-buttons">
        <Button
          type="primary"
          onClick={updateEventHandler}
          disabled={!isEventModalEditable}
        >
          Update event
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => dispatch(makeEventDetailsModalEditable())}
          disabled={!isEventModalEditable}
        >
          Cancel
        </Button>
      </div>
    </EventDetailsModalLayout>
  );
};
