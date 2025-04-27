import React from 'react'

const PlusIconCustom = ({ variant = 'primary', className = '' }) => {
    const defaultStyle = 'w-[58px] h-[58px] text-white bg-white border border-[#191A23]'
    const variants = {
        primary: 'rounded-full',
        secondary: 'rounded-full', // ถ้าจะต่างจาก primary ให้เปลี่ยนได้
    }

    return (
        <div className={`${defaultStyle} ${variants[variant]} ${className} flex justify-center items-center`}>
            <div className="relative w-6 h-6 flex justify-center items-center">
                {/* เส้นแนวนอน */}
                <div className="absolute w-6 h-[6px] bg-[#191A23]" />
                {/* เส้นแนวตั้ง (เฉพาะ primary) */}
                {variant === 'primary' && (
                    <div className="absolute h-6 w-[6px] bg-[#191A23]" />
                )}
            </div>
        </div>
    )
}

export default PlusIconCustom
