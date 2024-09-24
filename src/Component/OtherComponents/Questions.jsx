import chart from '../../assets/chart.png'
import chart2 from '../../assets/chart2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faAngleUp } from '@fortawesome/free-solid-svg-icons';


import  { useState } from 'react';






const faqData  = [
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className='lg:max-2xl:mt-[-300px] sm:mt-[-400px]'>
    <div >
    <img src={chart} className='rounded-3xl p-2 cursor-pointer sm:hidden lg:max-2xl:block w-[100%]'/>
    <img src={chart2} className='rounded-3xl p-2 cursor-pointer lg:max-2xl:hidden'/>
 </div>
 <div className="lg:max-2xl:max-w-3xl mx-auto  p-6 sm:max-w-lg  ">
      <h2 className="text-center lg:max-2xl:text-3xl sm:text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="sm:space-y-2 lg:max-2xl:space-y-6 ">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-md">
            <button
              className="w-full text-left lg:max-2xl:py-4 sm:p-4 font-semibold text-lg flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
              </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <p className="font-medium text-lg">
          Still have Any Questions?
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
    </div>
 

     
    
  );
};

export default Questions;
