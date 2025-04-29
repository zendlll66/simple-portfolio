// components/CustomButton.jsx
'use client'
import React from 'react'

const CustomButton = ({ label, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = 'px-4 py-2 rounded-[8px] font-regular transition'
  const variants = {
    primary: 'bg-[#191A23] text-white cursor-pointer',
    secondary: 'bg-transparent border-1 border-[#191A23] text-black cursor-pointer ',
    default: 'bg-[#B9FF66] text-black ',
  }

  return (
    <button
      data-aos="fade-up"
      className={`${baseStyle} ${variants[variant]}  ${className} hover:scale-125 transition-all duration-500`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default CustomButton
