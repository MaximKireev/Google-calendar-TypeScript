import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import "./BaseLayout.css";
import { Sidebar } from "../SideBar/SideBar";
import {
	selectIsSideBarVisible,
	selectIsEventCreatorWindowVisible,
} from "../../redux/selectors";
import Calendar from "../MonthViewCalendar/MonthCalendar";
import EventCreatorWindow from "../EventCreator/EventCreatorForm";
import { EventDetailsPopup } from "../EventDetailsModal/ShowEventDetails/ShowEventDetails";

export const BaseLayout: React.FC = () => {
	const isSideBarVisible = useSelector(selectIsSideBarVisible);
	const isEventCreatorWindowVisible = useSelector(
		selectIsEventCreatorWindowVisible
	);

	return (
		<div className="baseLayout-wrapper">
			<Header />
			<div className="main-content">
				{isSideBarVisible ? <Sidebar /> : null}
				<Calendar />
				{isEventCreatorWindowVisible ? <EventCreatorWindow /> : null}
				<EventDetailsPopup />
			</div>
		</div>
	);
};
