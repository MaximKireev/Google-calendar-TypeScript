import { ActionType } from "../ActionTypesConstants";
import { UIinitialState } from "../../ts-generalTypes/InitialStateInterfaces";
import { UIAction } from "../../ts-generalTypes/UIactionsInterfaces";
import { days } from "../../helpers/fixtures";

const initialState: UIinitialState = {
	isSideBarVisible: true,
	isEventCreatorWindowVisible: false,
	isEventModalVisible: false,
	isEventModalEditable: false,
	mouseCoordinates: { x: 0, y: 0 },
	downloadWeekDaysName: days,
	isDefaultTheme: true,
};

const UIComponentsreducer = (
	state: UIinitialState = initialState,
	action: UIAction
) => {
	switch (action.type) {
		case ActionType.SHOW_HIDE_SIDEBAR:
			return {
				...state,
				isSideBarVisible: !state.isSideBarVisible,
			};
		case ActionType.OPEN_EVENT_CREATOR_WINDOW:
			return {
				...state,
				isEventCreatorWindowVisible: true,
			};
		case ActionType.CLOSE_EVENT_CREATOR_WINDOW:
			return {
				...state,
				isEventCreatorWindowVisible: false,
			};
		case ActionType.OPEN_EVENT_MODAL_POPUP:
			return {
				...state,
				isEventModalVisible: true,
			};
		case ActionType.CLOSE_EVENT_MODAL_POPUP:
			return {
				...state,
				isEventModalVisible: false,
			};
		case ActionType.SET_MOUSE_COORDINATES:
			return {
				...state,
				mouseCoordinates: action.payload,
			};
		case ActionType.CHANGE_COLOR_THEME:
			return {
				...state,
				isDefaultTheme: !state.isDefaultTheme,
			};
		case ActionType.EDIT_CALENDAR_EVENT:
			return {
				...state,
				isEventModalEditable: !state.isEventModalEditable
			}
		default:
			return state;
	}
};

export default UIComponentsreducer;
