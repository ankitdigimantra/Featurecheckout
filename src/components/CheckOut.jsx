'use client'
import React, { useState } from 'react';
import MobileOverlay from './MobileOverlay';

const CheckOut = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCheckOut = () => {
    setShowOverlay(true);
  };

  return (
    <div>
      <div>
        <div
          className="border w-[7%] cursor-pointer bg-blue-500 text-white pt-1 pb-1 pl-2 pr-2 rounded-md"
          onClick={handleCheckOut}
        >
          Check Out
        </div>
      </div>

      {showOverlay && <MobileOverlay onClose={() => setShowOverlay(false)} />}
    </div>
  );
};

export default CheckOut;