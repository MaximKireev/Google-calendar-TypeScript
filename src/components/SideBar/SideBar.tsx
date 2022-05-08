import "./SideBar.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import React from "react";

export const Sidebar: React.FC = () => {
	return (
		<div className="sidebar-wrapper">
			<ErrorBoundary>
            </ErrorBoundary>
		</div>
	);
};
