import React from 'react'
import BackgroundShader from '../components/common/BackGroundShader'

const PortDetail = () => {
    return (
        <div className="w-full h-screen">
            <BackgroundShader/>
            {/* เนื้อหาอื่น ๆ อยู่เหนือ background ได้ */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <h1 className="text-white text-4xl font-bold">Hello Shader World!</h1>
            </div>
        </div>
    )
}

export default PortDetail


