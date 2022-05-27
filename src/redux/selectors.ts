import {RootReducer} from '../ts-generalTypes/InitialStateInterfaces'
export const selectCurrentCalendar = (state: RootReducer) => state.calendar.currentCalendar;
export const selectIsEventCreatorWindowVisible = (state: RootReducer) => state.uiReducer.isEventCreatorWindowVisible;
export const selectIsSideBarVisible = (state: RootReducer) =>  state.uiReducer.isSideBarVisible
export const selectCurrentSelectedEventId = (state: RootReducer) => state.calendar.curentSelectedEventId
export const selectWeekDaysName = (state: RootReducer) =>  state.uiReducer.downloadWeekDaysName
export const selectColorTheme = (state: RootReducer) =>  state.uiReducer.isDefaultTheme;
export const selectIsEventModalVisible = (state: RootReducer) => state.uiReducer.isEventModalVisible;
export const setIsEventModalEditable = (state: RootReducer) => state.uiReducer.isEventModalEditable;
export const setListOfEventsInStorage = (state: RootReducer) => state.calendar.events;
export const selectisLoginWindowVisible = (state: RootReducer) => state.uiReducer.isLoginWindowVisible;



// export const selectEvents = (state: RootReducer) => state.calendar.events
// export const selectEventsMap = createSelector( // from reselect
//     selectEvents,
//     (events) => (
//         events.reduce((acc, event) => (
//             const eventDay = ...;
//             const dayEvents = acc[eventDay] || [];
//             return {...access, [eventDay]: [...dayEvents, event]]}
//         ), {})
//     )
// );