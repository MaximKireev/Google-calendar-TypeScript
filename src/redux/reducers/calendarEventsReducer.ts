import { getCurrentDate } from "../../helpers/getCurrentDate";
import { createCalendarMatrix } from "../../helpers/createCalendar";
import { CalendarInitialState } from "../../ts-generalTypes/InitialStateInterfaces";
import { CalendarEventAction } from "../../ts-generalTypes/calendarActionInterfaces";
import { ActionType } from "../ActionTypesConstants";
import { mockedData } from "../mocked-data";
const initialCalendar = createCalendarMatrix();

const initialState: CalendarInitialState = {
	currentDate: getCurrentDate(),
	currentCalendar: initialCalendar,
	currentSelectedDate: "",
	initialEvents: mockedData,
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

		default:
			return state;
	}
};

export default calendarEventsReducer;
