import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import "./BaseLayout.css";
import { Sidebar } from "../SideBar/SideBar";
import {
	selectIsSideBarVisible,
	selectIsEventCreatorWindowVisible,
	selectIsEventModalVisible,
	selectisLoginWindowVisible 

} from "../../redux/selectors";
import Calendar from "../MonthViewCalendar/MonthCalendar";
import EventCreatorWindow from "../EventCreator/EventCreatorForm";
import { EventDetailsPopup } from "../EventDetailsModal/ShowEventDetails/ShowEventDetails";
import { LoginWindow } from '../Header/LoginComponent/LoginWindow'

export const BaseLayout: React.FC = () => {
	const isSideBarVisible = useSelector(selectIsSideBarVisible);
	const isEventCreatorWindowVisible = useSelector(
		selectIsEventCreatorWindowVisible
	);
	const isEventModalVisible = useSelector(selectIsEventModalVisible);
	const isLoginWindowVisible = useSelector(selectisLoginWindowVisible)

	return (
		<div className="baseLayout-wrapper">
			<Header />
			<div className="main-content">
				{isSideBarVisible ? <Sidebar /> : null}
				<Calendar size = 'large' />
				{isEventCreatorWindowVisible ? <EventCreatorWindow /> : null}
				{isEventModalVisible? <EventDetailsPopup /> : null}
				{isLoginWindowVisible? <LoginWindow /> : null}
			</div>
		</div>
	);
};
