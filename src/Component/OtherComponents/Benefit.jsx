import { Checkmark } from "react-checkmark";
import benefit from "../../assets/benefit.png";
import check from '../../assets/check.png';

function Benefit() {
  return (
    <div className="lg:max-3xl:flex lg:max-3xl:justify-center lg:max-3xl:gap-3 lg:max-3xl:mt-[-60px] xs:mt-10 sm:mt-0">
      <div className="flex justify-center xs:p-2">
        <img src={benefit} className="sm:w-[700px] sm:max-lg:h[600px] md:w-[750px] lg:max-3xl:w-[450px] lg:max-3xl:h-[600px] xs:w-[390px] rounded-lg xs:m-4 object-cover max-w-full h-auto" />
      </div>
      <div className="sm:ml-14 lg:max-3xl:w-[600px] lg:max-3xl:h-[700px]   ">
       <div className=' sm:max-lg:w-[100%] sm:max-lg:p-0 '>
       <h3 className=" xs:p-[3px] text-[#12171B] lg:max-3xl:text-start lg:max-3xl:text-[38px] xs:text-[28px] font-bold xs:max-lg:text-center ">
          More Money. More Protection. More Confidence.
        </h3>
        <p className="text-[#3A3939] lg:max-3xl:text-start text-[18px] xs:text-center xs:p-2">
          This isn't just a slogan, it's how we do business. Kai-Zen provides
          the opportunity to add capital to your plan, without the typical risks
          associated with borrowing.
        </p>
       </div>

        <div className="xs:p-2">
          <h2 className="text-[25px] xs:text-start sm:max-lg:text-center lg:max-3xl:text-start font-semibold text-[#272D39] ">
            Benefits of Smart Leverage
          </h2>
          <div className="lg:max-3xl:flex lg:max-3xl:justify-between">
            <div className="xs:space-y-3 xs:mt-4">
              <ul>
                <li className="flex xs:gap-2">
                  <span><img src={check} className='w-[25px] h-[25px]' /></span>
                  <p className='text-[#3A3939] text-[16px] pl-1'>No credit checks.</p>
                </li>
              </ul>
              <ul>
                <li className='flex xs:gap-2'>
                  <span><img src={check} className='w-[25px] h-[25px]' /></span>
                  <p className='text-[#3A3939] text-[16px] pl-1 mr-[36px]'>No personal guarantees.</p>
                </li>
              </ul>
            </div>
            <div className='lg:max-3xl:p-2 xs:space-y-2 xs:mt-2'>
              <ul>
                <li className='flex xs:gap-2'>
                  <span><img src={check} className='w-[25px] h-[25px]' /></span>
                  <p className='text-[#3A3939] text-[16px] pl-1'>No credit checks.</p>
                </li>
              </ul>
              <ul>
                <li className='flex xs:gap-2'>
                  <span><img src={check} className='w-[25px] h-[25px]' /></span>
                  <p className='text-[#3A3939] text-[16px] pl-1'>No interest payments.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='xs:p-2'>
          <h2 className="xs:text-start sm:max-lg:text-center text-[25px] font-semibold text-[#272D39] lg:max-3xl:text-start ">
            Benefits of More Protection
          </h2>
          <ul className='xs:space-y-4 xs:mt-4'>
            <li className='flex xs:gap-2'>
              <span><img src={check} className='w-[25px] h-[25px]' /></span>
              <p className='text-[#3A3939] text-[16px] pl-1'>Death benefit with living benefit riders.</p>
            </li>
          </ul>
          <div className='lg:max-3xl:flex lg:max-3xl:justify-between xs:space-y-2 xs:mt-2'>
            <ul>
              <li className='flex xs:gap-2'>
                <span><img src={check} className='w-[25px] h-[25px]' /></span>
                <p className='text-[#3A3939] text-[16px] pl-1'>Chronic illness</p>
              </li>
            </ul>
            <ul>
              <li className='flex xs:gap-2 lg:max-3xl:mt-[-5px] lg:max-3xl:mr-[50px]'>
                <span><img src={check} className='w-[25px] h-[25px]' /></span>
                <p className='text-[#3A3939] text-[16px] pl-1'>Terminal illness</p>
              </li>
            </ul>
          </div>

          <div className='xs:mt-4 lg:max-3xl:space-y-4'>
            <h2 className="sm:max-lg:text-center xs:text-start text-[25px] font-semibold text-[#272D39] lg:max-3xl:text-start ">
              Benefits of Smart Leverage
            </h2>
            <ul className="xs:space-y-6 xs:mt-4">
              <li className="flex gap-4 text-gray-800 xs:gap-2">
                <span><img src={check} className='w-[25px] h-[25px]' /></span>
                <p className='text-[#3A3939] text-[16px]'>Upside crediting (subject to cap)</p>
              </li>
            </ul>
            <ul className="xs:mt-2">
              <li className="flex gap-2 text-gray-800 xs:gap-2">
                <span><img src={check} className='w-[25px] h-[25px]' /></span>
                <p className='text-[#3A3939] text-[16px]'>No negative returns due to market decline.</p>
              </li>
            </ul>
            <ul className="xs:mt-2">
              <li className="flex gap-2 text-gray-800">
                <span><img src={check} className=' xs:w-[40px] sm:max-3xl:w-[25px] sm:max-3xl:h-[25px]' /></span>
                <p className='text-[#3A3939] text-[16px]'>Tax-free distributions with potential to access cash value using tax-free policy loans.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
