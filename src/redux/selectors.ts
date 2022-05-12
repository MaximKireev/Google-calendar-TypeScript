import {RootReducer} from '../ts-generalTypes/InitialStateInterfaces'
export const selectCurrentCalendar = (state: RootReducer) => state.calendar.currentCalendar;
export const selectIsEventCreatorWindowVisible = (state: RootReducer) => state.uiReducer.isEventCreatorWindowVisible;
export const selectIsSideBarVisible = (state: RootReducer) =>  state.uiReducer.isSideBarVisible
export const selectCurrentSelectedEventId = (state: RootReducer) => state.calendar.curentSelectedEventId
export const selectWeekDaysName = (state: RootReducer) =>  state.uiReducer.downloadWeekDaysName
export const selectColorTheme = (state: RootReducer) =>  state.uiReducer.isDefaultTheme

