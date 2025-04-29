import React, { useState } from 'react'
import CustomButton from '../common/CustomButton'

const NavbarCompo = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed flex flex-row md:p-10 p-5 bg-white/70 z-30 backdrop-blur-lg  md:px-[120px] px-[20px]  justify-between  w-full items-center ">
      <div className="flex-shrink-0">
        <a href="/">
          <img src="/assets/images/logoBlack.svg" alt="Logo" className="w-32" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-10 flex-shrink-0'>
        <ul className='flex flex-row gap-8 items-center text-[16px] leading-[24px] whitespace-nowrap'>
          <li><a href="/about">About us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/usecases">Use Cases</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <div className='flex-shrink-0'>
          <CustomButton label={"Request a quote"} variant='secondary' />
        </div>
      </div>


      {/* Mobile Toggle Button */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full bg-white border-t h-screen border-gray-200 md:hidden flex flex-col items-center space-y-4 py-4 z-50'>

          {/* ปุ่มปิด */}
          <div className='w-full flex justify-end px-4'>
            <button onClick={() => setIsOpen(false)} className='text-2xl font-bold'>
              ×
            </button>
          </div>

          <a href="/about" className="text-[16px] leading-[24px] font-medium">About us</a>
          <a href="/services" className="text-[16px] leading-[24px] font-medium">Services</a>
          <a href="/usecases" className="text-[16px] leading-[24px] font-medium">Use Cases</a>
          <a href="/pricing" className="text-[16px] leading-[24px] font-medium">Pricing</a>
          <a href="/blog" className="text-[16px] leading-[24px] font-medium">Blog</a>

          <div className='w-fit'>
            <CustomButton label={"Request a quote"} variant='secondary' />
          </div>
        </div>
      )}

    </div>
  )
}

export default NavbarCompo
