import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import shipImage from '../assets/ship.png';

const Body = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/payment'); 

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 100); 
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-black min-h-screen">
      {/* Background Image */}
      <img
        src={shipImage}
        alt="Ship Background"
        className="absolute top-1/2 w-3/4 max-w-[600px] opacity-50"
      />

      {/* Text Content */}
      <div className="relative text-center z-10">
        <h1 className="font-bold text-5xl text-white lg:text-6xl md:text-3xl sm:text-5xl">
          Ship your Startup in hours<br /> not days
        </h1>
        <br />
        <h3 className="text-white">
          The NextJS boilerplate with all you need to build your SaaS, AI tool, or<br />
          any other web app and make your first $ online fast.
        </h3>
        <div className="mt-6">
          <Button
            id="btn1"
            title="Start Now"
            onClick={handleButtonClick}
            containerClass="bg-white text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
