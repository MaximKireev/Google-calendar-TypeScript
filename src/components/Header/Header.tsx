import React from "react";
import "./Header.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { MonthChanger } from "./MonthChanger/MonthChanger";
import { CurrentDateHeader } from "../Header/CurrentDateHeader/CurrentDateHeader";
import { SetTodayHeader } from "./SetTodayHeader/SetTodayHeader";
import { ProjectLogo } from "./ProjectLogo";
import { SideMenuSwitcher } from "./SideMenuSwitcher";

const Header: React.FC = () => {
	return (
		<div className="header-wrapper">
			<ErrorBoundary>
				<div className="logo-menu-wrapper">
					<SideMenuSwitcher />
					<ProjectLogo />
				</div>
				<MonthChanger />
				<SetTodayHeader />
				<CurrentDateHeader />
				<div className="headerWriteSide-wrapper">
					<ThemeSwitcher />
				</div>
			</ErrorBoundary>
		</div>
	);
};

export default Header;
