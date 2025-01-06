import React from 'react';
import Button from './Button';

const Body = () => {
  const handleButtonClick = () => {
    window.open('https://example.com', '_blank'); // todo add link to razorpay
  };

  return (
    <div className="flex items-center justify-center bg-black min-h-screen">
      <div className="text-center">
        <h1 className="font-bold text-5xl text-white lg:text-6xl md:text-3xl sm:text-5xl">
          Ship your Startup in hours<br /> not days
        </h1>
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
