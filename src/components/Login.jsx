import React, { useState } from 'react';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Login = () => {
  const [value, setValue] = useState();
  const [isValid, setIsValid] = useState(true);

  const handlePhoneChange = (val) => {
    setValue();
    setIsValid(val);
  };

  return (
    <div>
      <div className="grid grid-row-3 justify-center pt-16">
        <div className="pb-6 flex justify-center">
          <h1 className="text-ex">Enter Mobile Number</h1>
        </div>
        <div>
          <div className="border border-black p-3 rounded-xl">
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={handlePhoneChange}
              className={`flex ${isValid ? '' : 'invalid-input'}`}
              style={{ outline: 'none' }}
              
            />
          </div>
          <input type="checkbox" id="orderUpdatesCheckbox" />
          <label htmlFor="orderUpdatesCheckbox" className="text-sm pl-1">
            Notify me for orders updates & offers
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
