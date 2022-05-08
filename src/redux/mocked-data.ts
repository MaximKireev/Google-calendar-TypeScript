import { CalendarEventData } from "../ts-generalTypes/InitialStateInterfaces";

export const mockedData: CalendarEventData[] = [
	{
		id: '4.5.2022', // timestemp, 04.04.2022 12:55
		description: "123",
	},
	{
		id: '4.5.2022', // timestemp, 04.04.2022 13:55
		description: "234",
	},
	{
		id: '6.5.2022', // timestemp, 04.04.2025 12:55
		description: "33",
	},
	{
		id: '7.5.2022', // timestemp, 04.04.2025 12:55
		description: "555",
	},
	{
		id: '8.5.2022', // timestemp, 04.04.2025 12:55
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vero nostrum voluptates obcaecati consequuntur recusandae, deserunt nisi eaque. Quisquam enim laudantium, quasi aperiam ea quam doloremque. Voluptates et saepe placeat.',
	},
];


export const getMonthCalendarEvents = (id: string) => {
	return mockedData.filter(item => item.id === id)
}