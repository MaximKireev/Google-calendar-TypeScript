import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Calendar from '../components/MonthViewCalendar/MonthCalendar'
import { YearViewCalendar } from "../components/year-view-calendar/YearViewCalendar";


import "./index.css";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/calendar/month" element={<Calendar size = 'large' />} />
			<Route path="/calendar/year" element={<YearViewCalendar />} />
			<Route path="/calendar/day" element={<App />} />
			<Route path="/calendar/list-of-events" element={<App />} />
		</Routes>
	);
};

export default Router;
