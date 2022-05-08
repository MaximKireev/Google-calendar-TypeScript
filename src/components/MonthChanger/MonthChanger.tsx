import { Button } from "antd";
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import React from 'react'
import { useDispatch } from "react-redux";
import {monthReverse, monthForward} from '../../redux/actions/actionsCalendar'

export const MonthChanger = () => {

    const dispatch = useDispatch()
    
	return (
		<div className="monthChange-wrapper">
			<Button 
            type="default" 
            shape="circle"
            onClick={() => dispatch(monthReverse(-1))}>
            <LeftOutlined />
			</Button>
			<Button 
            type="default" 
            shape="circle"
            onClick={() => dispatch(monthForward(1))}>
            <RightOutlined />
			</Button>
		</div>
	);
};
