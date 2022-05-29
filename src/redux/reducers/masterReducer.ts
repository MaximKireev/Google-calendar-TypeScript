import { combineReducers } from "redux";
import UIComponentsreducer from "./UIeventsReducer";
import calendarEventsReducer from "./calendarEventsReducer";
import {yearReducer} from './yearReducer.js'

export const masterReducer = combineReducers({
	uiReducer: UIComponentsreducer,
	calendar: calendarEventsReducer,
});
