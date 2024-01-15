import React, { useState } from 'react';
import { Bs1Circle, Bs2Circle, Bs3Circle } from 'react-icons/bs'; 
import { FaArrowRightLong } from "react-icons/fa6";
import PhoneInput from "react-phone-number-input";
import { useRouter } from 'next/navigation';

const Page1 = () => {
const router = useRouter();
  const [value, setValue] = useState(); 
  const handleContinue = () => {
    router.push('/Page2');
  };

  return (
    <div>
      <div className="grid grid-row-3 justify-center pt-16 pb-4">
        <div className="pb-6 flex justify-center">
          <h1 className="text-ex">Enter Mobile Number</h1>
        </div>
        <div>
          <div className="border border-black p-3 rounded-xl">
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              className="flex"
            />
          </div>
          <input type="checkbox" id="orderUpdatesCheckbox" />
          <label htmlFor="orderUpdatesCheckbox" className="text-sm pl-1">
            Notify me for orders updates & offers
          </label>
          <div className="pt-6">
            <button className="flex text-sm bg-black cursor-pointer border rounded-md justify-center p-4" onClick={handleContinue}>
              <p className="text-white text-base">Continue </p>
              <div className="pt-1 pl-2">
                <FaArrowRightLong className="text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
