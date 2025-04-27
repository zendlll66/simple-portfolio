import React from 'react'

const CompanyLogo = () => {
    return (
        <div data-aos="fade-up" className='grid md:grid-cols-6 md:gap-10 grid-cols-3 gap-10 justify-between items-center p-4 grayscale '>
            {/* Logo */}
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className=''>
                    <img src={`/assets/images/Company-logo-${index}.svg`} alt={`Company logo ${index}`} />
                </div>
            ))}

        </div>
    )
}

export default CompanyLogo