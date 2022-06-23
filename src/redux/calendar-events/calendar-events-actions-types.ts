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

export interface createEventAction {
  type: typeof CREATE_NEW_CALENDAR_EVENT;
  payload: EventDataItem;
}

export interface pageOnLoadAction {
  type: typeof PAGE_WAS_LOADED;
}

export interface deleteEventAction {
  type: typeof DELETE_CALENDAR_EVENT;
  payload: string;
}

export interface setTodayAction {
  type: typeof SET_DATE_TO_TODAY;
}

export interface monthReverseAction {
  type: typeof SWITCH_TO_A_MONTH_AGO;
  payload: number;
}

export interface monthForwardAction {
  type: typeof SWITCH_TO_ONE_MONTH_FORWARD;
  payload: number;
}

export interface setSelectedDateAction {
  type: typeof SET_SELECTED_DATE;
  payload: string;
}

export interface minusOneDayAction {
  type: typeof SWITCH_TO_A_MINUS_ONE_DAY;
  payload: number;
}

export interface plusOneDayForwardAction {
  type: typeof SWITCH_TO_A_ONE_DAY_FORWARD;
  payload: number;
}

export interface setSelectedEventIdAction {
  type: typeof SET_SELECTED_EVENT_ID;
  payload: string;
}

export interface addNewEventToList {
  type: typeof ADD_NEW_EVENT_TO_LIST,
  payload: EventDataItem
}

export interface updateEventData {
  type: typeof UPDATE_EVENT_DATA,
  payload: EventDataItem
}

export type CalendarEventAction =
  | createEventAction
  | pageOnLoadAction
  | deleteEventAction
  | setTodayAction
  | monthReverseAction
  | monthForwardAction
  | setSelectedDateAction
  | minusOneDayAction
  | plusOneDayForwardAction
  | setSelectedEventIdAction
  | addNewEventToList
  | updateEventData;
