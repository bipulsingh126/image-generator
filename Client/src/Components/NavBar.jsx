import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const NavBar = () => {
const {user} = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-4 ">
      <Link to="/">
        <img
          src={assets.logo}
          alt=" Imagify "
          className="w-28 sm:w-32 lg:w-40 "
        />{" "}
      </Link>
      <div>
        {user ? (
          <div className="flex item-center gap-2 sm:gap-3 ">
            <button onClick={()=>navigate('/buy-credit') } className=" flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700   ">
              <img src={assets.credit_star} className="w-5" alt=" credit " />
              <p className=" text-xs sm:text-sm  font-medium text-gray-600 ">
                Credits left : 50
              </p>
            </button>
            <p className=" text-gray-600 max-sm:hidden pl-4 ">Hi, Riyansh </p>
            <div className="relative group ">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-10 drop-shadow"
              />
              <div className=" absolute hidden group-hover:block top-0 rght-0 z-10 text-black rounded pt-12 ">
                <ul className=" list-none m-0 p-2 bg-white rounded-md border text-sm  ">
                  <li className=" py-1 px-2 cursor-pointer pr-10 ">Logout </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 sm:gap-5 ">
            <p
              onClick={() => navigate("/buy-credit")}
              className="cursor-pointer "
            >
              Pricing
            </p>
            <button className="bg-zinc-800 text-white py-2 px-10 sm:py-2 text-sm rounded-full ">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
