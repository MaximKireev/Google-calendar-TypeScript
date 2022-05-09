import React from "react";
import './CurrentDateHeader.css'
import { useSelector } from "react-redux";
import { selectCurrentCalendar } from "../../../redux/selectors";

export const CurrentDateHeader = () => {
	const currentCalendar = useSelector(selectCurrentCalendar)!;
	const searchValue: string = currentCalendar[1][1].id;
	const parcedSearchValue: string[] = searchValue.split(".");
	let date: Date = new Date(
		+parcedSearchValue[2],
		+parcedSearchValue[1] - 1,
		+parcedSearchValue[0]
	);
	return (
		<div className="currentDate-wrapper">
			{`${date.toLocaleString("en", { month: "long" })} ${date.getFullYear()}`}
		</div>
	);
};
