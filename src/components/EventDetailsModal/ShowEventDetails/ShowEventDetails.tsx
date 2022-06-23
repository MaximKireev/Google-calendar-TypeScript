import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, TimePicker, DatePicker } from "antd";
import type { DatePickerProps } from 'antd';
import moment from "moment";
import {toast} from 'react-toastify'
import { EventDetailsModalLayout } from "../EventDetailsModalLayout";
import { makeEventDetailsModalEditable } from "../../../redux/ui-events/ui-events-actions";
import { updateEventData } from "../../../redux/calendar-events/calendar-events-actions";
import "./ShowEventDetails.css";
import { useInput } from "../../../hooks/useInput";
import { useTimePicker } from "../../../hooks/useTimePicker";

import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../../helpers/local-storage-utils";
import {selectCurrentSelectedEventId} from "../../../redux/calendar-events/calendar-events-selectors";
import {setIsEventModalEditable} from "../../../redux/ui-events/ui-events-selectors";
import {EventDataItem} from "../../../redux/calendar-events/calendar-events-reducer";

export const EventDetailsPopup = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectCurrentSelectedEventId);
  const isEventModalEditable = useSelector(setIsEventModalEditable);

  const events = getLocalStorageData("events") || [];
  const filteredEventData = events.filter(
    (item: EventDataItem) => item.uniqueEventId === id
  );
  const eventTitleValue = useInput(filteredEventData[0].title, false);
  const eventDescriptionValue = useInput(
    filteredEventData[0].description,
    false
  );
  const timeFrom = useTimePicker(filteredEventData[0].timeFrom, false);
  const timeTo = useTimePicker(filteredEventData[0].timeTo, false);


  const updateEventHandler = () => {
    const updatedEventObject = {
      ...filteredEventData[0],
      title: eventTitleValue.value,
      description: eventDescriptionValue.value,
      timeFrom: timeFrom.timeOption,
      timeTo: timeTo.timeOption
    };
    dispatch(updateEventData(updatedEventObject));
    const updateIndex = events
      .map((item: EventDataItem) => item.uniqueEventId)
      .indexOf(id);

    setLocalStorageData(
      "events",
      JSON.stringify([
        ...events.slice(0, updateIndex),
        updatedEventObject,
        ...events.slice(updateIndex + 1),
      ])
    );

    toast.success("Event succefully updated!", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1500, 
		  });
  };
  return (
    <EventDetailsModalLayout>
      <input
        className="event-title"
        disabled={!isEventModalEditable}
        {...eventTitleValue}
      />
      <div
					className="event-duration"
				>
					<TimePicker
            defaultValue={moment(timeFrom.timeOption, 'HH:mm')}
            disabled={!isEventModalEditable}
						format="HH:mm"
						minuteStep={15}
						{...timeFrom}
					/>
					<TimePicker
            defaultValue={moment(timeTo.timeOption, 'HH:mm')}
            disabled={!isEventModalEditable}
						format="HH:mm"
						{...timeTo}
						minuteStep={15}
					/>
          <DatePicker
          format = 'dd.mm.yyyy'
          disabled={!isEventModalEditable}
          defaultPickerValue={moment(filteredEventData[0].date)}
          className="datePicker"/>

				</div>
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
