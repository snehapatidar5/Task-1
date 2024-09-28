import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import video from '../../assets/video.mp4';

export default function Slider() {
    const swiperRef = useRef(null);

    return (
        <>
            <div className='p-1 w-[100%] text-center lg:mt-16 xs:mt-8 mx-auto'>
                <h2 className='text-[#12171B] font-semibold lg:max-3xl:text-[35px] xs:text-[30px]'>
                    What People are Saying about Us?
                </h2>
                <p className='text-[#3A3939] text-[18px] p-2'>
                    Hear from real customers how Kai-Zen has helped secure their financial future.
                </p>
            </div>

            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={5}
                navigation={false} 
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    }
                }}
            >
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls autoPlay />
                    <p className='text-[#2B53D6] text-[14px] xs:mt-2'>Life Strategies</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px] '>Harry Pells</h3>
                    <p className='text-[#3A3939] text-[14px] '>Attorney</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls />
                    <p className='text-[#2B53D6] text-[14px] xs:mt-2'>MultiGen</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]'>Carey Finn</h3>
                    <p className='text-[#3A3939] text-[14px]'>Kai-Zen Testimonial</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls autoPlay />
                    <p className='text-[#2B53D6] text-[14px] xs:mt-2'>CashStream</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]'>Todd Gruverman</h3>
                    <p className='text-[#3A3939] text-[14px]'>President, Pohs Institute</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls />
                    <p className='text-[#2B53D6] text-[14px] xs:mt-2'>Kaizan®</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]'>Sanjay Ibrahim</h3>
                    <p className='text-[#3A3939] text-[14px]'>Managing Partner, Attorney</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls autoPlay />
                    <p className='text-[#2B53D6] text-[14px] xs:mt-2'>Life Strategies</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]'>Harry Pells</h3>
                    <p className='text-[#3A3939] text-[14px]'>Attorney</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls />
                    <p className='text-[#2B53D6] text-[14px] xs:mt-2'>MultiGen</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]'>Carey Finn</h3>
                    <p className='text-[#3A3939] text-[14px]'>Kai-Zen Testimonial</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls autoPlay />
                    <p className='text-[#2B53D6] text-[14px] xs:mt-2'>CashStream</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]'>Todd Gruverman</h3>
                    <p className='text-[#3A3939] text-[14px]'>President, Pohs Institute</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls />
                    <p className='text-[#2B53D6] text-[14px] xs:mt-2'>Kaizan®</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]'>Sanjay Ibrahim</h3>
                    <p className='text-[#3A3939] text-[14px]'>Managing Partner, Attorney</p>
                </SwiperSlide>
            </Swiper>
            <div className="fij gap-4 mt-4">
                <button
                    className="custom-prev bg-[#D1D9F8] rounded-xl p-4 text-xl"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
                    </svg>
                </button>
                <button
                    className="custom-next bg-[#D1D9F8] rounded-xl p-4 text-xl"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                    </svg>
                </button>
            </div>
        </>
    );
}
