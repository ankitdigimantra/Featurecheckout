import { useState } from 'react'
import MobileOverlay from './MobileOverlay';
import { RxCross2 } from "react-icons/rx";
import CouponsCard from './CouponsCard';




const ViewCoupons = ({ onClose }) => {

    const [closecoupon, setCloseCoupon] = useState(false);
    const [coupon, setCoupon] = useState(false);

    const handleCloseCoupon = () => {
        console.log("set coup")
        setCloseCoupon(false);
        onClose();
    };


    return (
        <div className=' bg-white rounded-lg p-2 '>
            <div className='grid grid-cols-2 pb-4'>
                <div className='flex w-full'>
                    Offers & Benefits
                </div>
                <div className='flex justify-end' onClick={handleCloseCoupon}>
                    <RxCross2
                        className="cursor-pointer rounded-3xl font-extrabold"
                        style={{ width: "26px", height: "26px" }}
                    />
                </div>
            </div>
            <div className='pb-2'>
                <input placeholder="Enter coupon code "
                    //   value={value}
                    //   onChange={setValue}
                className='border w-full rounded-md p-2' />
            </div>
            <div>
                <h2 className='p-2'>
                Available Offers
                </h2>
            </div>

            <CouponsCard/>





            {/* {closecoupon && <MobileOverlay onClose={() => setCloseCoupon(false)} />} */}
            {closecoupon && <MobileOverlay onClose={() => setCloseCoupon(false)} />}
        </div>
    )
}

export default ViewCoupons
