// pages/Portfolio.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomButton from '../components/common/CustomButton'

const Portfolio = () => {
    return (
        <div>
            <h2>My Portfolio</h2>
            <Outlet /> 
        </div>
    )
}

export default Portfolio
