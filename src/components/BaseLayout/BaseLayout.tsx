import Header from "../Header/Header";
import "./BaseLayout.css";
import React from "react";
import { Sidebar } from "../SideBar/SideBar";
import { useSelector } from "react-redux";
import { 
	selectIsSideBarVisible,
	selectIsEventCreatorWindowVisible
} from "../../redux/selectors";
import Calendar from "../MonthViewCalendar/MonthCalendar";
import EventCreatorWindow from '../EventCreator/EventCreatorForm'
import './BaseLayout.css'

export const BaseLayout: React.FC = () => {
	const isSideBarVisible = useSelector(selectIsSideBarVisible);
	const isEventCreatorWindowVisible = useSelector(selectIsEventCreatorWindowVisible)

	return (
		<div className="baseLayout-wrapper">
			<Header />
			<div className="main-content">
				{isSideBarVisible ? <Sidebar /> : null}
				<div className="calendar-wrapper">
				<Calendar />
				</div>
				{isEventCreatorWindowVisible? <EventCreatorWindow /> : null}
			</div>
		</div>
	);
};
