export interface UIinitialState {
    isSideBarVisible?: boolean,
    isEventCreatorWindowVisible?: boolean,
    isEventModalVisible?: boolean,
    mouseCoordinates?: {x: number, y: number},
};
export interface CalendarInitialState {
    currentDate?: {
        dayName: string,
        data: number,
        month: string,
        year: number},
    currentCalendar?: [],
    currentSelectedDate?: string,
    initialEvents?: [] | undefined,
    curentSelectedEventId?: string,
    currentCalendarView?: string,
    };
export type RootReducer = {
    UIreducer: UIinitialState,
    calendarReducer: CalendarInitialState,
}