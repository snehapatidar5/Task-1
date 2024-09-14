import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

function Cards() {
  return (
    <div>
        <div className='text-center '>
            <h2 className='text-[#12171B]  lg:max-2xl:text-[40px] sm:text-[30px] font-bold '>Benefits of Kai-Zen®</h2>
            <p className='text-[#3A3939] text-[16px] lg:max-2xl:w-[667px] lg:max-2xl:h-[90px] sm:p-1 text-center lg:max-2xl:ml-[350px]'>We have all used leverage to purchase a nicer home, or to buy a better car. Kai-Zen® uses leverage for the potential to accumulate cash, providing up to 60 - 100% more benefits, than using your money alone.</p>
         
        </div>
        <div className='lg:max-2xl:flex lg:max-2xl:justify-evenly'>
        <div className='lg:max-2xl:w-[320px] sm:w-[270px ] sm:h-[230px] lg:max-2xl:h-[320px] bg-[#FCFBFF] rounded-lg p-4   sm:p-2 sm:my-2'>
        <img src={card1} className='w-[68px] h-[68px] '/>
        <h3 className='text-[25px] font-semibold text-[#12171B]'>Protection for Life</h3>
        <p className='text-[#3A3939] text-[16px]'>Kai-Zen provides death benefit protection, as well as living benefits in the case of critical or chronic illness.</p>
        </div>
        <div className='lg:max-2xl:w-[320px] lg:max-2xl:h-[320px] bg-[#FCFBFF] rounded-lg p-4  sm:w-[270px ] sm:h-[260px]  sm:p-2'>
        <img src={card2} className='w-[68px] h-[68px]'/>
        <h3 className='text-[25px] font-semibold text-[#12171B]'>Accumulate more wealth and maintain your current lifestyle</h3>
        <p className='text-[#3A3939] text-[16px]'>Kai-Zen is broken down into 5 easy payments. The lender adds up to 3x your money, allowing for additional capital without putting a strain on your bank account.</p>
        </div>
        <div className='lg:max-2xl:w-[320px] lg:max-2xl:h-[320px] bg-[#FCFBFF] rounded-lg p-4  sm:w-[270px ] sm:h-[230px]  sm:p-2 sm:my-2'>
        <img src={card3} className='w-[68px] h-[68px]'/>
        <h3 className='text-[25px] font-semibold text-[#12171B]'>Results at your fingertips</h3>
        <p className='text-[#3A3939] text-[16px]'>With the MyILIA Servicing Portal, you can access your annual review, policy details, and change or add beneficiaries... Right from the palm of your hand.</p>
        </div>
        </div>
        <div className='lg:max-2xl:ml-[620px] my-2 sm:mx-[94px]'>
        <button className='text-white   bg-[#2B53D6] rounded-full p-2 '>Learn  With FREE Course</button>

        </div>

    </div>
  )
}

export default Cards