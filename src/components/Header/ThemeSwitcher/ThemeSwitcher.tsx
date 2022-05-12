import React from "react";
import { useDispatch } from "react-redux";
import { changeColorTheme } from "../../../redux/actions/actionsUI";
import { Switch } from "antd";

export const ThemeSwitcher: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<Switch
			checkedChildren={"Dark"}
			unCheckedChildren={"Light"}
			onChange={() => dispatch(changeColorTheme())}
		/>
	);
};
