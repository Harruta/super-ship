import React from 'react';
import mernImage from '../assets/mern.png';
import nextImage from '../assets/next.png';
import reactImage from '../assets/react.png';
import tailwindImage from '../assets/tailwind.png';
import goImgage from '../assets/go.png';
import rustImage from '../assets/rust.png';
import typescriptImage  from '../assets/typescript.png';

const BentoCard = ({ src, zoomOut }) => {
    return (
        <div className='relative h-full rounded-lg overflow-hidden border border-white'>
            <img
                src={src}
                className={`absolute left-0 top-0 w-full h-full object-cover ${
                    zoomOut ? 'scale-110' : ''
                }`}
                alt=""
            />
        </div>
    );
};

const Stack = () => {
    return (
        <div className='bg-black py-20'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='text-center font-bold px-5 pb-10'>
                    <p className='font-general text-xl text-blue-50'>
                        Our Stacks
                    </p>
                    <h3 className='text-center font-light text-white'>
                        Industry-standard technologies at your fingertips
                    </h3>
                </div>

                {/* Grid Layout */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {/* MERN Stack (Large Rectangle) */}
                    <div className='md:col-span-2 lg:col-span-3 h-80'>
                        <BentoCard src={mernImage} zoomOut={true} />
                    </div>

                    {/* Thres Smaller Rectangles */}
                    <div className='h-40'>
                        <BentoCard src={nextImage} zoomOut={true} />
                    </div>
                    <div className='h-40'>
                        <BentoCard src={reactImage} zoomOut={true} />
                    </div>
                    <div className='h-40'>
                        <BentoCard src={tailwindImage} zoomOut={true} />
                    </div>

                    <div className='h-40'>
                        <BentoCard src={rustImage} zoomOut={true} />
                    </div>
                    <div className='h-40'>
                        <BentoCard src={typescriptImage} zoomOut={true} />
                    </div>
                    <div className='h-40'>
                        <BentoCard src={goImgage} zoomOut={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stack;