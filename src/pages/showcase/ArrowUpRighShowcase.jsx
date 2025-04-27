import React from 'react'
import ArrowUpRightBtn from '../../components/common/ArrowUpRightBtn'

const ArrowUpRighShowcase = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className='font-bold text-2xl'>Heading</h1>
                <div className='flex  flex-row gap-2'>
                    <div className="p-6">
                        <ArrowUpRightBtn

                            label="Go Now"
                            iconColor="text-lime-400"
                            backgroundColor="#1a1a1a"
                        />
                    </div>
                    <div className="p-6">
                        <ArrowUpRightBtn
                            label="Go Now"
                            iconColor="text-lime-400"
                            backgroundColor="#1a1a1a"
                        />
                    </div>
                    <div className="p-6">
                        <ArrowUpRightBtn
                            label="Go Now"
                            iconColor="text-lime-400"
                            backgroundColor="#1a1a1a"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArrowUpRighShowcase