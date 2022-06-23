import {days} from "../../helpers/fixtures";
import {
	SHOW_HIDE_SIDEBAR,
	OPEN_EVENT_CREATOR_WINDOW,
	CLOSE_EVENT_CREATOR_WINDOW,
	OPEN_EVENT_MODAL_POPUP,
	CLOSE_EVENT_MODAL_POPUP,
	SHOW_LOGIN_WINDOW,
	HIDE_LOGIN_WINDOW,
	SET_MOUSE_COORDINATES,
	CHANGE_COLOR_THEME,
	EDIT_CALENDAR_EVENT,
	CHANGE_CALENDAR_VIEW,
} from "./ui-events-actions-constants";
import {UIAction} from "./ui-events-actions-types";

const defaultThemeinStorage = JSON.parse(
	window.localStorage.getItem("themeSwitcherChecked")!
);

export interface UiEventsState {
	isSideBarVisible?: boolean,
	isEventCreatorWindowVisible?: boolean,
	isEventModalVisible?: boolean,
	isEventModalEditable: boolean,
	mouseCoordinates?: { x: number, y: number },
	downloadWeekDaysName: { day: string, id: number }[],
	isDefaultTheme: boolean,
	isLoginWindowVisible: boolean,
	currentCalendarView: 'year' | 'month' | 'day' | 'list',
}

const initialState: UiEventsState = {
	isSideBarVisible: true,
	isEventCreatorWindowVisible: false,
	isEventModalVisible: false,
	isEventModalEditable: false,
	isLoginWindowVisible: false,
	mouseCoordinates: { x: 0, y: 0 },
	downloadWeekDaysName: days,
	isDefaultTheme: defaultThemeinStorage,
	currentCalendarView: 'month'
};

const UIComponentsreducer = (state: UiEventsState = initialState, action: UIAction) => {
	switch (action.type) {
		case SHOW_HIDE_SIDEBAR:
			return {...state, isSideBarVisible: !state.isSideBarVisible};

		case OPEN_EVENT_CREATOR_WINDOW:
			return {...state, isEventCreatorWindowVisible: true};

		case CLOSE_EVENT_CREATOR_WINDOW:
			return {...state, isEventCreatorWindowVisible: false};

		case OPEN_EVENT_MODAL_POPUP:
			return {...state, isEventModalVisible: true};

		case CLOSE_EVENT_MODAL_POPUP:
			return {...state, isEventModalVisible: false};

		case SHOW_LOGIN_WINDOW:
			return {...state, isLoginWindowVisible: true};
			
		case HIDE_LOGIN_WINDOW:
			return {...state, isLoginWindowVisible: false};

		case SET_MOUSE_COORDINATES:
			return {...state, mouseCoordinates: action.payload};

		case CHANGE_COLOR_THEME:
			return {...state, isDefaultTheme: !state.isDefaultTheme};

		case EDIT_CALENDAR_EVENT:
			return {...state, isEventModalEditable: !state.isEventModalEditable};

		case CHANGE_CALENDAR_VIEW:
			return {...state, currentCalendarView: action.payload};

		default:
			return state;
	}
};

export default UIComponentsreducer;
