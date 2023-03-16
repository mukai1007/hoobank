import React from 'react'
import styles from '../style'
import { layout } from '../style'

const FeatureCard = ({features}) => {
    return (
        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <div key={feature.id} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
                    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                        <img src={feature.icon} alt='star' className='w-[50%] h-[50%] object-contain'/>
                    </div>
                    <div className='flex flex-1 flex-col ml-3'>
                        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'> 
                            {feature.title}
                        </h4>
                        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
                            {feature.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeatureCard