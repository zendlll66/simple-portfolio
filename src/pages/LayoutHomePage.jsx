import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footerblock from '../components/layout/Footerblock'
import NavbarCompo from '../components/layout/NavbarCompo'
import AOS from 'aos'

const LayoutHomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="flex flex-col min-h-screen "> {/* ✅ layout หลัก */}
            <nav className=''>
                <NavbarCompo />
            </nav>
            <main className="flex-1 md:pt-40 md:px-[80px] px-[20px] pt-20 ">
                <Outlet />
            </main>
            <footer>
                <Footerblock />
            </footer>
        </div>
    );
};

export default LayoutHomePage;
