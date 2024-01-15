"use client";
import CheckOut from "../components/CheckOut";
import MobileOverlay from "../components/MobileOverlay";
// import MobileOverlay from './components/MobileOverlay'

export default function Home() {
  const handleClose = () => {
    // handle close logic
  };

  return (
    <div className="">
      <CheckOut />
      
      {/* <MobileOverlay onClose={handleClose}/> */}
    </div>
  );
}