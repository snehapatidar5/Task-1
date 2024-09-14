import logo from '../../assets/logo.png'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
function Navbar() {
  return (
    <>
      <nav className="lg:max-2xl:w-[100%] lg:max-2xl:h-[65.59px] bg-[rgba(10,44,82,1)] sm:h-[65.59px] sm:w-[100%] ">
        <div className="flex ">

          <div className="flex mt-2  lg:max-2xl:w-[55%]  lg:max-2xl:gap-[18px] sm:gap-4 sm:w-[100%]">
            <img src={logo} className="lg:max-2xl:ml-[11px] sm:ml-[4px] w-[40px] h-[40px]" />
            
            <div className='flex lg:max-2xl:gap-4 lg:max-2xl:mt-2 sm:m-0 sm:gap-1' >
            <div className="sm-w-[100px]   sm:m-0">
            <span className="text-white font-bold lg:max-2xl:text-lg sm:text-base">
              Discover Benefits of Kai-Zen® with Jane
            </span>
            </div>
             
             <div className=' sm:mr-2'>
             <p className="cursor-pointer underline font-bold text-[#7592F2] lg:max-2xl:text-lg sm:text-base " >
              Learn More
            </p>
             </div>
           </div>
          </div>

          <div className="lg:max-2xl:flex lg:max-2xl:justify-end  lg:max-2xl:w-[55%] sm:hidden">

            <div className="lg:max-2xl:flex lg:max-2xl:gap-[10px] lg:max-2xl:m-4">
              <BsTelephone  className="text-white lg:max-2xl:w-[22px] lg:max-2xl:h-[22px] lg:max-2xl:my-1" />
              <p className="text-white text-lg ">800-294-9940</p>
            </div>

            <div className="lg:max-2xl:flex lg:max-2xl:gap-[10px] lg:max-2xl:m-4">
            <CiMail className="text-white lg:max-2xl:w-[29px] lg:max-2xl:h-[29px]"/>
              <p  className="mb-2 text-white lg:max-2xl:text-lg">support@abc.com</p>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
