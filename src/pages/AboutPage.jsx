import React from 'react'
import HeaderCompo from '../components/AboutSection/HeaderCompo'
import HeadingCompo from '../components/common/HeadingCompo';
const AboutPage = () => {
    return (
        <div className='space-y-20 mb-20'>
            <section>
                <div>
                    <HeaderCompo />
                </div>
            </section>


            <section >
                <div className="text-center md:text-left  flex flex-col  md:justify-start md:items-start items-center">
                    <HeadingCompo label={"Our impact in Number"} variant={'default'} className={'w-fit'} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae culpa nostrum sed voluptate iure, sint similique illum non, deleniti quidem provident. Qui non itaque esse quaerat quibusdam est debitis!</p>
                </div>

            </section>

        </div>

    )
}

export default AboutPage