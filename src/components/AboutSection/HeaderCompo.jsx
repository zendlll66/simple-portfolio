import React from 'react'

const HeaderCompo = () => {
  return (
    <div className='flex flex-col md:flex-row md:gap-20 gap-10 justify-between items-center bg-gray-200 p-10 rounded-2xl'>
        {/* left content */}
        <div className='md:w-1/2 '>
            <img src="/assets/images/about/heading.svg" alt="" />
        </div>

        {/* Right content */}
        <div className='space-y-5 md:w-1/2 w-full text-center md:text-start '>
            <h1 className='md:text-4xl text-2xl font-bold'>Together for Success</h1>
            <p className='md:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci consectetur exercitationem reiciendis fugit beatae earum, doloremque </p>
        </div>
    </div>
  )
}

export default HeaderCompo