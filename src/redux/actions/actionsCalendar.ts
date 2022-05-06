import { ActionType } from "../ActionTypesConstants";
import { Event } from "../../ts-generalTypes/calendarActionInterfaces";

const pageOnLoad = () => {
	return {
		type: ActionType.PAGE_WAS_LOADED,
	};
};

const createEvent = (value: Event) => {
	let payload = {
		eventId: value.eventId,
		data: value.data,
		title: value.title,
		description: value.description,
		timeFrom: value.timeFrom,
		timeTo: value.timeTo,
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

const monthReverse = () => {
	return {
		type: ActionType.SWITCH_TO_A_MONTH_AGO,
		payload: -1,
	};
};
const monthForward = () => {
	return {
		type: ActionType.SWITCH_TO_ONE_MONTH_FORWARD,
		payload: 1,
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
