import React from 'react'
import { LoginOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { showLoginWindow } from '../../../redux/actions/actionsUI'


export const LoginIcon = () => {
    const dispatch = useDispatch();
    
    return <LoginOutlined
    style={{ fontSize: '25px', color: '#08c' }}
    onClick = {() => dispatch(showLoginWindow())}
    />
}