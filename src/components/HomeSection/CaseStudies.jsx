import React from 'react'

const CaseStudies = () => {
  return (
    <div className='w-full h-fit overflow-x-auto'>
      <div className='flex flex-nowrap md:space-x-0 items-stretch lg:p-10  p-5 aria-hidden:bg-[#191A23] md:bg-[#191A23] text-white rounded-2xl gap-5'>
        
        <div className='flex flex-col space-y-5 bg-[#191A23] lg:p-5 md:p-0 p-10 min-w-[300px] md:min-w-0 rounded-2xl'>
          <p data-aos="fade-up" className="flex-1">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>
          <a href="" className='text-[#B9FF66]'>Learn more</a>
        </div>

        <div className='hidden md:block w-[2px] bg-white self-stretch' />

        <div className='flex flex-col space-y-5 bg-[#191A23] lg:p-5 md:p-0 p-10  min-w-[300px] md:min-w-0 rounded-2xl'>
          <p data-aos="fade-up" className="flex-1">
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <a href="" className='text-[#B9FF66]'>Learn more</a>
        </div>

        <div className='hidden md:block w-[2px] bg-white self-stretch' />

        <div className='flex flex-col space-y-5 bg-[#191A23] lg:p-5 md:p-0 p-10 min-w-[300px] md:min-w-0 rounded-2xl'>
          <p data-aos="fade-up" className="flex-1">
            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
          </p>
          <a href="" className='text-[#B9FF66]'>Learn more</a>
        </div>

      </div>
    </div>
  )
}

export default CaseStudies
