import React from 'react'
import { Button, Radio } from 'antd';

export const CalendarViewChanger = () => {
    return (
        <>
          <Radio.Group >
            <Radio.Button value="Year">Year</Radio.Button>
            <Radio.Button value="Month">Month</Radio.Button>
            <Radio.Button value="Day">Day</Radio.Button>
            <Radio.Button value="List" disabled>List</Radio.Button>
          </Radio.Group>
          </>
          )
}



