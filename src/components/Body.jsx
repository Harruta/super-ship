import React, { useState } from 'react';
import Button from './Button';

const Body = () => {
  const [showPayment, setShowPayment] = useState(false);  // Manage visibility of the payment page

  const handleButtonClick = () => {
    setShowPayment(true); // Show the payment page when button is clicked
    
    // Scroll to the bottom to show the payment page
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',  // Smooth scroll animation
      });
    }, 100); // Adding a delay to ensure state update has occurred
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      <div className="text-center">
        <h1 className="font-bold text-5xl text-white lg:text-6xl md:text-3xl sm:text-5xl">
          Ship your Startup in hours<br /> not days
        </h1>
        <br />
        <h3 className='text-white'>
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

      {/* Conditionally render the payment page at the bottom */}
      {showPayment && (
        //<div className="mt-8 w-full bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-center">Payment Section</h2>
         // {/* Payment content goes here */}
        //</div>
      )}
    </div>
  );
};

export default Body;
