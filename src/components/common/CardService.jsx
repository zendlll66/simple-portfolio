import React from 'react'
import ArrowUpRightBtn from './ArrowUpRightBtn'
import HeadingCompo from './HeadingCompo'

const CardService = ({ label1, label2, images, bgColor, variant, iconColor, backgroundColor}) => {
    return (
        <div className={`flex flex-row  border-b-4 border-[1px]   w-full items-center justify-between rounded-3xl p-[30px] ${bgColor}`}>
            <div className=' space-y-10'>
                <div className='flex flex-col justify-between'>
                    <HeadingCompo label={label1} variant={variant} className={`w-fit `} />
                    <HeadingCompo label={label2} variant={variant} className={'w-fit'} />
                </div>
                <ArrowUpRightBtn label='learn more' iconColor={iconColor} backgroundColor={backgroundColor} />
            </div>
            <img src={`/assets/images/${images}.svg`} alt="" className='w-1/3' />
        </div>
    )
}

export default CardService