import React from 'react'
import { Radio, RadioChangeEvent } from 'antd';
import { useDispatch } from 'react-redux';
import { changeCalendarView } from '../../../redux/actions/actionsUI'

export const CalendarViewChanger = () => {
  const dispatch = useDispatch()

  const changeViewHandler = (e:RadioChangeEvent) => {
    dispatch(changeCalendarView(e.target.id!))
  }
    return (
        <>
          <Radio.Group 
          onChange={changeViewHandler}
          defaultValue="Month"
          >
            <Radio.Button value="Year" id = 'year'>Year</Radio.Button>
            <Radio.Button value="Month" id = 'month'>Month</Radio.Button>
            <Radio.Button value="Day" disabled id = 'day'>Day</Radio.Button>
            <Radio.Button value="List" id = 'list'>List</Radio.Button>
          </Radio.Group>
          </>
          )
}



