import React from "react";
import { Collapse, Badge } from "antd";
import { useSelector } from "react-redux";
import {setListOfEventsInStorage} from "../../redux/calendar-events/calendar-events-selectors";
import {EventDataItem} from "../../redux/calendar-events/calendar-events-reducer";

const { Panel } = Collapse;

interface AccProps {
	[key: string]: EventDataItem[];
}

export const ListOfEventsView = () => {
	const listOfEvents = useSelector(setListOfEventsInStorage).reduce(
		(acc: AccProps, curVal: EventDataItem) => {
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
		<Collapse style={{ width: "100%", backgroundColor: 'inherit'}} defaultActiveKey={["1"]}>
            {keys.map(item => 
                <Panel header={item} key="1">
                    <div style={{display: 'flex', flexDirection: 'column', color: 'inherit', backgroundColor: 'inherit' }} className="wrapper">
				{listOfEvents[item].map(val => <Badge status="success" style = {{color: 'inherit', backgroundColor: 'transparent'}} text= {val.description} />)}
			        </div>
                </Panel>
                
                )}


		</Collapse>
	);
};
