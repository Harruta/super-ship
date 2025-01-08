import React from 'react';

const ProductDescription = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center text-xl md:text-2xl space-y-3">
        <p>4 hrs to set up emails</p>
        <p>+ 6 hrs designing a landing page</p>
        <p>+ 4 hrs to handle Stripe webhooks</p>
        <p>+ 2 hrs for SEO tags</p>
        <p>+ 1 hr applying for Google OAuth</p>
        <p>+ 3 hrs for DNS records</p>
        <p>+ 2 hrs for protected API routes</p>
        <p>+ ∞ hrs overthinking...</p>
        <br />
        <p className="font-bold text-2xl md:text-3xl">= 22+ hours of headaches ☁️</p>
      </div>
    </div>
  );
};

export default ProductDescription;
