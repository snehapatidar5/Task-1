import background from '../../assets/background.png'
import testimonial from '../../assets/testimonial.png'
function Hero() {
  return (
    <div className='lg:max-2xl:h-screen lg:max-2xl:gap-0 lg:max-2xl:flex  lg:max-2xl:justify-center lg:max-2xl:items-center sm:overflow-x-hidden sm:bg-cover sm:bg-center sm:bg-no-repeat ' style={{backgroundImage: `url(${background})`}}>
     <div className=' lg:max-2xl:text-left sm:text-center sm:py-4 sm:px-6 sm:space-y-4  lg:max-2xl:mt-14 '>
        <div className='lg:max-2xl:w-[545px] lg:max-2xl:h-[180px]   '>
            <p className='text-white font-semibold lg:max-2xl:text-[50px] sm:text-[30px] '>Secure Your Retirement with Financial Peace of Mind</p>
        </div>
        <div className='lg:max-2xl:w-[540px] lg:max-2xl:h-[128px] lg:max-2xl:pt-12 lg:max-2xl:ml-0    '>
            <p className='text-white text-lg  sm:text-lg'>Kai-Zen® offers you up to an additional 3 times more money to fund a unique cash accumulating life insurance policy using leverage.</p>
        </div>
        <div className='  ' >
            <button className='text-white bg-[#2B53D6] rounded-full p-2 px-4 sm:my-6'>Learn More On  Kai-Zen®</button>
        </div>
     </div>
     <div className='sm:mt-[-20px]'>
        <div className=' sm:px-4 sm:py-2 cursor-pointer'>
            <img src={testimonial} className='lg:max-2xl:w-[510px] lg:max-2xl:h-[310px] sm:w-[380px] sm:h-[236px]'/>
        </div>
     </div>
    </div>
  )
}

export default Hero
