import { Checkmark } from "react-checkmark";
import benefit from "../../assets/benefit.png";
import check from '../../assets/check.png'

function Benefit() {
  return (
    <div className="lg:max-2xl:flex lg:max-2xl:justify-center lg:max-2xl:gap-3 lg:max-2xl:mt-[-60px] ">
      <div>
              <img src={benefit} className="lg:max-2xl:w-[450px] lg:max-2xl:h-[600px] sm:w-[343px] h-[377px] rounded-lg  sm:m-4 sm:object-cover " />
      </div>
      <div className="lg:max-2xl:w-[600px] lg:max-2xl:h-[700px]">
        <h3 className="text-[#12171B] lg:max-2xl:text-start lg:max-2xl:text-[38px] sm:text-[28px] font-bold sm:text-center  ">
          More Money. More Protection. More Confidence.
        </h3>
        <p className="text-[#3A3939] lg:max-2xl:text-start text-[18px] sm:text-center sm:p-2 ">
          This isn't just a slogan, it's how we do business. Kai-Zen provides
          the opportunity to add capital to your plan, without the typical risks
          associated with borrowing.
        </p>

        <div className=" sm:p-2">
          <h2 className="text-[25px] font-semibold text-[#272D39]">
            Benefits of Smart Leverage
          </h2>
          <div className="lg:max-2xl:flex lg:max-2xl:justify-between  ">
          <div className='   sm:space-y-3 sm:mt-4'>
          <ul>
            <li className='flex sm:gap-2'>
            <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px] pl-1'>No credit checks.</p>
            </li>
          </ul>
          <ul>
            <li className='flex sm:gap-2'>                 
             <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px] pl-1 mr-[36px]'>No personal guarantees.</p>
            </li>
          </ul>
          </div>
          <div className='lg:max-2xl:p-2 sm:space-y-2 sm:mt-2'>
          <ul>
              <li className='flex sm:gap-2'>   
              <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px] pl-1'>No credit checks.</p>
              </li>
          </ul>
          <ul>
             <li className='flex sm:gap-2'>               
              <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px] pl-1'>No interest payments.</p>
             </li>
          </ul>
          </div>
          </div>
          

        </div>
        <div className='sm:p-2'>
          <h2 className="text-[25px] font-semibold text-[#272D39]">
            Benefits of More Protection
          </h2>
         
          <ul className='   sm:space-y-4 sm:mt-4'>
            <li className='flex  sm:gap-2 '>                  
             <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px] pl-1 '>Death benefit with living benefit riders.</p>
            </li>
          </ul>
          <div className='lg:max-2xl:flex lg:max-2xl:justify-between  sm:space-y-2 sm:mt-2'>
          <ul>
        <li className='flex sm:gap-2'>  
                        <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px] pl-1'>Chronic illness</p>
               </li>
          </ul>
          <ul>
       <li className='flex sm:gap-2 lg:max-2xl:mt-[-5px] lg:max-2xl:mr-[50px] '>            
             <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px] pl-1'>Terminal illness</p>
             </li>
          </ul>
          </div>

          <div className='sm:mt-4 lg:max-2xl:space-y-4'>
            <h2 className="text-[25px] font-semibold text-[#272D39]">Benefits of Smart Leverage</h2>
            <ul className="  sm:space-y-6 sm:mt-4">
              <li  className="flex  gap-4 text-gray-800 sm:gap-2 ">
                  <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px]'>Upside crediting (subject to cap)</p>
              </li>
             </ul>
            <ul className="  sm:mt-2">
              <li className="flex  gap-2 text-gray-800 sm:gap-2 ">
                  <span><img src={check} className='w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px]'>No negative returns due to market decline.</p>
              </li>
             
            </ul>
            <ul className=" sm:mt-2">
                   <li  className="flex  gap-2 text-gray-800  ">
                  <span><img src={check} className='sm:w-[48px] lg:max-2xl:w-[25px] h-[25px]'/></span> <p className='text-[#3A3939] text-[16px]'>Tax-free distributions with potential to access cash value using tax-free policy loans.</p>
                   </li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Benefit;
