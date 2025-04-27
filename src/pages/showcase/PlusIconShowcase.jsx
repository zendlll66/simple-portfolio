import React from 'react'
import PlusIconCustom from '../../components/common/PlusIconCustom'

const PlusIconShowcase = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className='font-bold text-2xl'>Heading</h1>
                <div className='flex  flex-row gap-2'>
                    <PlusIconCustom variant='primary'/>
                    <PlusIconCustom variant='secondary'/>
                </div>
            </div>
        </div>
    )
}

export default PlusIconShowcase