import {
	CHANGE_CALENDAR_VIEW,
	CHANGE_COLOR_THEME,
	CLOSE_EVENT_CREATOR_WINDOW,
	CLOSE_EVENT_MODAL_POPUP,
	EDIT_CALENDAR_EVENT,
	HIDE_LOGIN_WINDOW,
	OPEN_EVENT_CREATOR_WINDOW,
	OPEN_EVENT_MODAL_POPUP,
	SET_MOUSE_COORDINATES,
	SHOW_HIDE_SIDEBAR,
	SHOW_LOGIN_WINDOW
} from "./ui-events-actions-constants";

export const toggleMenu = () => ({ type: SHOW_HIDE_SIDEBAR });
export const openEventCreatorWindow = () => ({type: OPEN_EVENT_CREATOR_WINDOW});
export const closeEventCreatorWindow = () => ({type: CLOSE_EVENT_CREATOR_WINDOW});
export const openEventModalPopup = () => ({type: OPEN_EVENT_MODAL_POPUP});
export const closeEventModalPopup = () => ({type: CLOSE_EVENT_MODAL_POPUP});
export const setMouseCoordinates = (coordinates: object) => ({type: SET_MOUSE_COORDINATES, payload: coordinates});
export const changeColorTheme = () => ({type: CHANGE_COLOR_THEME});
export const makeEventDetailsModalEditable = () => ({type: EDIT_CALENDAR_EVENT});
export const showLoginWindow = () => ({type: SHOW_LOGIN_WINDOW});
export const hideLoginWindow = () => ({type: HIDE_LOGIN_WINDOW});
export const changeCalendarView = (view: string) => ({type: CHANGE_CALENDAR_VIEW, payload: view});




