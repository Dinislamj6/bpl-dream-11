import React from 'react';
import dollarImg from "../../assets/dollar-1.png"
import logo from "../../assets/logo.png"

const Navbar = ({coin}) => {
 
    return (
         <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
     
        <div className="flex-1">
           <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <button className="flex justify-between items-center gap-2 font-bold text-xl">
            {coin} Coins
            <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>
    );
};

export default Navbar;