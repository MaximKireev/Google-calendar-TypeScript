import { toggleMenu } from "../../redux/actions/actionsUI";
// import {ChangeCalendarView} from './ChangeCalendarView/ChangeCalendarView'
import "./Header.css";
import { MenuOutlined, CalendarOutlined } from "@ant-design/icons";
// import PeriodControl from './PeriodControl'
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Settings } from "./Settings/Settings";
import { useDispatch } from "react-redux";
import React from "react";
import {MonthChanger} from '../MonthChanger/MonthChanger'

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
					<span className="logo-text2">Calendar</span>
				</div>
				<MonthChanger />
			</ErrorBoundary>
			<div className="headerWriteSide-wrapper">
				{/* < ChangeCalendarView/> */}
				<Settings />
			</div>
		</div>
	);
};

export default Header;
