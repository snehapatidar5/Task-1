import video from '../assets/video.png'
function Video() {
  return (
    <div className='lg:max-2xl:flex lg:max-2xl:justify-evenly sm:text-center sm:my-10 '>
    <div className='lg:max-2xl:w-[513px] lg:max-2xl:p-4 lg:max-2xl:py-4 lg:max-2xl:my-[90px] sm:h-[280px] p-2'>
        <h2 className='text-[#12171B]  lg:max-2xl:text-[40px] sm:text-[24px] font-bold '>Why Choose Kai-Zen®?</h2>
        <p className='text-[#3A3939] text-[16px] sm:py-2'>We have all used leverage to purchase a nicer house or to buy a better car. Kai-Zen® uses leverage for the potential to accumulate more growth & obtain more protection, while providing the ability to maintain your current standard of living. That’s the smart way to use leverage.</p> 
        <button className='text-white   bg-[#2B53D6] rounded-full p-2 my-4 '>Learn  With FREE Course</button>
 
          </div>
    <div className='lg:max-2xl:my-[90px] sm:my-4 sm:p-2'>
        <img src={video} className='lg:max-2xl:w-[650px] lg:max-2xl:h-[450px] sm:w-[390px] sm:h-[280px]'/>
    </div>
    </div>
  )
}

export default Video