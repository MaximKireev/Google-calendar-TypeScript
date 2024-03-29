import React from "react";
import "./Header.css";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { MonthChanger } from "./MonthChanger/MonthChanger";
import { CurrentDateHeader } from "../Header/CurrentDateHeader/CurrentDateHeader";
import { SetTodayHeader } from "./SetTodayHeader/SetTodayHeader";
import { ProjectLogo } from "./ProjectLogo";
import { SideMenuSwitcher } from "./SideMenuSwitcher";
import { LoginIcon } from './LoginComponent/LoginIcon';
import { CalendarViewChanger } from './CalendarViewChanger/CalendarViewChanger'

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
					<CalendarViewChanger />
					<ThemeSwitcher />
					<LoginIcon />
				</div>
				
			</ErrorBoundary>
		</div>
	);
};

export default Header;
