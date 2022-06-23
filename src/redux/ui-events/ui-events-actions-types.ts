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

export interface toggleMenuAction {
  type: typeof SHOW_HIDE_SIDEBAR;
  payload?: Boolean;
}

export interface openEventCreatorWindowAction {
  type: typeof OPEN_EVENT_CREATOR_WINDOW;
}

export interface closeEventCreatorWindowAction {
  type: typeof CLOSE_EVENT_CREATOR_WINDOW;
}

export interface openEventModalPopupAction {
  type: typeof OPEN_EVENT_MODAL_POPUP;
  payload: boolean;
}

export interface closeEventModalPopupAction {
  type: typeof CLOSE_EVENT_MODAL_POPUP;
}

export interface setMouseCoordinatesAction {
  type: typeof SET_MOUSE_COORDINATES;
  payload: { x: number; y: number };
}

export interface changeColorTheme {
  type: typeof CHANGE_COLOR_THEME;
}

export interface editCalendarEvent {
  type: typeof EDIT_CALENDAR_EVENT;
}

export interface showLoginWindow {
  type: typeof SHOW_LOGIN_WINDOW;
}

export interface hideLoginWindow {
  type: typeof HIDE_LOGIN_WINDOW;
}

export interface changeCalendarView {
  type: typeof CHANGE_CALENDAR_VIEW,
  payload: string,
}

export type UIAction =
  | toggleMenuAction
  | openEventCreatorWindowAction
  | closeEventCreatorWindowAction
  | openEventModalPopupAction
  | closeEventModalPopupAction
  | setMouseCoordinatesAction
  | changeColorTheme
  | editCalendarEvent
  | showLoginWindow
  | changeCalendarView
  | hideLoginWindow;
