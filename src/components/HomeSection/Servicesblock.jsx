import React from 'react'
import CardService from '../common/CardService'


const dataServices = [
    { label1: "Search Engine ", label2: "Optimization", images: "service0", bgColor: 'bg-[#F3F3F3]', variant: 'default', iconColor: '[#B9FF66]', textColor: '[#191A23]', bgIcon: "[#191A23]" },
    { label1: "Pay-Per-Click", label2: "Advertising", images: "service1", bgColor: 'bg-[#B9FF66]', variant: 'secondary', iconColor: '[#B9FF66]', textColor: '[#191A23]', bgIcon: "[#191A23]" },
    { label1: "Social Media", label2: "Marketing", images: "service2", bgColor: 'bg-[#191A23]', variant: 'secondary', iconColor: '[#191A23]', textColor: '[#E0E0E0]', bgIcon: "[#E0E0E0]" },
    { label1: "Content", label2: "Creation", images: "service3", bgColor: 'bg-[#F3F3F3]', variant: 'default', iconColor: '[#B9FF66]', textColor: '[#191A23]', bgIcon: "[#E0E0E0]" },
    { label1: "Email", label2: "Marketing", images: "service4", bgColor: 'bg-[#B9FF66]', variant: 'secondary', iconColor: '[#B9FF66]', textColor: '[#191A23]', bgIcon: "[#E0E0E0]" },
    { label1: "Online", label2: "Advertising", images: "service5", bgColor: 'bg-[#191A23]', variant: 'secondary', iconColor: '[#191A23]', textColor: '[#E0E0E0]', bgIcon: "[#E0E0E0]" },
]


const Servicesblock = () => {
    return (
        <div data-aos="fade-up" className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {dataServices.map((item, index) => (
                <CardService key={index} label1={item.label1} label2={item.label2} images={item.images} bgColor={item.bgColor} variant={item.variant} iconColor={item.iconColor} textColor={item.textColor} bgIcon={item.bgIcon} />
            ))}
        </div>
    );
}
export default Servicesblock