import footer_logo from '../../assets/footer_logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";


function Footer() {
  return (
    <>
       
        <footer className=' lg:max-2xl:h-[436px] lg:max-2xl:w-[100%] border-t-2 border-[#E3E3E3]'>
       
            <div className='sm:text-center lg:mb-0 lg:flex lg:max-2xl:justify-around  '>

            <div className='lg:max-2xl:mt-[35px]  lg:max-2xl:w-[322px] lg:max-2xl:h-[288px] flex flex-col items-center sm:flex sm:justify-center lg:max-2xl:text-start'>
            <img src={footer_logo} alt="Logo" className='lg:max-2xl:w-[150px] lg:max-2xl:h-[50] sm:mx-auto lg:max-2xl:ml-0 '/>
            <p className='pt-[14px] leading-relaxed w-[315px] h-[137px] lg:max-2xl:text-lg text-[#3A3939]  '>Lörem ipsum reaned rekle, banat. Jasminmöte betrese  Lörem ipsum reaned rekle, banat. Jasminmöte betrese Lörem ipsum reaned rekle, banat. Jasminmöte betrese Lörem</p>
            <div className='pt-[34px] flex gap-[35px] mt-[10px] lg:max-2xl:ml-[-50px]'>
            <FaFacebookF className='  text-[#2B53D6]' />
            <FaTwitter className=' text-[#2B53D6]' />
            <FaYoutube className='  text-[#2B53D6]' />
            </div>
            </div>

            <div className='lg:max-2xl:w-[144px] lg:max-2xl:h-[285px] lg:max-2xl:text-start'>
                <div className="lg:max-2xl:mt-[52px] ">
                     <h2 className="text-[#050505] font-bold lg:max-2xl:text-lg sm:mt-6">Quick Links</h2>
                     <ul className='lg:max-2xl:pt-[41px] space-y-2 sm:pt-4'>
                        <li className='text-[#343939]'><Link to='/'>Home</Link></li>
                        <li className='text-[#343939]'><Link to='/about'>About Ilia® </Link></li>
                        <li className='text-[#343939]'><Link to='/about'>About NIW® </Link></li>
                        <li className='text-[#343939]'>News</li>
                        <li className='text-[#343939]'><Link to='/contact'>Contact Us</Link></li>
                        <li className='text-[#343939]'>Wire Instructions</li>
                     </ul>
                </div>
            </div>

           <div className='lg:max-2xl:w-[179px] lg:max-2xl:h-[285px] lg:max-2xl:text-start'>
                <div className="lg:max-2xl:mt-[52px] " >
                <h2 className="text-[#050505] font-bold lg:max-2xl:text-lg sm:mt-6">Strategies</h2>
                <ul className='lg:max-2xl:pt-[41px] space-y-2 sm:pt-4'>
                <li className='text-[#343939]'>Kai-Zen®</li>
                <li className='text-[#343939]'>Tri-Zen®</li>
                <li className='text-[#343939]'>Leveraged Savings Plan</li>
                <li className='text-[#343939]'>Enhanced Split Dollar</li>
                <li className='text-[#343939]'>Cash Stream</li>
                </ul>
                </div>
            </div>
               
            <div className='lg:max-2xl:w-[144px] lg:max-2xl:h-[285px] lg:max-2xl:text-start'>
                <div className="lg:max-2xl:mt-[65px]">
                <ul className='lg:max-2xl:pt-[55px] space-y-2 '>
                <li className='text-[#343939]'>Premium Finance Rescue</li>
                <li className='text-[#343939]'>Life Strategies</li>
                <li className='text-[#343939]'>Multi-Gen</li>
                <li className='text-[#343939]'>Trust Revitalization</li>
                <li className='text-[#343939]'>Find Your Strategy</li>
                </ul>
                </div>
            </div>

            <div className='lg:max-2xl:text-start lg:max-2xl:mt-[-25px]'>
                <div className="lg:max-2xl:mt-[55px] lg:max-2xl:ml-[10px] sm:flex sm:flex-col">
                    <h2 className="text-[#050505] font-bold lg:max-2xl:text-lg sm:mt-6">Contact Us</h2>
                    <div  className="lg:max-2xl:flex lg:max-2xl:gap-[10px] lg:max-2xl:mt-[23px] lg:max-2xl:mr-10  sm:pt-4 sm:flex sm:item-center sm:justify-center gap-2">
              <BsTelephone  className="text-[#2B53D6] w-[15px] h-[15px] sm:mt-1" />
              <p className=" lg:max-2xl:text-lg text-[#343939] ">800-294-9940</p>
            </div>

            <div className="lg:max-2xl:flex lg:max-2xl:gap-[10px] sm:flex sm:item-center sm:justify-center gap-2 ">
            <CiMail className="text-[#2B53D6] lg:max-2xl:w-[20px] lg:max-2xl:h-[18px] lg:max-2xl:mt-[7px] sm:mt-[5px]"/>
            <p  className="lg:max-2xl:mb-2 lg:max-2xl:text-lg text-[#343939]">support@abc.com</p>
             
            </div>
                </div>
            </div>


            </div>
            <div className=' sm:flex  sm:flex-col-reverse sm:text-center sm:space-y-4 lg:max-2xl:p-2'>
            <div className='lg:max-2xl:text-start lg:max-2xl:mt-4 lg:max-2xl:ml-10 '>
                <span className='text-[#343939] '>Copyright © 2024 NIW | All Rights Reserved</span>
            <div className=' sm:flex sm:justify-center sm:gap-6 lg:max-2xl:ml-[1000px] lg:max-2xl:mt-[-28px] '>
                <p className='text-[#343939]'>Privacy Policy</p>
                <p className='text-[#343939]'>Terms & Conditions</p>
            </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
