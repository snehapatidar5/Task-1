import chart from '../assets/chart.png'
import chart2 from '../assets/chart2.png'

import  { useState } from 'react';






const faqs = [
  {
    question: "Why was Kai-Zen® Developed?",
    answer: "Research tells us that 74% of how much you receive in retirement is based on how much cash (capital) you have set aside, and only 26% is a result of investment return. Put another way, the retirement concern is not about how your investments are doing, it is not having enough money to invest. This underfunding for retirement income is the issue Kai-Zen® is helping to resolve and Kai-Zen® is currently the only plan on the market where you can obtain leverage to this degree, without having to qualify for the loan and make interest payments.",
  },
  {
    question: "What are the Qualification Requirements?",
    answer: "This underfunding for retirement income is the issue Kai-Zen® is helping to resolve and Kai-Zen® is currently the only plan on the market where you can obtain leverage to this degree",
  },
  {
    question: "It Sounds Too Good to be True. What's the Catch?",
    answer: "only 26% is a result of investment return. Put another way, the retirement concern is not about how your investments are doing, it is not having enough money to invest.",
  },
  {
    question: "How Kai-Zen® works?",
    answer: "Research tells us that 74% of how much you receive in retirement is based on how much cash (capital) you have set aside",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='sm:mt-16 sm:w-[370px] lg:max-2xl:w-[100%]'>
      <div>
        <img src={chart} className='rounded-3xl p-2 cursor-pointer sm:hidden lg:max-2xl:block '/>
        <img src={chart2} className='rounded-3xl p-2 cursor-pointer lg:max-2xl:hidden'/>
     </div>
     <h2 className=" lg:max-2xl:text-[40px] sm:text-[25px] font-semibold text-center ">Frequently Asked Questions</h2>
    
    <div className="w-[60%] lg:max-2xl:mx-auto sm:m-4 my-10">
    {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 sm:p-0 py-4">
          <button
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center sm:w-[300px] lg:max-2xl:w-full text-left text-xl font-medium text-[#12171B] focus:outline-none p-6"
          >
            {faq.question}
            <span className={`ml-2 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
              v
            </span>
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}

      <div className="lg:max-2xl:mt-6 sm:mt-4 sm:flex sm:flex-col sm:justify-center sm:gap-2 sm:items-center text-center">
      <h2 className='text-center font-bold lg:max-2xl:text-xl sm:text-md text-[#1C1B1B] lg:max-2xl:p-6 sm:ml-8'>Still have Any Questions ?</h2>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </div>
    </div>
 

     
    
  );
};

export default Questions;