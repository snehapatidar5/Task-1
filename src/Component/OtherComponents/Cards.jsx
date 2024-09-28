import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';


const data = [
  {
    img: card1,
    heading: "Protection for Life",
    para: "Kai-Zen provides death benefit protection, as well as living benefits in the case of critical or chronic illness."
  },
  {
    img: card2,
    heading: "Accumulate more wealth and maintain your current lifestyle",
    para: "Kai-Zen is broken down into 5 easy payments. The lender adds up to 3x your money, allowing for additional capital without putting a strain on your bank account."
  },
  {
    img: card3,
    heading: "Results at your fingertips",
    para: "With the MyILIA Servicing Portal, you can access your annual review, policy details, and change or add beneficiaries... Right from the palm of your hand."
  }
]

function Cards() {
  return (
    <div className='sm:mt-[30px] md:mt-[30px] sm:p-5 xs:mt-[30px] lg:max-3xl:mt-[50px] '>
      <div className='text-center  '>
        <h2 className='text-[#12171B]  lg:max-3xl:text-[40px] xs:text-[30px] font-semibold '>Benefits of Kai-Zen®</h2>
        <p className='text-[#3A3939] text-[16px] lg:max-3xl:w-[667px] lg:max-3xl:h-[90px] xs:p-1 text-center mx-auto'>We have all used leverage to purchase a nicer home, or to buy a better car. Kai-Zen® uses leverage for the potential to accumulate cash, providing up to 60 - 100% more benefits, than using your money alone.</p>
      </div>
      
        
  
 
 <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-center'>
  {data.map((item, index) => (
    <div key={index} className="bg-[#F9FAFE] max-w-xs w-full h-[340px] lg:w-[330px] lg:h-[360px] p-4 rounded-lg my-4 mx-2">
      <img className='w-[68px] h-[68px]' src={item.img} alt="Card" />
      <h2 className='text-[25px] font-semibold py-2 text-[#12171B] h-[130px]'>{item.heading}</h2>
      <p className='text-[#3A3939] text-[16px]'>{item.para}</p>
    </div>
  ))}
</div>               
 
<div className='flex items-center justify-center mt-2'>
          <button className='text-white  xs:w-[250px]  px-4 py-2   bg-[#2B53D6] rounded-full '>Learn More With FREE Course</button>

          </div>

    </div>
  )
}

export default Cards
