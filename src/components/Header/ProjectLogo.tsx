import React from 'react'
import { CalendarOutlined } from "@ant-design/icons";

export const ProjectLogo = () => {
	return (
		<>
			<CalendarOutlined style={{ fontSize: "36px", color: "#08c" }} />
			<span className="logo-text1">Google</span>
			<span className="logo-text2"> Calendar</span>
		</>
	);
};
