import React from "react";
import { useDispatch } from "react-redux";
import { changeColorTheme } from "../../../redux/actions/actionsUI";
import { Switch } from "antd";
import {useLocalStorageValue} from '../../../hooks/useLocalStorageValue'

export const ThemeSwitcher: React.FC = () => {
	const dispatch = useDispatch();
	const [themeValue, setThemeValue] = useLocalStorageValue(
		'Light',
		"currentTheme"
	);
	const [checked, setChecked] = useLocalStorageValue(
		'true',
		"themeSwitcherChecked"
	);
	const themeSwitchHandler = (val: boolean) => {
		val? setThemeValue("Dark") : setThemeValue("Light");
		val? setChecked(val) : setChecked(val);
		dispatch(changeColorTheme())
	}

	return (
		<Switch
			defaultChecked = {checked}
			checkedChildren={themeValue}
			unCheckedChildren={themeValue}
			onChange={(val) => themeSwitchHandler(val)}
		/>
	);
};
