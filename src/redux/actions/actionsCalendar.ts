import { ActionType } from "../ActionTypesConstants";
import { CalendarEventData } from "../../ts-generalTypes/InitialStateInterfaces";

const pageOnLoad = () => {
	return {
		type: ActionType.PAGE_WAS_LOADED,
	};
};

const createEvent = (value: CalendarEventData) => {
	let payload = {
		id: value.id,
		title: value.title,
		timeFrom: value.timeFrom,
		timeTo: value.timeTo, // need change to timestemp
		description: value.description
	};
	return {
		type: ActionType.CREATE_NEW_CALENDAR_EVENT,
		payload,
	};
};
const deleteEvent = (id: string) => ({
	type: ActionType.DELETE_CALENDAR_EVENT,
	payload: id,
});

const setToday = () => {
	return {
		type: ActionType.SET_DATE_TO_TODAY,
	};
};

const monthReverse = (val: number) => {
	return {
		type: ActionType.SWITCH_TO_A_MONTH_AGO,
		payload: val,
	};
};
const monthForward = (val: number) => {
	return {
		type: ActionType.SWITCH_TO_ONE_MONTH_FORWARD,
		payload: val,
	};
};
const setSelectedDate = (id: string) => {
	return {
		type: ActionType.SET_SELECTED_DATE,
		payload: id,
	};
};

const minusOneDay = () => {
	return {
		type: ActionType.SWITCH_TO_A_MINUS_ONE_DAY,
		payload: -1,
	};
};
const plusOneDayForward = () => {
	return {
		type: ActionType.SWITCH_TO_A_ONE_DAY_FORWARD,
		payload: 1,
	};
};
const dayComponentWasLoaded = () => {
	return {
		type: ActionType.DAY_COMPONENT_WAS_LOADED,
	};
};
const monthComponentWasLoaded = () => {
	return {
		type: ActionType.MONTH_COMPONENT_WAS_LOADED,
	};
};

const setSelectedEventId = (id: string) => {
	return {
		type: ActionType.SET_SELECTED_EVENT_ID,
		payload: id,
	};
};

export {
	createEvent,
	deleteEvent,
	setToday,
	monthReverse,
	monthForward,
	pageOnLoad,
	setSelectedDate,
	minusOneDay,
	plusOneDayForward,
	dayComponentWasLoaded,
	monthComponentWasLoaded,
	setSelectedEventId,
};
