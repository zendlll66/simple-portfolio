import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footerblock from '../components/layout/Footerblock'
const LayoutHomePage = () => {
    return (

        <div className=''>
            <nav className=''>
                <Navbar />
            </nav>
            <main className='md:pt-20 md:px-[80px] px-[20px] pt-[20px] '>
                <Outlet />
            </main>
            <footer className='mt-20'>
                <Footerblock />
            </footer>
        </div>
    )
}

export default LayoutHomePage