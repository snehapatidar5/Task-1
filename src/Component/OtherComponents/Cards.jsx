import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'


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
    <div className='sm:mt-[440px] lg:max-2xl:mt-[-30px] '>
      <div className='text-center  '>
        <h2 className='text-[#12171B]  lg:max-2xl:text-[40px] sm:text-[30px] font-semibold '>Benefits of Kai-Zen®</h2>
        <p className='text-[#3A3939] text-[16px] lg:max-2xl:w-[667px] lg:max-2xl:h-[90px] sm:p-1 text-center lg:max-2xl:ml-[350px]'>We have all used leverage to purchase a nicer home, or to buy a better car. Kai-Zen® uses leverage for the potential to accumulate cash, providing up to 60 - 100% more benefits, than using your money alone.</p>
      </div>


       
          <div className='lg:max-2xl:flex lg:max-2xl:justify-center  '>
            {data.map((item, index) => (
              <div key={index} className="bg-[#F9FAFE] lg:max-2xl:w-[330px] sm:w-[320px]  sm:h-[340px] lg:max-2xl:h-[360px] p-4 rounded-lg  sm:my-4  sm:ml-6 ">
                <img className='w-[68px] h-[68px]' src={item.img} alt="Card" />
                <h2 className='text-[25px] font-semibold lg:max-2xl:py-2 text-[#12171B] h-[130px] '>{item.heading}</h2>
                <p className='text-[#3A3939] text-[16px]'>{item.para}</p>
              </div>
            ))}
          </div>

      

      <div className='lg:max-2xl:ml-[620px] lg:max-2xl:my-10 sm:mx-[85px]'>
        <button className='text-white   bg-[#2B53D6] rounded-full sm:p-2 sm:w-[200px] '>Learn  With FREE Course</button>
      </div>

    </div>
  )
}

export default Cards
