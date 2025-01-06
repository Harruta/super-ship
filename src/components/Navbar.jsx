import React from 'react';
import rocketImage from '../assets/rocket.jpg';


const Navbar = () => {
  const navItems = ['Pricing','Stack', 'Leaderboards', 'Docs'];

  return (
    <nav className="flex items space-x-9 bg-black p-4">
        <div className='flex'>  
            <img
            src={rocketImage}
            alt ="logo"
            className='w-8 h-8 '
            />
            <span className='text xl font-bold text-white'>SuperShip</span>
        </div>
      {navItems.map((item, index) => (
        <a 
          key={index} 
          href={`#${item.toLowerCase()}`} 
          className="text-white hover:text-blue-500 transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
