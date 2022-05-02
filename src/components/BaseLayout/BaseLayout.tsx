import Header from '../Header/Header'
import './BaseLayout.css'
import React from 'react'
import {Sidebar} from '../SideBar/SideBar'
import { useSelector } from 'react-redux'
import {selectIsSideBarVisible} from '../../redux/selectors'


export const BaseLayout: React.FC = () => {
    const isSideBarVisible = useSelector(selectIsSideBarVisible) 
   

    return (
        <div className="baseLayout-wrapper">
        <Header />
        <div className="main-content">
       {isSideBarVisible? <Sidebar /> : null} 
        </div>
        </div>
    )
}