import {EventDataItem} from "./calendar-events-reducer";
import {
	ADD_NEW_EVENT_TO_LIST,
	CREATE_NEW_CALENDAR_EVENT,
	DELETE_CALENDAR_EVENT,
	PAGE_WAS_LOADED,
	SET_DATE_TO_TODAY,
	SET_SELECTED_DATE,
	SET_SELECTED_EVENT_ID,
	SWITCH_TO_A_MINUS_ONE_DAY,
	SWITCH_TO_A_MONTH_AGO,
	SWITCH_TO_A_ONE_DAY_FORWARD,
	SWITCH_TO_ONE_MONTH_FORWARD,
	UPDATE_EVENT_DATA
} from "./calendar-events-actions-constants";

export const pageOnLoad = () => ({ type: PAGE_WAS_LOADED });

export const createEvent = (value: EventDataItem) => {
	const {uniqueEventId, date, title, timeFrom, timeTo, description} = value;
	return {type: CREATE_NEW_CALENDAR_EVENT, payload: {uniqueEventId, day: date, title, timeFrom, timeTo, description}} as const;
};

export const deleteEvent = (id: string) => ({type: DELETE_CALENDAR_EVENT, payload: id}) as const;
export const addNewEventToList = (value: EventDataItem) => ({type: ADD_NEW_EVENT_TO_LIST, payload: value}) as const;
export const setToday = () => ({ type: SET_DATE_TO_TODAY }) as const;
export const monthReverse = (value: number) => ({type: SWITCH_TO_A_MONTH_AGO, payload: value}) as const;
export const monthForward = (value: number) => ({type: SWITCH_TO_ONE_MONTH_FORWARD, payload: value}) as const;
export const setSelectedDate = (id: string) => ({type: SET_SELECTED_DATE, payload: id}) as const;
export const minusOneDay = () => ({type: SWITCH_TO_A_MINUS_ONE_DAY, payload: -1}) as const;
export const plusOneDayForward = () => ({type: SWITCH_TO_A_ONE_DAY_FORWARD, payload: 1}) as const;
export const setSelectedEventId = (id: string) => ({type: SET_SELECTED_EVENT_ID, payload: id}) as const;
export const updateEventData = (value: EventDataItem) => ({type: UPDATE_EVENT_DATA, payload: value}) as const;



