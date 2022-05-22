export enum StorageVariables {
	CURRENT_THEME = "CURRENT_THEME",
	EVENTS = "EVENTS",
}

import { CalendarInitialState } from "../ts-generalTypes/InitialStateInterfaces";


export const getListOfEventsFromLocalStorage = (key: StorageVariables) => {
	return JSON.parse(window.localStorage.getItem(key)!);
};

export const setListOfEventsToLocalStorage = (
	key: StorageVariables,
	value: string
) => {
	return JSON.stringify(window.localStorage.setItem(key, value));
};

export const loadState = () => {
	try {
		const serializedState: string = localStorage.getItem("state")!;
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state: CalendarInitialState) => {
	try {
		const serializedState: string = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch (err) {
		console.error(err);
	}
};
