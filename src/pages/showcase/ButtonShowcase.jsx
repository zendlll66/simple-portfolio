import React from 'react'
import CustomButton from '../../components/common/CustomButton'


const ButtonShowcase = () => {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <h1 className='font-bold text-2xl'>Button</h1>
            <div className='flex  flex-row gap-2'>
                <CustomButton
                    label="primary"
                    onClick={() => { }}
                    variant='primary'
                    className='w-fit'
                />
                <CustomButton
                    label="secondary"
                    onClick={() => { }}
                    variant='secondary'
                    className='w-fit'
                />
                <CustomButton
                    label="default"
                    onClick={() => { }}
                    variant='default'
                    className='w-fit'
                />
            </div>
        </div>
    )
}

export default ButtonShowcase