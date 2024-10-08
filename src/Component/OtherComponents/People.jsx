import video from '../../assets/video.mp4'



function People() {

  return (
    <div>
        <div className=' lg:max-3xl:mt-14  lg:max-3xl:w-[550px] lg:max-3xl:ml-[380px] text-center xs:mt-14'>
            <h2 className='text-[#12171B] font-semibold lg:max-3xl:text-[35px] xs:text-[30px]'>What People are Saying about Us?</h2>
            <p className='text-[#3A3939]  text-[18px] lg:max-3xl:pt-2'>Hear from real customers how Kai-Zen has helped secure their financial future.</p>
        </div>
        
        <div className='lg:max-3xl:flex lg:max-3xl:justify-evenly lg:max-3xl:items-center lg:max-3xl:mt-[100px] lg:max-3xl:mb-[150px]'>
            <div className="xs:p-2 ">
            <video src={video} width='800px'  height='100px' className='rounded-2xl'     controls   autoPlay/> 
                <p className='text-[#2B53D6] text-[14px]'>Life Strategies</p>
                <h3 className='text-[#12171B] font-semibold text-[20px]'>Harry Pells </h3>
                <p className='text-[#3A3939] text-[14px]'> Attorney</p>
            </div>
            <div className="xs:p-2 ">
            <video src={video} width='800px'  height='100px' className='rounded-2xl'     controls /> 
              <p className='text-[#2B53D6] text-[14px]'>MultiGen</p>
                <h3 className='text-[#12171B] font-semibold text-[20px]'>Carey Finn</h3>
                <p className='text-[#3A3939] text-[14px]'>Kai-Zen Testimonial</p>
            </div>
            <div className="xs:p-2 ">
            <video src={video} width='800px'  height='100px' className='rounded-2xl'  controls   autoPlay/> 
              <p className='text-[#2B53D6] text-[14px]'>CashStream</p>
                <h3 className='text-[#12171B] font-semibold text-[20px]'>Todd Gruverman</h3>
                <p className='text-[#3A3939] text-[14px]'>President, Pohs Institute</p>
            </div>
            <div className="xs:p-2 ">
            <video src={video} width='800px'  height='100px' className='rounded-2xl'    controls   autoPlay/> 
                   <p className='text-[#2B53D6] text-[14px]'>Kaizan®</p>
                <h3 className='text-[#12171B] font-semibold text-[20px]'>Sanjay Ibrahim</h3>
                <p className='text-[#3A3939] text-[14px]'>Managing Partner, Attorney</p>
            </div>
        </div>
        
    </div>
  )
}

export default People




