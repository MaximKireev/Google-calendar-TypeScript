import { combineReducers } from "redux";
import UIComponentsreducer from './UIeventsReducer'
import calendarEventsReducer from './calendarEventsReducer'

export const masterReducer = combineReducers({
    UIreducer: UIComponentsreducer,
    calendarReducer: calendarEventsReducer,
})