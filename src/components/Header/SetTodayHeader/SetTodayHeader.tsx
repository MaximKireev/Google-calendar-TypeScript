import {setToday} from '../../../redux/actions/actionsCalendar'
import { Button } from "antd";
import { useDispatch } from 'react-redux';
import React from 'react';


export const SetTodayHeader = () => {
    const dispatch = useDispatch()
    return <Button
            onClick={() => dispatch(setToday())}
            size="large"
            style={{margin: '0 30px'}}
            >Today</Button>
}