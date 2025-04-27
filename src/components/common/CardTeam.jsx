import React from 'react'

const CardTeam = ({ image, name, position, description }) => {
    return (
        <div className='flex flex-col w-full gap-5 p-[30px] rounded-2xl border-[1px] border-b-4'>
            <div className='relative flex flex-row gap-5 items-end'>
                <img src={image} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>{position}</p>
                </div>
                <img src="/assets/images/Social-icon.svg" alt="" className='absolute right-0 top-0' />
            </div>
            <p>{description}</p>
        </div>
    )
}

export default CardTeam