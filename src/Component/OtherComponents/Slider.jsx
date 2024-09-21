import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import video from '../../assets/video.mp4';

export default function App() {
    return (
        <>
            <div className='lg:max-2xl:space-y-1 lg:max-2xl:mt-[150px] lg:max-2xl:w-[550px] lg:max-2xl:ml-[380px] text-center sm:mt-20'>
                <h2 className='text-[#12171B] font-semibold lg:max-2xl:text-[35px] sm:text-[30px]'>
                    What People are Saying about Us?
                </h2>
                <p className='lg:max-2xl:space-y-2 text-[#3A3939] text-[18px] lg:max-2xl:pt-2'>
                    Hear from real customers how Kai-Zen has helped secure their financial future.
                </p>
            </div>

            <Swiper
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    375: { // Small screen (like your 375px width)
                        slidesPerView: 1, // Show 1 slide per view on small screens
                        spaceBetween: 10,
                    },
                    600:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024:{
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
            >
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls autoPlay />
                    <p className='text-[#2B53D6] text-[14px]   sm:mt-2'>Life Strategies</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px] '>Harry Pells</h3>
                    <p className='text-[#3A3939] text-[14px] '>Attorney</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls />
                    <p className='text-[#2B53D6] text-[14px]   sm:mt-2'>MultiGen</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]  '>Carey Finn</h3>
                    <p className='text-[#3A3939] text-[14px]  '>Kai-Zen Testimonial</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls autoPlay />
                    <p className='text-[#2B53D6] text-[14px]   sm:mt-2'>CashStream</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]  '>Todd Gruverman</h3>
                    <p className='text-[#3A3939] text-[14px]  '>President, Pohs Institute</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls />
                    <p className='text-[#2B53D6] text-[14px]   sm:mt-2'>Kaizan®</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]  '>Sanjay Ibrahim</h3>
                    <p className='text-[#3A3939] text-[14px]  '>Managing Partner, Attorney</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls autoPlay />
                    <p className='text-[#2B53D6] text-[14px]   sm:mt-2'>Life Strategies</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]  '>Harry Pells</h3>
                    <p className='text-[#3A3939] text-[14px]  '>Attorney</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls />
                    <p className='text-[#2B53D6] text-[14px]   sm:mt-2'>MultiGen</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]  '>Carey Finn</h3>
                    <p className='text-[#3A3939] text-[14px]  '>Kai-Zen Testimonial</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls autoPlay />
                    <p className='text-[#2B53D6] text-[14px]   sm:mt-2'>CashStream</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]  '>Todd Gruverman</h3>
                    <p className='text-[#3A3939] text-[14px]  '>President, Pohs Institute</p>
                </SwiperSlide>
                <SwiperSlide>
                    <video src={video} className='w-full h-auto rounded-xl' controls />
                    <p className='text-[#2B53D6] text-[14px]   sm:mt-2'>Kaizan®</p>
                    <h3 className='text-[#12171B] font-semibold text-[20px]  '>Sanjay Ibrahim</h3>
                    <p className='text-[#3A3939] text-[14px]  '>Managing Partner, Attorney</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
