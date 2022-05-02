
// import {createCalendarMatrix, changeMonth} from '../../utils/createCalendar'
import {getCurrentDate} from '../../helpers/getCurrentDate'
// import {changeDateInDateView} from '../../utils/changeDateInDateView'
// import {dateParser} from '../../utils/dateParser'
import {CalendarInitialState} from '../../ts-generalTypes/InitialStateInterfaces'
import {CalendarEventAction} from '../../ts-generalTypes/calendarActionInterfaces'
import {ActionType} from '../ActionTypesConstants'
let eventsInLocalStorage = 
JSON.parse(localStorage.getItem('events') || '[]')!;

// let currentCalendar = createCalendarMatrix();



const initialState: CalendarInitialState = {
    currentDate: getCurrentDate(),
    currentCalendar: [],
    currentSelectedDate: '',
    initialEvents: eventsInLocalStorage,
    curentSelectedEventId: '',
    currentCalendarView: '',
    };

const calendarEventsReducer = (state = initialState, action: CalendarEventAction) => {
    switch (action.type) {

        case ActionType.PAGE_WAS_LOADED:
            return state.initialEvents;
        case ActionType.DAY_COMPONENT_WAS_LOADED:
            return {
                ...state,
                currentCalendarView: 'dayView'
              };
        case ActionType.MONTH_COMPONENT_WAS_LOADED:
            return {
                ...state,
                currentCalendarView: 'monthView'
            };

        // case ActionType.CREATE_NEW_CALENDAR_EVENT:
        //     console.log(action.payload)
        //  return {
        //         ...state,
        //         initialEvents: [...state.initialEvents, action.payload]
        //       };  
        //  case ActionType.DELETE_CALENDAR_EVENT:
        //     // let idx = state.initialEvents.findIndex(el => el.eventId === action.payload)
        //      //console.log(idx)
        //     return {
        //         ...state,
        //         initialEvents: [...state.initialEvents, action.payload]
        //       }; 
        
        case ActionType.SET_DATE_TO_TODAY:
            return {
                ...state,
            }
        // case ActionType.SET_SELECTED_DATE:
            
        // return {
        //         ...state,
        //         currentSelectedDate: dateParser(action.payload),
        //       };
        // case ActionType.SWITCH_TO_A_MONTH_AGO:
        //     return {
        //         ...state,
        //         currentCalendar: changeMonth(action.payload)
        //     };
        // case ActionType.SWITCH_TO_ONE_MONTH_FORWARD:
        //     return {
        //         ...state,
        //         currentCalendar: changeMonth(action.payload)
        //     };
        // case ActionType.SWITCH_TO_A_MINUS_ONE_DAY:
        //     return {
        //         ...state,
        //         currentSelectedDate: changeDateInDateView(state.currentSelectedDate, action.payload)
        //     };
        // case ActionType.SWITCH_TO_A_ONE_DAY_FORWARD:
        //     return {
        //         ...state,
        //         currentSelectedDate: changeDateInDateView(state.currentSelectedDate, action.payload)
        //     };
        case ActionType.SET_SELECTED_EVENT_ID:
            return {
                ...state,
                curentSelectedEventId: action.payload
            };
      
        default:
        return state
    }
}

export default calendarEventsReducer