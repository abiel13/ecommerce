import React, { useState } from "react";
import {
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full relative p-3 px-3 flex justify-between items-center">
      <div className="text-4xl font-bold text-blue-500 ">
        <span className="text-white">A</span>sale
      </div>
      <div className="hidden md:flex items-center gap-5">
        <button className="px-7 py-2 bg-white rounded-lg font-bold text-blue-500 transition hover:opacity-75">
          login
        </button>
        <button className="px-7 py-2 bg-blue-500 rounded-lg font-bold text-white transition hover:opacity-75">
          signUp
        </button>
      </div>
      <div className="flex md:hidden">
        <AiOutlineBars
          onClick={() => setVisible(true)}
          className="text-white text-2xl font-bold"
        />
        <div
          className={`${
            visible ? "flex" : "hidden"
          } bg-white shadow-lg absolute p-5 rounded-lg right-7 animate  -bottom-[8rem] transition  z-40 items-start   flex-col w-[150px]`}
        >
          <div className="rounded-full self-end w-5 h-5 flex items-center justify-center bg-red-500">
            <AiOutlineClose
              onClick={() => setVisible(false)}
              className=" text-white  font-bold  "
            />
          </div>
          <button className="font-bold py-1 text-blue-500">Login</button>
          <button className="font-bold py-1">Sign Up</button>
          <p className="font-bold flex items-center text-gray-700">
            <AiOutlineShoppingCart />
            Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
