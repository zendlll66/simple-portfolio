import React, { useState } from 'react'
import PlusIconCustom from '../common/PlusIconCustom'

const Processblock = () => {
    const [activeId, setActiveId] = useState(null);

    const dataProcess = [
        { id: 1, title: 'Consultation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
        { id: 2, title: 'Research and Strategy Development', description: 'We research your industry...' },
        { id: 3, title: 'Implementation', description: 'Our team will execute the marketing plan...' },
        { id: 4, title: 'Monitoring and Optimization', description: 'We continuously monitor performance...' },
        { id: 5, title: 'Reporting and Communication', description: 'Regular reports and meetings keep you informed...' },
        { id: 6, title: 'Continual Improvement', description: 'We refine strategies based on insights...' },
    ]

    const toggleActive = (id) => {
        setActiveId(activeId === id ? null : id);
    }

    return (
        <div data-aos="fade-up" className='flex flex-col gap-5'>
            {dataProcess.map((item) => (
                <div
                    key={item.id}
                    className={`flex flex-col  gap-2 border-[1px] ${activeId === item.id ? 'bg-[#B9FF66]' : 'bg-white'} border-b-4 border-primary rounded-3xl p-[30px]`}
                >
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='font-bold text-2xl space-x-10'>
                            0{item.id} <span className='text-primary'>|</span> {item.title}
                        </h1>
                        <button onClick={() => toggleActive(item.id)} className='hover:scale-120 transition-all duration-300'>
                            <PlusIconCustom variant={activeId === item.id ? 'secondary' : 'primary'} />
                        </button>
                    </div>

                    {/* ส่วน description ที่ทำให้ smooth */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === item.id ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                            }`}
                    >
                        <p className='text-base md:text-lg text-gray-600 mt-2'>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Processblock
