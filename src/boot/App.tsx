import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import {ThemeContext} from '../components/ThemeProvider/ThemeContext'

const App: React.FC = () => {
	const themes = React.useContext(ThemeContext);


	return (
		<div className="app"
		style={themes.dark}
		>
			<ThemeContext.Provider value={themes}>
				<BaseLayout />
				</ThemeContext.Provider>
		</div>
	);
};

export default App;
