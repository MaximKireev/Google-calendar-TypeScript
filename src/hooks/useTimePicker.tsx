
import React from "react";
import { TimePicker } from "antd";

export const useTimePicker = () => {
	const [timeFrom, setTimeFrom] = React.useState("");
	const [timeTo, setTimeTo] = React.useState("");

	const timeFromHandler = (item: any) => {
		let date = new Date(item._d);
		setTimeFrom(`${date.getHours()}:${date.getMinutes()}`);
	};
	const timeToHandler = (item: any) => {
		let date = new Date(item._d);
		setTimeTo(`${date.getHours()}:${date.getMinutes()}`);
	};

    const timePickerElement = <div
    style={{ display: "flex", justifyContent: "space-between" }}
    className="selectTime-wrapper"
>
    <TimePicker
        format="HH:mm"
        onSelect={(item) => timeFromHandler(item)}
        minuteStep={15}
    />
    <TimePicker
        format="HH:mm"
        onSelect={(item) => timeToHandler(item)}
        minuteStep={15}
    />
</div>
	return [{timeFrom, timeTo}, timePickerElement];
};