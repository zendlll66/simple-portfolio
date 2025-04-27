import React from 'react'

const HeadingCompo = ({ label, variant, className }) => {
    const defaultStyle = 'px-[7px] py-[3px] flex items-center text-center rounded-[8px] font-regular'
    const variants = {
        primary: 'text-white bg-[#191A23]',
        secondary: 'text-black bg-white',
        default: 'text-black bg-[#B9FF66] ',
    }
    return (
        <div data-aos="fade-up" >
            <h1 className={`${defaultStyle} ${variants[variant]} ${className}`}>{label}</h1>
        </div>
    )
}

export default HeadingCompo