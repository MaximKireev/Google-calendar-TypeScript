import React from "react";
import "./SideBar.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

export const Sidebar: React.FC = () => {
	return (
		<div className="sidebar-wrapper">
			<ErrorBoundary></ErrorBoundary>
		</div>
	);
};
