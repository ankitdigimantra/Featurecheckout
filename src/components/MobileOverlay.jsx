import { useState } from "react";
import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import CheckOut from "./CheckOut";
// import Items from './ItemsCard';
import { FaArrowRightLong } from "react-icons/fa6";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OrderSumary from "./OrderSummary";

const MobileOverlay = ({ onClose }) => {
  const [closeOverlay, setCloseOverlay] = useState(false);

  // const handleCheckOut = () => {
  //   setCloseOverlay(true);
  // };

  const handleCloseOverlay = () => {
    setCloseOverlay(false);
    onClose(); // Call the onClose callback to notify the parent component
  };

  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10 flex items-center justify-center  space-x-2`}
    >
      {/* Overlay */}
      <div className="bg-gray-100 rounded-2xl  space-x-4 lg:w-[65%] ss:w-[85%] md:w-[90%] flex">
        <div className="p-4 bg-white rounded-l-2xl w-[65%] ">
          <div className="justify-between p-3 border-b border-gray-200">
            <div className="grid grid-cols-2">
              <div>
                <img
                  src="https://digimantralabs.com/wp-content/uploads/2023/06/dml-logo1.png"
                  alt="logo"
                  style={{ width: "40%", height: "100%" }}
                  className="h-12 cursor-pointer top-3 bottom-3"
                />
              </div>
            </div>
            <div className="grid grid-cols-3  pt-4">
              <div className="flex items-center gap-2">
                <Bs1Circle style={{ width: "12%", height: "100%" }} />
                <p className="text-s">Mobile</p>
              </div>
              <div className="flex items-center gap-2">
                <Bs2Circle style={{ width: "12%", height: "100%" }} />
                <p className="text-s">Address</p>
              </div>
              <div className="flex items-center gap-2">
                <Bs3Circle style={{ width: "12%", height: "100%" }} />
                <p className="text-s">Payment</p>
              </div>
            </div>
          </div>
          <div className="grid grid-row-3  justify-center pt-16 pb-4">
            <div className="pb-6 flex  justify-center">
              <h1 className="text-ex ">Enter Mobile Number</h1>
            </div>
            <div>
              <div className="border border-black p-3 rounded-xl">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  className="flex "
                />
              </div>
              <input type="checkbox" id="orderUpdatesCheckbox" />
              <label for="orderUpdatesCheckbox" className="text-sm pl-1">
                Notify me for orders updates & offers
              </label>
              <div className="pt-6">
                <buttton className="flex text-sm bg-black cursor-pointer border rounded-md justify-center p-4 ">
                  <p className="text-white text-base">Continue </p>
                  <div className="pt-1 pl-2">
                    <FaArrowRightLong className="text-white" />
                  </div>
                </buttton>
              </div>
            </div>
            <p className="text-smmm flex justify-center pt-2 text-gray-400">
              By proceeding, I accept that I have read and
              <br />
              understood the Gokwik's Privacy Policy and T&C
            </p>
          </div>
          <footer className="grid grid-cols-3 items-center ">
            <div className="text-smmmm text-gray-400">
              T&C | Privacy | fc5e4e13
            </div>
            <div className="flex size-[65%]">
              <img
                src="https://pdp.gokwik.co/assets/icons/pci-dss.svg"
                width={400}
              />
              <img
                src="https://pdp.gokwik.co/assets/icons/secured-payments.svg"
                width={400}
              />
              <img
                src="https://pdp.gokwik.co/assets/icons/verified-merchant.svg"
                width={400}
              />
            </div>
            <div className="">
              <div className="justify-end flex">
                <p className="justify-end flex text-smmmm">Powered By</p>
                <img
                  src="https://digimantralabs.com/wp-content/uploads/2023/06/dml-logo1.png"
                  alt="logo"
                  width={400}
                  style={{ width: "20%", height: "100%" }}
                  className="justify-end flex  cursor-pointer top-3 bottom-3 "
                />
              </div>
            </div>
          </footer>
        </div>

        <div className="flex">
          <OrderSumary />
        </div>
        <div
          className="h-[10%] overflow z-20 bg-gray-100 p-2 rounded-3xl"
          onClick={handleCloseOverlay}
        >
          <RxCross2
            className="cursor-pointer flex rounded-3xl bg-gray-300 text-white font-extrabold"
            style={{ width: "26px", height: "26px" }}
          />
        </div>
      </div>

      {/* <Items /> */}

      {closeOverlay && <CheckOut onClose={() => setCloseOverlay(false)} />}
    </div>
  );
};

export default MobileOverlay;