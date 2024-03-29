import {DayType} from '../ts-generalTypes/propTypes'
export type CalendarEventData = {
    uniqueEventId: string,
    date?: string,
    title: string,
    timeFrom: string,
    timeTo: string,
    description: string
}

export interface UIinitialState {
    isSideBarVisible?: boolean,
    isEventCreatorWindowVisible?: boolean,
    isEventModalVisible?: boolean,
    isEventModalEditable: boolean,
    mouseCoordinates?: {x: number, y: number},
    downloadWeekDaysName: { day: string, id: number }[],
    isDefaultTheme: boolean,
    isLoginWindowVisible: boolean,
    currentCalendarView: 'year' | 'month' | 'day' | 'list',
}

export interface CalendarInitialState {
    currentDate?: {
        dayName: string,
        data: number,
        month: string,
        year: number},
    currentCalendar?: DayType[][],
    currentSelectedDate?: string,
    events: CalendarEventData[],
    curentSelectedEventId?: string,
    currentCalendarView?: string,
}

export type RootReducer = {
    uiReducer: UIinitialState,
    calendar: CalendarInitialState,
}