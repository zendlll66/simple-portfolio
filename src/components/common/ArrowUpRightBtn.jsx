// components/LabelButton.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ArrowUpRightBtn = ({ label , iconColor , backgroundColor   }) => {
    return (
        <div className='flex flex-row  max-w-full  rounded-full items-center'>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full" style={{ backgroundColor }}>
                <div className={`w-9 h-9 flex items-center justify-center rounded-full bg-${backgroundColor}`}>
                    <ArrowUpRight className={`rounded-full w-5 h-5 ${iconColor}`} />
                </div>
            </button>
            <h1 className={` text-start text-md  text-${backgroundColor} `}>{label}</h1>
        </div>
    );
};

export default ArrowUpRightBtn;