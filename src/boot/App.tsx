import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { useThemeContext } from "../hooks/useThemeContext";
import {selectColorTheme} from "../redux/ui-events/ui-events-selectors";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
	const theme = useThemeContext();
	const isDefaultColorTheme = useSelector(selectColorTheme);

	return (
		<div className="app" style={!isDefaultColorTheme ? theme.light : theme.dark}>
			<BaseLayout />
			<ToastContainer />
		</div>
	);
};

export default App;
