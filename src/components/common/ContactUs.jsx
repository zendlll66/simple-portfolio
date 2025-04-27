import React from 'react';
import CustomButton from './CustomButton';

const ContactUs = () => {
  return (
    <div className='bg-[#F3F3F3] p-10 md:p-20 rounded-2xl relative flex overflow-hidden'>
      {/* ส่วนของฟอร์ม */}
      <div className='flex flex-col md:w-1/2 w-full md:pr-20 space-y-8'>
        {/* Radio Options */}
        <div className='flex flex-row gap-5'>
          <div data-aos="fade-up" className='space-x-2 text-center flex items-center'>
            <input
              type="radio"
              name="contact-option"
              id="say-hi"
              className="peer appearance-none h-5 w-5 border-2 border-black rounded-full checked:bg-[#B9FF66] focus:ring-0"
            />
            <label htmlFor="say-hi" className="cursor-pointer">Say Hi</label>
          </div>

          <div data-aos="fade-up" className='space-x-2 text-center flex items-center'>
            <input
              type="radio"
              name="contact-option"
              id="get-quote"
              className="peer appearance-none h-5 w-5 border-2 border-black rounded-full checked:bg-[#B9FF66] focus:ring-0"
            />
            <label htmlFor="get-quote" className="cursor-pointer">Get a Quote</label>
          </div>
        </div>

        {/* Form Inputs */}
        <div className='flex flex-col space-y-5'>
          <div>
            <span data-aos="fade-up" className='text-md'>Name</span>
            <input data-aos="fade-up" type="text" placeholder='Name' className='w-full border-2 border-black/80 rounded-xl text-lg p-3' />
          </div>
          <div>
            <span data-aos="fade-up" className='text-md'>Email</span>
            <input data-aos="fade-up" type="text" placeholder='Email' className='w-full border-2 border-black/80 rounded-xl text-lg p-3' />
          </div>
          <div>
            <span data-aos="fade-up" className='text-md'>Message</span>
            <textarea data-aos="fade-up" placeholder='Message' className='w-full border-2 border-black/80 rounded-xl text-lg p-3' />
          </div>
          <CustomButton label={"Send Message"} className='w-full' />
        </div>
      </div>

      {/* รูปภาพที่อยู่ทางขวา */}
      <div data-aos="fade-up" className='hidden absolute right-[-20%] top-0 bottom-0  md:flex items-center'>
        <img src="/assets/images/contactUs.svg" alt="" className='max-w-md' />
      </div>
    </div>
  );
}

export default ContactUs;
