import React from 'react'
import mernImage from '../assets/mern.webp';

const BentoCard = ({src, title, description, iscommingSoon}) => {
    return (
        <div className='relative size-full'>
            <img
            src={src}
            className='absolute left-0 top-0 size-full object-cover'
            />
            <div className='relative z-10 flex size-full flex-col 
            justify-between p-5 text-blue-50'>
                <h1 className='bento-title'>{title}</h1>
                {description &&(
                    <p className='mt-3 max-w-64 text-xs
                    md:text-base'>{description}</p>
                )}
            </div>
            {title}
        </div>
    )
}
const Stack = () => {
  return (
    <div className='bg-black'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='text-center font-bold px-5 py-32'>
                <p className=' font-general text-lg text-blue-50'>
                    Our Stacks
                </p>
                <h3 className='text-center font-light text-white'>Industry standered technologises at your fingertips</h3>
            </div>
            <div className='border-2 border-white relative  h-80 w-5/6
            overflow-hidden rounded-md md:h[65vh]'>
                <BentoCard
                src={mernImage}
                description={""}
                />
                <BentoCard/>

            </div>
        </div>
    </div>
  )
}

export default Stack
