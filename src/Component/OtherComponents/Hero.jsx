import background from '../../assets/background.png'
import testimonial from '../../assets/testimonial.png'
import video from '../../assets/video.mp4';

function Hero() {
  return (
    // <div className='lg:max-3xl:h-screen lg:max-3xl:gap-0 lg:max-3xl:flex  lg:max-3xl:justify-center lg:max-3xl:items-center xs:max-3xl:overflow-x-hidden xs:max-3xl:bg-cover xs:max-3xl:bg-center xs:max-3xl:bg-no-repeat ' style={{backgroundImage: `url(${background})`}}>
    //  <div className=' lg:max-3xl:text-left xs:text-center xs:py-2 xs:px-6 xs:space-y-4  lg:max-3xl:mt-12  lg:max-3xl:p-0  md:mt-6 '>
    //     <div className='lg:max-3xl:w-[533px] lg:max-3xl:h-[180px]   '>
    //         <p className='text-white font-semibold lg:max-3xl:text-[50px] xs:text-[30px] '>Secure Your Retirement with Financial Peace of Mind</p>
    //     </div>
    //     <div className='lg:max-3xl:w-[540px] lg:max-3xl:h-[128px] lg:max-3xl:pt-12 lg:max-3xl:ml-0    '>
    //         <p className='text-white text-lg  xs:text-lg'>Kai-Zen® offers you up to an additional 3 times more money to fund a unique cash accumulating life insurance policy using leverage.</p>
    //     </div>
    //     <div className='  ' >
    //         <button className='text-white bg-[#2B53D6] rounded-full p-2 px-4 xs:mt-2 xs:mb-6'>Learn More On  Kai-Zen®</button>
    //     </div>
    //  </div>
    //  <div className='xs:mt-[-20px] lg:max-3xl:p-0 flex justify-center xs:max-md:pb-6'>
    //     <div className=' xs:px-4 xs:py-2 cursor-pointer'>
    //         <img src={testimonial} className='max-w-full h-auto md:w-[750px] md:h-[400px] sm:w-[675px] sm:h-[360px] lg:w-[480px] lg:h-[310px] xs:w-[380px] xs:h-[236px]'/>
    //     </div>
    //  </div>
    // </div>

    <div className="hero-section min-h-[580px] flex justify-center items-center " style={{backgroundImage: `url(${background})`}}>
    <div className="px-4 xl:container text-white grid grid-cols-1 lg:grid-cols-2 mb-20  ">
    <div className="  md:mt-[90px] xs:mt-0 ">
    <h1 className="text-center lg:text-left font-outfit font-semibold lg:text-[50px] md:text-[40px] text-[35px]  py-5 lg:leading-[60px] leading-[44px]">Secure Your Retirement with Financial Peace of Mind
    </h1>
    <p className="text-center lg:text-left font-inter font-normal text-18 leading-7">Kai-Zen® offers you up to an additional 3 times more money to fund a unique cash accumulating life insurance policy using leverage.</p>
    <div className="lg:py-10 mt-5 lg:mt-0 flex gap-4 lg:justify-start justify-center">
     <button className='text-white bg-[#2B53D6] rounded-full p-2 px-4 xs:mt-2 xs:mb-6'>Learn More On  Kai-Zen®</button>
    </div>
    </div>
    <div className="flex items-center justify-center relative">
    <div className="max-h-[330px] sm:ml-0 p-6 lg:m-0">
    {/* <video src={video} className='w-full h-auto rounded-xl' controls autoPlay /> */}
     <img src={testimonial} className='w-full h-auto rounded-xl'/>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Hero
