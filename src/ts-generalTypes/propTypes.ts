export type CalendarDateObjectProps = {
    dayprop: DayType,
    children?: JSX.Element,

}
export interface CalendarHeaderCellProps {
    days: { day: string, id: number };
    children?: JSX.Element;

}
export type DayType = {
    day: number,
    id: string,
    cell: boolean, 
    nextOrPrev?: boolean
}