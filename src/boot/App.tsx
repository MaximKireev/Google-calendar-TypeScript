import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectColorTheme } from "../redux/selectors";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { useThemeContext } from "../hooks/useThemeContext";

const App: React.FC = () => {
	const theme = useThemeContext();
	const isDefaulrColorTheme = useSelector(selectColorTheme);

	return (
		<div className="app" style={!isDefaulrColorTheme ? theme.light : theme.dark}>
			<BaseLayout />
			<ToastContainer />
		</div>
	);
};

export default App;
