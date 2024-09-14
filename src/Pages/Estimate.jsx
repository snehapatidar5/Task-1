import EstimateImage from '../assets/estimateImage.png'
import iVector from '../assets/iVector.png'
function Estimate() {
  return (
    <div className=' lg:max-2xl:mt-12 lg:max-2xl:flex lg:max-2xl:justify-evenly   lg:max-2xl:w-[100%] lg:max-2xl:h-[670px]  '>
      <div className='lg:max-2xl:w-[400px]  lg:max-2xl:ml-6 sm:p-3 sm:mt-2'>
        <div>
          <h3 className='text-[25px] font-semibold'>Estimate your Returns</h3>
          <p className='text-[18px] text-[#3A3939]'>See if you qualify, discover your potential returns and see if Kai-Zen® is right for you.</p>


          <p className='text-[18px] text-[#3A3939] font-semibold mt-2 '>Age</p>
          <input type="range" className=" w-full h-1 mb-6  rounded-lg bg-[#FFFFFF]" />

          <p className='text-[18px] text-[#3A3939] font-semibold'>Annual Contribution Amount</p>
          <input type="range" className=" w-full h-1 mb-6  rounded-lg" />
        </div>
        <div>
          <h3 className='lg:max-2xl:text-[25px] sm:text-[20px] font-semibold'>Your Results</h3>
          <div className='flex  lg:max-2xl:gap-4 sm:gap-2 '>
            <div className='bg-[#F3F9FF] border border-[#E8E8E8] rounded-lg p-2 text-center'>
              <p className='text-[16px] text-[#000000] font-semibold sm:text-[13.5px]'>Starting at Age 55</p>
              <p className='text-[#289BFF] text-[30px] font-semibold sm:text-[26px]'>$935,926</p>
              <div className='flex gap-2'>
                <p className='text-[16px] text-[#000000] font-semibold sm:text-[13.5px]'>Initial death benefit</p>
                <img src={iVector} className='w-4 h-4 mt-1' />
              </div>
            </div>
            <div className="bg-[#F2FFFB] border border-[#E8E8E8] rounded-lg p-2 text-center ">
              <p className='text-[16px] text-[#000000] font-semibold sm:text-[13.5px]'>Age 65-80</p>
              <p className='text-[#42E5AB] text-[30px] font-semibold sm:text-[26px]'>$53,053/yr</p>
              <div className='flex gap-2'>
                <p className='text-[16px] text-[#000000] font-semibold sm:text-[13.5px]'>Tax-free distributions</p>
                <img src={iVector} className='w-4 h-4 mt-1' />
              </div>
            </div>
          </div>
          <div className='bg-[#FFFFFF] border border-[#E8E8E8] rounded-lg flex lg:max-2xl:p-7 sm:p-4 gap-2 text-center mt-2'>
            <div>
            <p className='text-[#289BFF] text-[30px] font-semibold sm:text-[26px]'>$935,926</p>
            <p className='text-[16px] text-[#000000] font-semibold sm:text-[13.5px]'>Remaining Death benefit </p>
             <p className='sm:text-[12px] text-[#474242] lg:max-2xl:text-[14px] '>Remaining Amount</p>

            </div>
            <div>
            <p className='text-[#42E5AB] text-[30px] font-semibold sm:text-[26px]'>$53,053/yr</p>
            <p className='text-[16px] text-[#000000] font-semibold sm:text-[13.5px]'> Tax-free distributions</p>
             <p className='sm:text-[12px] text-[#474242] lg:max-2xl:text-[14px] '>From Age 70-90</p>

            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={EstimateImage} className='lg:max-2xl:w-[590px] lg:max-2xl:h-[500px] rounded-lg sm:w-[390px] sm:h-[390px] sm:p-2' />

        <p className='text-center my-2 text-[#3A3939] text-[18px]'>Lörem ipsum igt nese trifiering inte egogt. Ryväv nesm fasade. Setreligt deliga. </p>
        <button className='text-white lg:max-2xl:mx-[180px] sm:p-2 sm:w-[230px] sm:ml-[59px]  sm:my-2 bg-[#2B53D6] rounded-full lg:max-2xl:p-2 '>Learn More With FREE Course</button>


      </div>
    </div>
  )
}

export default Estimate