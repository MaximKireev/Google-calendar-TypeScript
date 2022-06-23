import {RootState} from "../store";

export const selectUIState = (state: RootState) => state.uiReducer;

export const selectIsEventCreatorWindowVisible = (state: RootState) => selectUIState(state).isEventCreatorWindowVisible;
export const selectIsSideBarVisible = (state: RootState) => selectUIState(state).isSideBarVisible
export const selectWeekDaysName = (state: RootState) => selectUIState(state).downloadWeekDaysName
export const selectColorTheme = (state: RootState) => selectUIState(state).isDefaultTheme;
export const selectIsEventModalVisible = (state: RootState) => selectUIState(state).isEventModalVisible;
export const setIsEventModalEditable = (state: RootState) => selectUIState(state).isEventModalEditable;
export const selectisLoginWindowVisible = (state: RootState) => selectUIState(state).isLoginWindowVisible;
export const selectCurrentCalendarView = (state: RootState) => selectUIState(state).currentCalendarView;
