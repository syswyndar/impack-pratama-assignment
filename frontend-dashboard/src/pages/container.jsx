import React from "react";
import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <div className="grid grid-cols-6 h-screen">
        <div className="h-full bg-white border-r-2 border-gray-200">
          <SideBar />
        </div>
        <div className="col-span-5 h-full">
          <div className="w-full h-20 border-b-2 border-gray-200">
            <Navbar />
          </div>
          <div className="bg-slate-100 p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
