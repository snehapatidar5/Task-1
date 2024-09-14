import background from '../assets/background.png'
import testimonial from '../assets/testimonial.png'
function Hero() {
  return (
    <div className='lg:max-2xl:h-screen  lg:max-2xl:bg-cover lg:max-2xl:flex  lg:max-2xl:justify-center  sm:overflow-x-hidden sm:[100%] ' style={{backgroundImage: `url(${background})`}}>
     <div className=' lg:max-2xl:text-left sm:text-center sm:mt-2 '>
        <div className='lg:max-2xl:w-[545px] lg:max-2xl:h-[200px] sm:w-[370px] sm:h-[187px] '>
            <p className='text-white font-semibold lg:max-2xl:text-[50px] sm:text-[33px] lg:max-2xl:mt-[140px]'>Secure Your Retirement with Financial Peace of Mind</p>
        </div>
        <div className='lg:max-2xl:w-[540px] lg:max-2xl:h-[128px] lg:max-2xl:pt-12 lg:max-2xl:ml-0 sm:w-[343px] sm:h-[110px] sm:mt-[-25px] sm:ml-3 '>
            <p className='text-white text-lg  sm:text-[18px]'>Kai-Zen® offers you up to an additional 3 times more money to fund a unique cash accumulating life insurance policy using leverage.</p>
        </div>
        <div className='  ' >
            <button className='text-white bg-[#2B53D6] rounded-full p-2 sm:mt-4'>Learn More On  Kai-Zen®</button>
        </div>
     </div>
     <div>
        <div className='sm:my-2 sm:p-2 lg:max-2xl:mt-[160px]'>
            <img src={testimonial} className='lg:max-2xl:w-[510px] lg:max-2xl:h-[300px] sm:w-[390px] sm:h-[236px]'/>
        </div>
     </div>
    </div>
  )
}

export default Hero