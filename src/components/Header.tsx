import React, { ReactNode } from "react";

interface headerProps {
  children: ReactNode;
  image?: string;
}

const Header: React.FC<headerProps> = ({ children, image }) => {
  return (
    <div className=" flex-col mt-[2rem] md:flex-row items-center md:w-[80%]  px-[2rem] overflow-x-hidden  rounded-lg w-[90%] bg-white text-black m-3 shadow-lg  md:mt-[2.4rem]  opacity-90 py-5  flex  ">
      <div className="font-bold flex-1 flex flex-col  items-center text-2xl md:text-4xl  order-2 md:items-start md:order-1">
        <p className="w-full mb-5 md:mb-0 md:w-3/4">{children}</p>
        <p className="text-sm text-gray-500 w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus possimus deserunt sunt temporibus?
        </p>
        <button className="font-medium self-start text-white  px-7 rounded-md bg-blue-800 cursor-pointer text-lg py-2 mt-3">
          Get Started
        </button>
      </div>
      <div className="order-1 flex flex-col w-full md:order-2 md:w-[50%]">
        <img
          src={image}
          alt=""
          className="w-[150px] h-[150px] self-start md:self-center mb-5 md:mb-0  md:w-[350px]  flex-1 md:h-[350px] object-fill"
        />
      </div>
    </div>
  );
};

export default Header;
