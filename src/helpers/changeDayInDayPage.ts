import {monthNames, days} from './fixtures'

type ParsedDateObj = {
day: number,
monthNumber: number,
monthName: string,
year: number,
weekDay: { day: string; id: number},
}

export const changeDateInDateView = (date, param): ParsedDateObj => {
    if(!date) return
    const dateToArr:  [number, number, number] = [date.year, date.monthNumber, date.day]
    const parsedDate: Date = new Date(...dateToArr)
    let newDate = parsedDate.setDate(parsedDate.getDate() + param);


    let parsedDateObj: ParsedDateObj;
    
    parsedDateObj.day = new Date(newDate).getDate();
    parsedDateObj.monthNumber = new Date(newDate).getMonth();
    parsedDateObj.monthName= monthNames[parsedDateObj.monthNumber];
    parsedDateObj.year = new Date(newDate).getFullYear();
    parsedDateObj.weekDay = days[new Date(+parsedDateObj.year, +parsedDateObj.monthNumber, +parsedDateObj.day).getDay()]
    return parsedDateObj
}