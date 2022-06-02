import React from "react";
import "./SideBar.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import Calendar from '../MonthViewCalendar/MonthCalendar'

export const Sidebar: React.FC = () => {
	return (
		<div className="sidebar-wrapper"
		>
			<ErrorBoundary>
				<Calendar size = 'small'/>
			</ErrorBoundary>
		</div>
	);
};
