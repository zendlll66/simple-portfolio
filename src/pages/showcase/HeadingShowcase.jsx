import React from 'react'
import HeadingCompo from '../../components/common/HeadingCompo'

const HeadingShowcase = () => {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <h1 className='font-bold text-2xl'>Heading</h1>
            <div className='flex  flex-row gap-2'>
                <HeadingCompo label="primary" variant='primary' className='w-fit' />
                <HeadingCompo label="secondary" variant='secondary' className='w-fit' />
                <HeadingCompo label="default" variant='default' className='w-fit' />
            </div>
        </div>
    )
}

export default HeadingShowcase