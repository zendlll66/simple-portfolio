import React from 'react'
import Navbar from './navbar'
import HeadingCompo from '../common/HeadingCompo'
import CustomButton from '../common/CustomButton'

const Footerblock = () => {
    return (
        <div className='bg-[#191A23] text-white  px-10 pt-10 pb-5 md:px-20 md:pt-20 md:pb-10 space-y-10 rounded-t-2xl'>
            {/* Navbar Footer */}
            <nav data-aos="fade-up" className='flex flex-col md:flex-row md:justify-between justify-center items-center gap-5'>
                <img src="/assets/images/logoWhite.svg" alt="Logo" />
                <ul className='flex items-center text-center flex-col md:flex-row justify-center gap-3 md:gap-10'>
                    <li><a href="">About us</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Use Cases</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </nav>

            {/* Main content */}
            <div data-aos="fade-up" className='flex flex-col md:flex-row md:justify-between '>
                {/* Left content */}
                <div className='space-y-3 flex flex-col text-center md:text-left md:justify-start justify-center md:items-start items-center'>
                    <HeadingCompo label={'Contact Us'} variant={'default'} className="w-fit" />
                    <p>Email: 0n2Mk@example.com</p>
                    <p>Phone: +91 1234567890</p>
                    <p>Address: 123 Main Street, City, State, Country</p>
                </div>

                {/* Right content */}
                <div data-aos="fade-up" className='bg-[#292A32] md:px-5 p-5 mt-5 md:mt-0  rounded-2xl flex justify-center  gap-3 items-center'>
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        <input
                            type="text"
                            placeholder='Name'
                            className='flex-1 border-2 w-full  border-white/80 rounded-xl text-sm p-3 bg-transparent placeholder-white'
                        />
                        <CustomButton
                            label={"Subscribe to news"}
                            variant={'default'}
                            className="whitespace-nowrap w-full md:w-fit"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div data-aos="fade-up" className="h-0.5 w-full bg-gray-600"></div>
            <p className='text-sm text-gray-400'>© 2025 Your Company. All rights reserved.</p>
        </div>
    )
}

export default Footerblock
