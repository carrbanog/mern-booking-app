import React, { useContext } from "react";
import { FaAirbnb, FaSearch, FaUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  // console.log(user);
  return (
    <div>
      <div>
        <header className="flex justify-between">
          <Link to="/" className="flex items-center gap-1">
            <FaAirbnb className="w-8 h-8" />
            <span className="font-bold text-xl">airbnb</span>
          </Link>
          <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
            <div>Anywhere</div>
            <div className="border-l border-gray-300 "></div>
            <div>Any week</div>
            <div className="border-l border-gray-300 "></div>
            <div className="">Add guests</div>
            <button className="bg-[#F5385D] rounded-full text-white p-1">
              <FaSearch className="w-4, h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4">
            <div>
              <CiMenuBurger />
            </div>
            <Link
              to="/login"
              className="bg-gray-500 text-white rounded-full p-1 border border-gray-400 overflow-hidden flex items-center"
            >
              <FaUser />
              {!!user && <div>{user}</div>}
              
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
