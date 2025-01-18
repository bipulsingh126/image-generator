import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center my-20  ">
      <div className=" text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500  ">
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className=" text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center ">
        Turn text to <span className="text-[#6583d5] ">image</span>, in seconds{" "}
      </h1>
      <p className=" text-gray-600 mt-5 text-center max-w-xl mx-auto ">
        {" "}
        Unless Your creativity with AI. Turn your text into stunning visuals art
        in seconds - just type, and watch the magic happen{" "}
      </p>
      <button className="sm:text-lg text-white bg-black w-auto mt-8 py-2.5 px-4 flex items-center gap-2 rounded-full shadow-md shadow-black/20 hover:shadow-black/30 transition-all duration-500 font-semibold tracking-wide">
        {" "}
        Generate Images <img
          className="h-6"
          src={assets.star_group}
          alt=""
        />{" "}
      </button>

      <div className=" flex items-center justify-center gap-3 mt-16 ">
        {Array(6)
          .fill("")
          .map((item, index) => {
            return (
              <img
                className="w-1/6 rounded shadow-lg shadow-black/50  cursor-pointer duration-300 max-sm:w-10 hover:scale-105 transition-all "
                key={index}
                width={70}
                src={
                  index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2
                }
                alt=""
              />
            );
          })}
      </div>
      <p className=" mt-2 text-neutral-600 "> Generate images with Imagify</p>
    </div>
  );
};

export default Header;
