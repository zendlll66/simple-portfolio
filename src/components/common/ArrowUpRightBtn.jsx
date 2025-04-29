// components/LabelButton.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ArrowUpRightBtn = ({ label , iconColor , textColor, bgIcon }) => {
    return (
        <div className='flex flex-row  max-w-full  rounded-full items-center'>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full" >
                <div className={`w-9 h-9 flex items-center justify-center rounded-full bg-${textColor}`}>
                    <ArrowUpRight className={`rounded-full w-5 h-5 text-${iconColor}`} />
                </div>
            </button>
            <h1 className={` text-start text-md  text-${bgIcon} font-bold `}>{label}</h1>
        </div>
    );
};

export default ArrowUpRightBtn;