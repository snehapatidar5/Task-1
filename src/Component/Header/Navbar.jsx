import logo from '../../assets/logo.png'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
function Navbar() {
  return (
    <>
      <nav className="  bg-[rgba(10,44,82,1)]  h-[65.59px] w-[100%]  lg:max-3xl:pt-0  xs:pt-2.5 sm:pt-0 ">
         <div className="flex lg:mx-8 ">
          <div className="flex  lg:max-3xl:mt-[12px]  lg:max-3xl:w-[55%]  lg:max-3xl:gap-[18px] xs:gap-3 xs:max-lg: xs:max-lg:w-[100%] sm:mt-3 ">
            <img src={logo} className="lg:max-3xl:ml-[11px] xs:ml-[15px] w-[40px] h-[40px]" />
            
            <div className='flex lg:gap-1 lg:max-3xl:mt-2 xs:m-0 xs:gap-4 sm:gap-2 sm:mt-2 ' >
            <div className="xs-w-[100px] sm:w-[230px] md:w-[265px] lg:w-[350px]   xs:m-0">
            <span className=" md:text-sm text-white font-bold lg:max-3xl:text-lg xs:text-base sm:text-xs xs:leading-none">
              Discover Benefits of Kai-Zen® with Jane
            </span>
            </div>
             
             <div className=' lg:mr-[-10px]  xs:w-[150px] lg:w-[120px] sm:mr-[-30px] xs:mr-0'>
             <span className=" md:text-sm cursor-pointer underline font-bold sm:text-xs text-[#7592F2] lg:max-3xl:text-lg xs:text-base  lg:max-3xl:mt-0 xs:m-0 sm:m-1 md:mt-1" >
              Learn More
            </span>
             </div>
           </div>
          </div>

          <div className=" sm:gap-2  lg:max-3xl:flex lg:max-3xl:justify-end lg:max-3xl:mt-[6px] lg:max-3xl:w-[55%] sm:mt-5 sm:w-[100%] sm:flex sm:justify-center xs:hidden">

          

            <div className="flex lg:max-3xl:gap-[10px] sm:gap-2 lg:max-3xl:m-4">
            <div className=' bg-white bg-opacity-20 lg:max-3xl:p-1 sm:w-[30px] sm:h-[30px] lg:max-3xl:w-[38px] lg:max-3xl:h-[38px]  sm:p-[7px] rounded-full lg:max-3xl:mt-[-6px]' >
            <BsTelephone  className="text-white lg:max-3xl:w-[23px] lg:m-[2px] lg:max-3xl:h-[29px]" />

            </div>
              <p  className=" text-white md:text-sm lg:max-3xl:text-lg lg:max-3xl:mt-0 sm:text-xs sm:mt-1">800-294-9940</p>
            </div>

            <div className="flex lg:max-3xl:gap-[10px] sm:gap-2 lg:max-3xl:m-4">
            <div className=' bg-white bg-opacity-20 lg:max-3xl:p-1 sm:w-[30px] sm:h-[30px] lg:max-3xl:w-[38px] lg:max-3xl:h-[38px]  sm:p-[7px] rounded-full lg:max-3xl:mt-[-6px]' >
            <CiMail className="text-white lg:max-3xl:w-[29px] lg:max-3xl:h-[29px]"/>

            </div>
              <p  className=" text-white md:text-sm lg:max-3xl:text-lg lg:max-3xl:mt-0 sm:text-xs sm:mt-1">support@abc.com</p>
            </div>
          </div>

        </div>
      </nav>

      
    </>
  );
}
export default Navbar;
