import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import "./BaseLayout.css";
import { Sidebar } from "../SideBar/SideBar";
import {
	selectIsSideBarVisible,
	selectIsEventCreatorWindowVisible,
	selectIsEventModalVisible,
	selectisLoginWindowVisible,
	selectCurrentCalendarView
} from "../../redux/selectors";
import Calendar from "../MonthViewCalendar/MonthCalendar";
import { YearViewCalendar } from '../year-view-calendar/YearViewCalendar'
import EventCreatorDialog from "../EventCreator/EventCreatorDialog";
import { EventDetailsPopup } from "../EventDetailsModal/ShowEventDetails/ShowEventDetails";
import { LoginWindow } from '../Header/LoginComponent/LoginWindow'
import { ListOfEventsView } from '../../components/list-of-events-calendar/ListOfEventsView'

export const BaseLayout: React.FC = () => {
	const isSideBarVisible = useSelector(selectIsSideBarVisible);
	const isEventCreatorWindowVisible = useSelector(selectIsEventCreatorWindowVisible);
	const isEventModalVisible = useSelector(selectIsEventModalVisible);
	const isLoginWindowVisible = useSelector(selectisLoginWindowVisible)
	const currentCalendarView = useSelector(selectCurrentCalendarView)

	return (
		<div className="baseLayout-wrapper">
			<Header />
			<div className="main-content">
				{isSideBarVisible ? <Sidebar /> : null}
				{returnCalendarView(currentCalendarView)}	
				{isEventCreatorWindowVisible ? <EventCreatorDialog /> : null}
				{isEventModalVisible? <EventDetailsPopup /> : null}
				{isLoginWindowVisible? <LoginWindow /> : null}
			</div>
		</div>
	);
};

const returnCalendarView = (view: string) => {
	switch(view){
		case 'year':
			return <YearViewCalendar/>;
		case 'day':
			return true;
		case 'list':
			return <ListOfEventsView />;
		default: 
		return <Calendar size = 'large' />
	}
}
