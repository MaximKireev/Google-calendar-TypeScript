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
    currentCalendar?: Array<Array<(DayType | number)>>,
    currentSelectedDate?: string,
    initialEvents?: [] | undefined,
    curentSelectedEventId?: string,
    currentCalendarView?: string,
    };
export type RootReducer = {
    UIreducer: UIinitialState,
    calendarReducer: CalendarInitialState,
}