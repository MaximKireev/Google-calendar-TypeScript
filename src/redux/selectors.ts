import {RootReducer} from '../ts-generalTypes/InitialStateInterfaces'
// export const selectCurrentDate = (state: CalendarInitialState) => state.calendarReducer.currentDate;
// export const selectCurrentSelectedDate = state => state.calendarReducer.currentSelectedDate;
// export const selectInitialEvents = state => state.calendarReducer.initialEvents;
// export const selectCurrentCalendar = state => state.calendarReducer.currentCalendar;
// export const selectIsEventCreatorWindowVisible = state => state.UIreducer.isEventCreatorWindowVisible;
export const selectIsSideBarVisible = (state: RootReducer) =>  state.UIreducer.isSideBarVisible
// export const selectIsEventModalVisible = state => state.UIreducer.isEventModalVisible;
// export const selectMouseCoordinates = state => state.UIreducer.mouseCoordinates;
// export const selectCurrentCalendarView = state => state.UIreducer.currentCalendarView
// export const selectCurrentSelectedEventId = state => state.calendarReducer.curentSelectedEventId

