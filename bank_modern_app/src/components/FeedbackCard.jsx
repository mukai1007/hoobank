import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({feedbacks}) => {
    return (
        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            {feedbacks.map((feedback) => (
                <div key={feedback.id} className='flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-0 feedback-card'>
                    <img src={quotes} alt='double-quotes' className="w-[42.6px] h-[27.6px] object-contain"/>
                    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
                        {feedback.content}
                    </p>

                    <div className="flex flex-row">
                        <img src={feedback.img} alt={feedback.name} className="w-[48px] h-[48px] rounded-full" />
                        <div className="flex flex-col ml-4">
                            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                                {feedback.name}
                            </h4>
                            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                                {feedback.title}
                            </p>
                        </div>
                    </div>
                </div>  
            ))}
        </div>
    )
}

export default FeedbackCard