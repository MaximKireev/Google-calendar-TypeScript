import { getCurrentDate } from "../../helpers/getCurrentDate";
import { createCalendarMatrix } from "../../helpers/createCalendar";
import { CalendarInitialState } from "../../ts-generalTypes/InitialStateInterfaces";
import { CalendarEventAction } from "../../ts-generalTypes/calendarActionInterfaces";
import { ActionType } from "../ActionTypesConstants";
const initialCalendar = createCalendarMatrix();
const dataInLocalStorage = window.localStorage.getItem('events')!

const initialState: CalendarInitialState = {
	currentDate: getCurrentDate(),
	currentCalendar: initialCalendar,
	currentSelectedDate: "",
	initialEvents: JSON.parse(dataInLocalStorage),
	curentSelectedEventId: "",
	currentCalendarView: "",
};

const calendarEventsReducer = (
	state = initialState,
	action: CalendarEventAction
) => {
	switch (action.type) {
		case ActionType.PAGE_WAS_LOADED:
			return state.initialEvents;

		case ActionType.SET_DATE_TO_TODAY:
			return {
				...state,
				currentCalendar: createCalendarMatrix(undefined, undefined, new Date().getUTCMonth(), new Date().getUTCFullYear()),
			};

		case ActionType.SWITCH_TO_A_MONTH_AGO:
			return {
				...state,
				currentCalendar: createCalendarMatrix(undefined, action.payload),
			};
			
		case ActionType.SWITCH_TO_ONE_MONTH_FORWARD:
			return {
				...state,
				currentCalendar: createCalendarMatrix(undefined, action.payload),
			};

		case ActionType.SET_SELECTED_EVENT_ID:
			return {
				...state,
				curentSelectedEventId: action.payload,
			};
		case ActionType.ADD_NEW_EVENT_TO_LIST:
			return {
				...state,
				initialEvents: [...state.initialEvents, action.payload],
			};
		case ActionType.DELETE_CALENDAR_EVENT:
			const deleteIndex = state.initialEvents.map(item => item.uniqueEventId).indexOf(+action.payload);

			return {
				...state,
				initialEvents: [
					...state.initialEvents.slice(0, deleteIndex),
					...state.initialEvents.slice(deleteIndex + 1)],
			};
		case ActionType.UPDATE_EVENTS_LIST:
			const id = +action.payload.uniqueEventId;
			
			const updateIndex = state.initialEvents.map(item => item.uniqueEventId).indexOf(id);

			return {
				...state,
				initialEvents: [
					...state.initialEvents.slice(0, updateIndex), action.payload,
					...state.initialEvents.slice(updateIndex + 1)],
			};
	

		default:
			return state;
	}
};

export default calendarEventsReducer;
