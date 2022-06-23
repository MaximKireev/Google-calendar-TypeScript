import {combineReducers, createStore} from "redux";
import UIComponentsreducer, {UiEventsState} from "./ui-events/ui-events-reducer";
import calendarEventsReducer, {CalendarEventsState} from "./calendar-events/calendar-events-reducer";

export type RootState = {
  uiReducer: UiEventsState,
  calendar: CalendarEventsState,
};

const store = createStore(combineReducers({
  uiReducer: UIComponentsreducer,
  calendar: calendarEventsReducer,
}));

export default store;
