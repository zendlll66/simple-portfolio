import React from 'react'
import { useState } from 'react'
import ButtonShowcase from './showcase/ButtonShowcase'
import HeadingShowcase from './showcase/HeadingShowcase'
import PlusIconShowcase from './showcase/PlusIconShowcase'
import ArrowUpRighShowcase from './showcase/ArrowUpRighShowcase'

const CompoShowcase = () => {
    const [selected, setSelected] = useState("button")
    return (
        <div className='bg-gray-200 h-screen'>
            <h1 className='font-bold text-3xl'>CompoShowcase</h1>
            {selected === "button" &&(
                <div className='flex flex-col items-center gap-10'>
                    <ButtonShowcase/>
                    <HeadingShowcase/>
                    <PlusIconShowcase/>
                    <ArrowUpRighShowcase/>
                </div>
            )}
        </div>
    )
}

export default CompoShowcase