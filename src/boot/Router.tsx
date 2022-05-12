import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";

import "./index.css";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	);
};

export default Router;
