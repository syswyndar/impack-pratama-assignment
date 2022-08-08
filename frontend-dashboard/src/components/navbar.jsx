import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center px-10">
        <div className="w-2/3">
          <input
            type="text"
            placeholder="search..."
            className="w-full px-3 py-2 rounded-md bg-slate-100"
          />
        </div>

        <div className="flex flex-row-reverse gap-5">
          <div className="h-8 w-8 rounded-full bg-slate-500"></div>
          <div className="align-center text-slate-700 flex justify-center items-center">
            <FontAwesomeIcon className="text-xl" icon={faBell} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
