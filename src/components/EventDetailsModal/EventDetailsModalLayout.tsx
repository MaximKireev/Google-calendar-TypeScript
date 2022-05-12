import React from "react";
import { Button } from "antd";
import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Draggable from "react-draggable";
import "./EventDetailsModalLayout.css";

export const EventDetailsModalLayout = (props: any) => {
	const { children, item } = props;

	return (
		<Draggable defaultPosition={{ x: -250, y: -250 }}>
			<div className="eventDetails-wrapper">
				<div className="controls">
					<Button shape="circle" icon={<EditOutlined />} size="middle" />
					<Button
						shape="circle"
						icon={<DeleteOutlined />}
						danger
						size="middle"
					/>
					<Button shape="circle" icon={<CloseOutlined />} size="middle" />
				</div>

				{children}
			</div>
		</Draggable>
	);
};
