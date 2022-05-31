import React from "react";
import { Collapse, Badge } from "antd";
import { useSelector } from "react-redux";
import { setListOfEventsInStorage } from "../../redux/selectors";
import { CalendarEventData } from "../../ts-generalTypes/InitialStateInterfaces";

const { Panel } = Collapse;

interface AccProps {
	[key: string]: CalendarEventData[];
}

export const ListOfEventsView = () => {
	const listOfEvents = useSelector(setListOfEventsInStorage).reduce(
		(acc: AccProps, curVal: CalendarEventData) => {
			let val: string = curVal.date!.slice(2);
			if (acc.hasOwnProperty(val)) {
				acc[val].push(curVal);
			} else acc[val] = [curVal];

			return acc;
		},
		{}
	);
	const keys = Object.keys(listOfEvents);

	return (
		<Collapse style={{ width: "100%" }} defaultActiveKey={["1"]}>
            {keys.map(item => 
                <Panel header={item} key="1">
                    <div style={{display: 'flex', flexDirection: 'column'}} className="wrapper">
				{listOfEvents[item].map(val => <Badge status="success" text= {val.description} />)}
			        </div>
                </Panel>
                
                )}


		</Collapse>
	);
};
