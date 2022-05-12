import React from "react";
import { useDispatch } from "react-redux";
import { MenuOutlined, CalendarOutlined } from "@ant-design/icons";
import "./Header.css";
import { toggleMenu } from "../../redux/actions/actionsUI";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import { MonthChanger } from "./MonthChanger/MonthChanger";
import { CurrentDateHeader } from "../Header/CurrentDateHeader/CurrentDateHeader";
import { SetTodayHeader } from "./SetTodayHeader/SetTodayHeader";

const Header: React.FC = () => {
	const dispatch = useDispatch();
	return (
		<div className="header-wrapper">
			<ErrorBoundary>
				<div className="logo-menu-wrapper">
					<button
						onClick={() => dispatch(toggleMenu())}
						className="burger-menu"
					>
						<MenuOutlined />
					</button>
					<CalendarOutlined style={{ fontSize: "36px", color: "#08c" }} />
					<span className="logo-text1">Google</span>
					<span className="logo-text2"> Calendar</span>
				</div>
				<MonthChanger />
				<SetTodayHeader />
				<CurrentDateHeader />
			</ErrorBoundary>
			<div className="headerWriteSide-wrapper">
				<ThemeSwitcher />
			</div>
		</div>
	);
};

export default Header;
