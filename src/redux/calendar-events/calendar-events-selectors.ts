import {RootState} from "../store";

export const selectCalendarState = (state: RootState) => state.calendar;

export const selectCurrentCalendar = (state: RootState) => selectCalendarState(state).currentCalendar;
export const selectCurrentSelectedEventId = (state: RootState) => selectCalendarState(state).curentSelectedEventId
export const setListOfEventsInStorage = (state: RootState) => selectCalendarState(state).events;
export const selectCurrentDate = (state: RootState) => selectCalendarState(state).currentDate;
export const selectCurrentSelectedDate = (state: RootState) => selectCalendarState(state).currentSelectedDate;
