import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  className,
  link,
  onClick,
  big,
  center,
  submit,
  disabled,
  back,
  href,
  to,
}) => {
  return link ? (
    <Link
      to={link}
      onClick={() => onClick}
      className={`bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-2xl font-bold py-5  text-main-white rounded-2xl h-[100px] cursor-pointer  ${
        big ? "w-full" : "w-[124px] text-base"
      } ${
        center ? "flex justify-center items-center text-center" : ""
      } ${className}`}
    >
      {children}
    </Link>
  ) : submit ? (
    <button
      type="submit"
      disabled={disabled}
      className={` bg-[linear-gradient(45deg,_#264404_50%,_#396904_70%)] rounded-md py-1 px-2 hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] cursor-pointer ${className}`}
    >
      {children}
    </button>
  ) : back ? (
    <div className="mt-[34px] flex justify-end ">
      <div className="bg-bg flex items-center gap-2 px-2 pt-1 rounded-t-2xl cursor-pointer">
        <div className="bg-arrow w-[8px] h-[14px] bg-no-repeat bg-cover bg-center"></div>
        <Link
          className={`font-bold text-main-white ${className}`}
          onClick={onClick}
          to={to}
        >
          {children}
        </Link>
      </div>
    </div>
  ) : href ? (
    <button
      className={`  text-main-white text-base text-center font-bold bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] py-3 px-16 rounded-2xl ${className}`}
    >
      <a target="blank" href={href}>
        {children}
      </a>
    </button>
  ) : (
    <button
      className="flex text-main-white text-base text-center font-bold bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(90deg,_#264404_29%,_#396904_70%)] py-3 px-16 rounded-2xl mt-10"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
