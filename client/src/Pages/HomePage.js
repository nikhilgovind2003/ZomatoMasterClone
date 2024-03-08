import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";




const HomePage = () => {
  return (
    <div>
      <section>
        <div className=" w-full  h-[60vh] relative">
          <img
            className=" w-full h-full object-cover"
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            alt="bg"
          />
        </div>
        <section className="absolute lg:top-24  top-44 text-white w-full">
          <div className=" text-center flex flex-col lg:gap-12 items-center my-4 justify-center text-white">
            <div className=" w-44 lg:w-64">
              <img
                className=" w-full h-full"
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt="logo"
              />
            </div>
            <p className=" lg:text-2xl">Discover the best food & drinks in Kochi</p>
          </div>

          <div className=" text-black container mx-auto px-4">
            <Link className=" my-4 bg-white h-10 flex justify-between px-4 rounded-lg items-center w-full">
              <div className="flex items-center gap-4">
                <IoLocationSharp className=" text-red-500" />
                <p>Kochi</p>
              </div>
              <div className=" text-gray-500">
                <FaCaretDown />
              </div>
            </Link>
           
            <Link className=" my-4 bg-white h-10 flex gap-4 justify-between px-4 rounded-lg items-center w-full">
            <CiSearch className=" text-gray-500" />
            <input type="text" className=" w-full" />
            </Link>
           
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
