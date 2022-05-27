import React from 'react'
import { Button, Radio } from 'antd';

export const CalendarViewChanger = () => {
    return (
        <>
          <Radio.Group >
            <Radio.Button value="large">Year</Radio.Button>
            <Radio.Button value="default">Month</Radio.Button>
            <Radio.Button value="small">Day</Radio.Button>
            <Radio.Button value="small">List</Radio.Button>
          </Radio.Group>
          </>
          )
}



