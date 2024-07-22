import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative">
        <div className="absolute bg-second_img bg-no-repeat bg-cover bg-center w-[320px] h-[127px] z-[-1] top-[100px] left-[-25px]"></div>
        <div className="flex flex-col gap-6">
          <Link
            to={`/register`}
            className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-2xl font-bold py-5 text-center text-main-white rounded-2xl h-[100px] cursor-pointer"
          >
            Запись на обсуживание
          </Link>
          <div className="flex gap-6 items-center w-full h-[100px]">
            <Link
              to={`/donat`}
              className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-center w-[124px] text-base font-bold py-5 text-main-white rounded-2xl h-full flex items-center justify-center cursor-pointer"
            >
              Поддержать проект💰
            </Link>
            <Link
              to={`/about`}
              className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-center w-[124px] text-base font-bold py-5 text-main-white rounded-2xl h-full flex items-center justify-center cursor-pointer"
            >
              О нас 🚀
            </Link>
          </div>
          <Link
            to={`/faq`}
            className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-2xl font-bold py-5 text-center text-main-white rounded-2xl h-[100px] flex items-center justify-center cursor-pointer"
          >
            FAQ
          </Link>
        </div>
        <div className="flex items-center justify-center mt-[61px]">
          <div className="bg-logo bg-no-repeat bg-cover bg-center w-[184px] h-[74px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
