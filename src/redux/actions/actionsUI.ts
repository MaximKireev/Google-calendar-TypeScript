import { ActionType } from "../ActionTypesConstants";

export const toggleMenu = () => ({ type: ActionType.SHOW_HIDE_SIDEBAR });

export const openEventCreatorWindow = () => ({
	type: ActionType.OPEN_EVENT_CREATOR_WINDOW,
});

export const closeEventCreatorWindow = () => ({
	type: ActionType.CLOSE_EVENT_CREATOR_WINDOW,
});

export const openEventModalPopup = () => ({
	type: ActionType.OPEN_EVENT_MODAL_POPUP,
});

export const closeEventModalPopup = () => ({
	type: ActionType.CLOSE_EVENT_MODAL_POPUP,
});

export const setMouseCoordinates = (coordinates: object) => ({
	type: ActionType.SET_MOUSE_COORDINATES,
	payload: coordinates,
});

export const changeColorTheme = () => ({
	type: ActionType.CHANGE_COLOR_THEME,
});


