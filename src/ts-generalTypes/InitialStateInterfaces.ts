import {DayType} from '../ts-generalTypes/propTypes'
export type CalendarEventData = {
    id: string, // need change to timestemp
    description: string
}

export interface UIinitialState {
    isSideBarVisible?: boolean,
    isEventCreatorWindowVisible?: boolean,
    isEventModalVisible?: boolean,
    mouseCoordinates?: {x: number, y: number},
    downloadWeekDaysName: { day: string, id: number }[]
}

export interface CalendarInitialState {
    currentDate?: {
        dayName: string,
        data: number,
        month: string,
        year: number},
    currentCalendar?: DayType[][],
    currentSelectedDate?: string,
    initialEvents?: CalendarEventData[],
    curentSelectedEventId?: string,
    currentCalendarView?: string,
}

export type RootReducer = {
    UIreducer: UIinitialState,
    calendarReducer: CalendarInitialState,
}