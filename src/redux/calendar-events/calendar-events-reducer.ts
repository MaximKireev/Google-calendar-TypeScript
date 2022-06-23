import {getCurrentDate} from "../../helpers/getCurrentDate";
import {createCalendarMatrix} from "../../helpers/createCalendar";
import {getLocalStorageData} from '../../helpers/local-storage-utils'
import {
	ADD_NEW_EVENT_TO_LIST,
	DELETE_CALENDAR_EVENT,
	PAGE_WAS_LOADED,
	SET_DATE_TO_TODAY,
	SET_SELECTED_DATE,
	SET_SELECTED_EVENT_ID,
	SWITCH_TO_A_MONTH_AGO,
	SWITCH_TO_ONE_MONTH_FORWARD,
	UPDATE_EVENT_DATA,
} from "./calendar-events-actions-constants";
import {CalendarEventAction} from "./calendar-events-actions-types";

const initialCalendar = createCalendarMatrix();
const dataInLocalStorage = getLocalStorageData('events')!

export type EventDataItem = {
	uniqueEventId: string,
	date?: string,
	title: string,
	timeFrom: string,
	timeTo: string,
	description: string
}

export type DayDataItem = {
	day: number;
	id: string;
	cell: boolean;
	isPrevMonth?: boolean;
	isCurrentMonth?: boolean;
	isNextMonth?: boolean;
	eventsThisDay?: EventDataItem[];
	isToday?: boolean,
	size?: string,
};

export interface CalendarEventsState {
	currentDate?: {
		dayName: string,
		data: number,
		month: string,
		year: number
	},
	currentCalendar?: DayDataItem[][],
	currentSelectedDate?: string,
	events: EventDataItem[],
	curentSelectedEventId?: string,
	currentCalendarView?: string,
}

const initialState: CalendarEventsState = {
	currentDate: getCurrentDate(),
	currentCalendar: initialCalendar,
	currentSelectedDate: "",
	events: dataInLocalStorage,
	curentSelectedEventId: "",
	currentCalendarView: "",
};

const calendarEventsReducer = (state = initialState, action: CalendarEventAction) => {
	switch (action.type) {
		case PAGE_WAS_LOADED:
			return state.events;

		case SET_DATE_TO_TODAY:
			return { ...state, currentCalendar: createCalendarMatrix(undefined, undefined, new Date().getUTCMonth(), new Date().getUTCFullYear()) };

		case SWITCH_TO_A_MONTH_AGO:
			return { ...state, currentCalendar: createCalendarMatrix(undefined, action.payload) };
			
		case SWITCH_TO_ONE_MONTH_FORWARD:
			return { ...state, currentCalendar: createCalendarMatrix(undefined, action.payload) };

		case SET_SELECTED_EVENT_ID:
			return { ...state, curentSelectedEventId: action.payload };

		case ADD_NEW_EVENT_TO_LIST:
			return { ...state, events: [...state.events || [], action.payload] };

		case DELETE_CALENDAR_EVENT:
			const deleteIndex = state.events.map(item => item.uniqueEventId).indexOf(action.payload);
			return { ...state, events: [...state.events.slice(0, deleteIndex), ...state.events.slice(deleteIndex + 1)] };

		case UPDATE_EVENT_DATA:
			const id = action.payload.uniqueEventId;
			const updateIndex = state.events.map(item => item.uniqueEventId).indexOf(id);
			return { ...state, events: [...state.events.slice(0, updateIndex), action.payload, ...state.events.slice(updateIndex + 1)] };

		case SET_SELECTED_DATE:
			return { ...state, currentSelectedDate: action.payload };
	
		default:
			return state;
	}
};

export default calendarEventsReducer;
