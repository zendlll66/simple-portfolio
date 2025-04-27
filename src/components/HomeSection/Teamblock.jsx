import React from 'react'
import CardTeam from '../common/CardTeam'

const Teamblock = () => {
    const TeamDetail = [
        {
            id: 1,
            name: "John Doe",
            title: "CEO & Founder",
            image: "/assets/images/Picture0.svg",
            descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nesciunt!"
        },
        {
            id: 2,
            name: "John Doe",
            title: "CEO & Founder",
            image: "/assets/images/Picture0.svg",
            descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nesciunt!"
        },
        {
            id: 3,
            name: "John Doe",
            title: "CEO & Founder",
            image: "/assets/images/Picture0.svg",
            descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nesciunt!"
        },
        {
            id: 4,
            name: "John Doe",
            title: "CEO & Founder",
            image: "/assets/images/Picture0.svg",
            descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nesciunt!"
        },
        {
            id: 5,
            name: "John Doe",
            title: "CEO & Founder",
            image: "/assets/images/Picture0.svg",
            descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nesciunt!"
        },
        {
            id: 6,
            name: "John Doe",
            title: "CEO & Founder",
            image: "/assets/images/Picture0.svg",
            descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nesciunt!"
        },

    ]
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full   '>
                {TeamDetail.map((item) => (
                    <div data-aos="fade-up" key={item.id} className='flex flex-col gap-2 items-center'>
                        <CardTeam image={item.image} name={item.name} position={item.title} description={item.descript} />
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Teamblock