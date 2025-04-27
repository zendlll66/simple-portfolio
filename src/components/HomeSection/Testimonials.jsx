import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
const Carousel = () => {
    return (
        <div data-aos="fade-up" className="relative w-full bg-[#191A23] p-10 rounded-2xl">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next'
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet custom-bullet ',
                    bulletActiveClass: 'custom-bullet-active'
                }}
                slidesPerView={1.2}
                loop={true}
                centeredSlides={true}
                
                className=''
            >
                {/* สไลด์ตัวอย่าง */}
                <SwiperSlide >
                    <div className="text-center text-white   flex justify-center">
                        <img src="/assets/images/CardComment.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="text-center flex justify-center  text-white ">
                        <img src="/assets/images/CardComment.svg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="text-center text-white   flex justify-center">
                        <img src="/assets/images/CardComment.svg" alt="" />
                    </div>
                </SwiperSlide>

                {/* ลูกศร */}
                <div className='relative mt-20'>
                    <div className=" custom-prev text-white absolute left-1/3 bottom-0 z-20 -translate-y-1/2 cursor-pointer px-4  ">
                        ←
                    </div>
                    <div className="custom-next absolute right-1/3 bottom-0 z-20 -translate-y-1/2 cursor-pointer px-4 text-white ">
                        →
                    </div>
                </div>
            </Swiper>


        </div>
    );
};

export default Carousel;
