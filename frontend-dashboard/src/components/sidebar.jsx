import React from "react";
import logo from "../assets/logo-impack-pratama-industri.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCubes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="w-full h-full">
        <div
          id="logo"
          className="h-20 flex items-center gap-1 px-5 border-b-2 border-gray-200"
        >
          <img src={logo} alt="" className="h-10 w-auto" />
          <span className="text-lg font-semibold italic text-slate-600">
            Impact Pratama
          </span>
        </div>
        <div className="flex flex-col gap-3 py-8 px-5">
          {/* <Link to="/">
            <div className="flex gap-3 text-slate-600 items-center hover:cursor-pointer">
              <FontAwesomeIcon className="text-lg" icon={faHome} />
              <span className="font-semibold">Home</span>
            </div>
          </Link> */}

          <Link to="/products">
            <div className="flex gap-3 text-slate-600 items-center hover:cursor-pointer">
              <FontAwesomeIcon className="text-lg" icon={faCubes} />
              <span className="font-semibold">Product</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
