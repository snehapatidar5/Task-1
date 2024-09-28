import EstimateImage from '../../assets/estimateImage.png'
import iVector from '../../assets/iVector.png'
function Estimate() {
  return (
    <div className=' lg:max-3xl:mt-12 lg:max-3xl:flex lg:max-3xl:justify-center lg:max-3xl:gap-4 w-[100%] h-[100%]  '>
      <div className='lg:max-3xl:w-[400px] lg:max-3xl:mt-[-13px] sm:p-6 lg:max-3xl:ml-6 xs:p-3 xs:mt-3'>
        <div>
          <h3 className='text-[25px] font-semibold'>Estimate your Returns</h3>
          <p className='text-[18px] text-[#3A3939] xs:pt-1'>See if you qualify, discover your potential returns and see if Kai-Zen® is right for you.</p>


          <p className='text-lg text-[#3A3939] font-semibold mt-3 xs:mt-6'>Age</p>
          <input type="range" className=" w-full xs:w-[94%] h-1 mb-6  rounded-lg cursor-pointer bg-[#FFFFFF]" />

          <p className='text-[18px] text-[#3A3939] font-semibold xs:mt-6'>Annual Contribution Amount</p>
          <input type="range" className=" w-full xs:w-[94%] h-1 mb-6  rounded-lg cursor-pointer bg-[#FFFFFF]" />
        </div>
        <div>
          <h3 className='lg:max-3xl:text-[25px] xs:text-[20px] font-semibold'>Your Results</h3>
          <div className='lg:max-3xl:flex   xs:-max:lg:block xs:w-[100%] sm:w-[100%]  xs:max-lg:mt-4  lg:max-3xl:gap-4 '>
            <div className='bg-[#F3F9FF] border border-[#E8E8E8] rounded-lg p-2 text-center'>
              <p className='text-[16px] text-[#000000] font-semibold xs:text-[13.5px]'>Starting at Age 55</p>
              <p className='text-[#289BFF] text-[30px] font-semibold xs:text-[26px]'>$935,926</p>
                <p className='text-[16px] text-[#000000] font-semibold xs:text-[13.5px] sm:max-lg:text-center'>Initial death benefit</p>
            </div>
            <div className="bg-[#F2FFFB] border border-[#E8E8E8] rounded-lg p-2 text-center xs:max-lg:mt-2 ">
              <p className='text-[16px] text-[#000000] font-semibold xs:text-[13.5px]'>Age 65-80</p>
              <p className='text-[#42E5AB] text-[30px] font-semibold xs:text-[26px]'>$53,053/yr</p>
                <p className='text-[16px] text-[#000000] font-semibold xs:text-[13.5px]'>Tax-free distributions</p>
            </div>
          </div>
          <div className='lg:max-3xl:w-[350px] xs:w-[100%]   border border-[#E8E8E8] rounded-lg sm:max-lg:flex xs:flex sm:max-lg:flex-col sm:max-lg:items-center  lg:max-3xl:flex lg:max-3xl:p-7 xs:p-4 gap-2 text-center mt-2'>
            <div className='xs:w-[50%] '>
            <p className='text-[#289BFF] text-[30px] font-semibold xs:text-[26px]'>$344,335</p>
            <p className='text-[16px] text-[#000000] font-semibold xs:text-[13.5px] xs:p-1'>Remaining Death benefit </p>
             <p className='xs:text-[12px] text-[#474242] lg:max-3xl:text-[14px] '>Remaining Amount</p>

            </div>
            <div className='xs:w-[40%] '>
            <p className='text-[#42E5AB] text-[30px] font-semibold xs:text-[26px]'>$1,114,121</p>
            <p className='text-[16px] text-[#000000] font-semibold xs:text-[13.5px]'> Tax-free distributions</p>
             <p className='xs:text-[12px] text-[#474242] lg:max-3xl:text-[14px] '>From Age 70-90</p>

            </div>
          </div>
        </div>
      </div>
      <div >
      <div className ="flex justify-center">
      <img src={EstimateImage} className='sm:w-[800px] sm:h-[650px] md:w-[800px] md:h-[700px] rounded-lg xs:w-[390px] xs:h-[390px]  lg:max-3xl:h-[610px] lg:max-3xl:w-[700px]  xs:p-3 object-cover max-w-full h-auto' />

      </div>

        <p className='text-center  text-[#3A3939] text-[16px] xs: px-[20px]'>Lörem ipsum igt nese trifiering inte egogt. Ryväv nesm fasade. Setreligt deliga. </p>
          <div className='flex items-center justify-center mt-2'>
          <button className='text-white  xs:w-[250px]  px-4 py-2   bg-[#2B53D6] rounded-full '>Learn More With FREE Course</button>

          </div>

      </div>
    </div>
  )
}

export default Estimate
