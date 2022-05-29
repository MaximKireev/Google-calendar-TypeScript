import { daysInMonth } from "./fixtures";
import { DayType } from "../ts-generalTypes/propTypes";

let year: number = new Date().getUTCFullYear();
let month: number = new Date().getUTCMonth();

export const createCalendarMatrix = (date = new Date(), monthChange = 0, defaultMonth?: number, defaultYear?: number): DayType[][] => {
	month = month + monthChange;
	defaultMonth? month = defaultMonth: month;
	defaultYear? year = defaultYear : year;
	if(month < 0){
		month = 11;
		year --
	}
	if(month > 11){
		month = 0;
		year++
	}

	let firstDayOfMonth: number = new Date(year, month, 1).getUTCDay();
	let numOfDays: number = daysInMonth[month];

	let counter: number = 1;
	let prevMonth = (month - 1) < 0 ? 0 : month - 1
	let counterAfter: number = 1;
	let counterBefore: number = 1;
	const matrix: DayType[][] = [];

	for (let row = 0; row < 6; row++) {
		matrix.push([]);

		for (let col = 0; col < 7; col++) {
			if (row === 0 && col < firstDayOfMonth) {

				matrix[row][col] = {
					day: daysInMonth[prevMonth] - firstDayOfMonth + counterBefore,
					id: `${daysInMonth[prevMonth] - firstDayOfMonth + counterBefore}.${month}.${year}`,
					cell: true,
					isToday: 
					counter === date.getDate() && 
					month === date.getMonth() && 
					year === date.getFullYear(),
				};
				counterBefore++;
			}

			if (row === 0 && col >= firstDayOfMonth) {

				matrix[row][col] = {
					day: counter,
					id: `${counter}.${month + 1}.${year}`,
					cell: true,
					isCurrentMonth: true,
					isToday: counter === date.getDate() && 
					month === date.getMonth() && 
					year === date.getFullYear(),
				};
				counter++;
			}

			if (row > 0 && counter <= numOfDays) {
				matrix[row][col] = {
					day: counter,
					id: `${counter}.${month + 1}.${year}`,
					cell: true,
					isCurrentMonth: true,
					isToday: counter === date.getDate() && 
					month === date.getMonth() && 
					year === date.getFullYear(),
				};
				counter++;
			} else if (row > 0 && counter > numOfDays) {
				matrix[row][col] = {
					day: counterAfter,
					id: `${counterAfter}.${month + 2}.${year}`,
					cell: true,
				};
				counterAfter++;
			}
		}
	}


	return matrix;
};