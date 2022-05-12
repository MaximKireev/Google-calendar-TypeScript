import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { closeEventModalPopup } from "../../redux/actions/actionsUI";
import Draggable from "react-draggable";
import "./EventDetailsModalLayout.css";

export const EventDetailsModalLayout = (props: any) => {
	const { children, item } = props;
	const dispatch = useDispatch();

	return (
		<Draggable defaultPosition={{ x: 750, y: 250 }}>
			<div className="eventDetails-wrapper">
				<div className="controls">
					<Button shape="circle" icon={<EditOutlined />} size="middle" />
					<Button
						shape="circle"
						icon={<DeleteOutlined />}
						danger
						size="middle"
					/>
					<Button
						shape="circle"
						icon={<CloseOutlined />}
						size="middle"
						onClick={() => dispatch(closeEventModalPopup())}
					/>
				</div>

				{children}
			</div>
		</Draggable>
	);
};
