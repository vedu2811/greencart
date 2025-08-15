import React from "react";
import { assets } from "../assets/assets";

// Input Field Component
const inputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form
            onSubmit={onSubmitHandler}
            className="space-y-3 mt-6 text-sm"
          ></form>
        </div>
        <img
          src={assets.add_address_iamge}
          alt="address"
          className="md:mr-16 mb-16 md:mt-0"
        />
      </div>
    </div>
  );
};

export default AddAddress;
