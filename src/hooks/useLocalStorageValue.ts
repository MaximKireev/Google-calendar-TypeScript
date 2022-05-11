import React from "react";
import { mockedData } from "../redux/mocked-data";

export const useLocalStorageValue = (
	initialValue = mockedData,
	key: string
) => {
	const getDataFromStorage = () => {
		const storage = localStorage.getItem(key);

		if (storage) {
			return JSON.parse(storage);
		}
		return initialValue;
	};

	const [value, setValue] = React.useState(getDataFromStorage);

	React.useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
};
