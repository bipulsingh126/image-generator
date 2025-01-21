import React from "react";
import { assets } from "../assets/assets";

const Loing = () => {
  return (
    <div className=" absolute top-8 left-0 right-0 bottom-0  z-10 backdrop:blur-sm bg-black/30 flex justify-center items-center ">
      <form className=" relative bg-white p-10 rounded-xl text-slate-500 ">
        <h1 className=" text-center text-2xl text-neutral-700 font-medium ">
          Sign Up
        </h1>
        <p className=" text-center text-sm">
          Welcome back! please sign in to continue{" "}
        </p>
        <div className=" border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
          <img width={30} src={assets.profile_icon} alt="" />
          <input
            className=" outline-none text-sm "
            type="text"
            placeholder="Full Name"
            required
          />
        </div>
        <div className=" border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
          <img width={30} src={assets.email_icon} alt="" />
          <input
            className=" outline-none text-sm "
            type="Email"
            placeholder="Email"
            required
          />
        </div>
        <div className=" border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
          <img width={20} src={assets.lock_icon} alt="" />
          <input
            className=" outline-none text-sm "
            type="Password"
            placeholder="Password"
            required
          />
        </div>
        <p className=" text-sm text-blue-600 my-4 cursor-pointer ">
          Forgot Password{" "}
        </p>
        <button className=" bg-blue-600 w-full text-sm text-white py-2.5 px-4 rounded-full hover:scale-105 transition-all duration-300 ">
          Create Account{" "}
        </button>
      </form>
    </div>
  );
};

export default Loing;
