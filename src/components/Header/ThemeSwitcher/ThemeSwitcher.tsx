import React from "react";
import { Switch } from "antd";

export const ThemeSwitcher: React.FC = () => {
	function onChange(checked: boolean) {
		console.log(`switch to ${checked}`);
	}
	return (
		<Switch
			checkedChildren={'Dark'}
			unCheckedChildren={'Light'}
			onChange={(val) => onChange(val)}
		/>
	);
};
