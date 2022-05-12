import React from 'react';
import { useDispatch } from 'react-redux';
import {setToday} from '../../../redux/actions/actionsCalendar'
import { Button } from "antd";


export const SetTodayHeader = () => {
    const dispatch = useDispatch()
    return <Button
            onClick={() => dispatch(setToday())}
            size="large"
            style={{margin: '0 30px'}}
            >Today</Button>
}