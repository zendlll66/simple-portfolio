import React from 'react'
import CustomButton from '../common/CustomButton'

const CtaBlock = () => {
    return (
        <div>
            <div className='bg-[#F3F3F3] w-full rounded-2xl flex justify-center items-center  '>
                <div className='flex flex-row gap-20 md:justify-center '>
                    <div className='md:w-1/2 p-[30px]  w-full text-start justify-center flex flex-col space-y-5 mdspace-y-10'>
                        <h1 data-aos="fade-up" className='text-3xl font-bold '>Let’s make things happen</h1>
                        <p data-aos="fade-up" className='md:text-2xl'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <CustomButton data-aos="fade-up" label="Book a consultation" variant='primary' className='md:w-fit' />
                    </div>
                    <div data-aos="fade-up" className='hidden md:flex'>
                        <img src="/assets/images/cta.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaBlock