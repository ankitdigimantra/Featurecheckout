import { useFetch } from "use-fetch-react-vc";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useHistory } from 'react-router-dom';

import { fetchOptions } from "../app/constant";
import CheckOut from "./CheckOut";
import ItemsCard from "../components/Itemscard";
import ViewCoupons from "./ViewCoupons";

const OrderSummary = ({ onClose }) => {
  const [closeOverlay, setCloseOverlay] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [showcoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState(false); // Add this line

  const handleCloseOverlay = () => {
    setCloseOverlay(false);
    onClose(); // Call the onClose callback to notify the parent component
  };

  const handleCheckOut = () => {
    console.log("set coup")
    setShowCoupon(true);
  };

  const { data, error, loading } = useFetch("", fetchOptions);
  console.log(data);


  return (
    <div className="pb-6 pt-6 pr-4 w-[80%]">
      {showcoupon ? <ViewCoupons onClose={() => setShowCoupon(false)} />
    :
    <>
          <div className="bg-white rounded-xl p-2 ">
        <div className=" rounded-md p-1 cursor-pointer pb-4">
          <div className="flex items-center gap-2  ">
            <div>
              <BsCart3 />
            </div>
            <div className="text-s">Order Summary</div>
            <div>
              <FaAngleUp className="w-3" />
            </div>
          </div>
          <div className="flex pl-6 pb-1">
            <div className="bg-green-500 rounded-sm text-smmm text-white flex justify-center items-center gap-1 w-28">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1139/1139982.png"
                alt="logo"
                style={{ width: "10%", height: "60%" }}
              />
              <p className="">Free gift added</p>
            </div>
          </div>
        </div>

        {closeOverlay && <CheckOut onClose={() => setCloseOverlay(false)} />}

        <ItemsCard setSubtotal={setSubtotal} />
        <div className="text-s p-4 border-b ">
          <div className="grid grid-cols-2">
            <p>Subtotal</p>
            <p className="flex justify-end">₹ {subtotal}</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Shipping</p>
            <p className="flex justify-end">{shipping}</p>
          </div>
        </div>
        <div className="p-4 text-s font-semibold grid grid-cols-2">
          <h2>To Pay</h2>
          <p className="flex justify-end">₹ {subtotal + shipping}</p>
        </div>
      </div>

      <div className="pt-4 w-[70%]">
        <div className="bg-white rounded-xl p-3 ">
          <buttton className="grid grid-cols-2 text-smm cursor-pointer border-2 border-dotted border-gray-500 rounded-3xl  p-2" onClick={handleCheckOut}>
            <p>3 coupons available</p>
            <p className="font-semibold text-blue-900 flex justify-end">
              View Coupons
              <MdKeyboardArrowRight className="flex top-2 items-center justify-end" />
            </p>
          </buttton>
        </div>
      </div>
    </>  
    }


      
    </div>
  );
};

export default OrderSummary;