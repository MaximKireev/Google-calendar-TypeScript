import {DayType} from '../ts-generalTypes/propTypes'
export interface UIinitialState {
    isSideBarVisible?: boolean,
    isEventCreatorWindowVisible?: boolean,
    isEventModalVisible?: boolean,
    mouseCoordinates?: {x: number, y: number},
    downloadWeekDaysName: { day: string, id: number }[]
};
export interface CalendarInitialState {
    currentDate?: {
        dayName: string,
        data: number,
        month: string,
        year: number},
    currentCalendar?: CalendarMatrix | [],
    currentSelectedDate?: string,
    initialEvents?: [],
    curentSelectedEventId?: string,
    currentCalendarView?: string,
    };
export interface RootReducer {
    UIreducer: UIinitialState,
    calendarReducer: CalendarInitialState,
}
export type WeekDayObject = {
    day:  string | number,
    id:  number | string,
}
export type DateObject  = {
    cell?: boolean,
    day: number | string,
    id: number | string,
    nextOrPrev?: boolean
}

export type CalendarMatrix = 
Array<Array<(DateObject | WeekDayObject)>>