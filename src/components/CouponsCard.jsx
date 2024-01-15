import React from 'react';
import { CiDiscount1 } from 'react-icons/ci';

const couponData = [
  {
    code: 'BG24',
    description: '2 free products will be added',
    offer: 'Buy 2 Get 2+2 Limited Edition Offer',
  },

  {
    code: 'ALPHA',
    description: '1 free products will be added',
    offer: 'Buy 1 Get 1+1 Limited Edition Offer',
  },
  // Add more coupon data objects as needed
];

const CouponsCard = ({ code, description, offer }) => {
  return (
    <div className='border-b p-2'>
      <button className='w-full'>
        <div className='grid grid-cols-2 p-2'>
          <div className='flex gap-3'>
            <div className='bg-gray-300 rounded-2xl '>
              <CiDiscount1 className='text-2xl' />
            </div>

            <button className="flex pl-2 pr-2 text-smm cursor-pointer border-2 border-dotted border-gray-500 rounded-md p-0">
              <p className='flex items-center justify-center'>{code}</p>
            </button>
          </div>
          <div className='items-right flex justify-end text-blue-800 font-semibold'>
            <h3 className=''>APPLY</h3>
          </div>
        </div>
        <div className=''>
          <p className='flex justify-start text-sm text-green-600'>{description}</p>
          <p className='flex justify-start text-sm text-gray-600'>{offer}</p>
        </div>
      </button>
    </div>
  );
};

const CouponsList = () => {
  return (
    <div>
      {couponData.map((coupon, index) => (
        <CouponsCard key={index} {...coupon} />
      ))}
    </div>
  );
};

export default CouponsList;
