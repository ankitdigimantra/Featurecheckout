import React from 'react';
import { useRouter } from 'next/router';

const Page1 = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/page2');
  };

  return (
    <div>
      <h1>Page 1</h1>
      <button className="flex text-sm bg-black cursor-pointer border rounded-md justify-center p-4" onClick={handleContinue}>
        <p className="text-white text-base">Continue </p>
        <div className="pt-1 pl-2">
          <FaArrowRightLong className="text-white" />
        </div>
      </button>
    </div>
  );
};

export default Page1;
