import React from "react";
import { useDispatch } from "react-redux";
import { Switch } from "antd";
import { changeColorTheme } from "../../../redux/ui-events/ui-events-actions";

import {
	getLocalStorageData,
	setLocalStorageData,
} from "../../../helpers/local-storage-utils";

export const ThemeSwitcher: React.FC = () => {
	const dispatch = useDispatch();
	const checked: string = getLocalStorageData("themeSwitcherChecked");
	const themeSwitchHandler = (val: boolean) => {
		val
			? setLocalStorageData("currentTheme", "Dark")
			: setLocalStorageData("currentTheme", "Light");
			setLocalStorageData("themeSwitcherChecked", JSON.stringify(val));
		dispatch(changeColorTheme());
	};

	return (
		<Switch
			defaultChecked={Boolean(checked)}
			checkedChildren={Boolean(checked) ? 'Dark' : 'Light'}
			unCheckedChildren={!Boolean(checked) ? 'Light' : 'Dark'}
			onChange={(val: boolean) => themeSwitchHandler(val)}
		/>
	);
};
