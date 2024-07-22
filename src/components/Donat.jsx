import React from "react";
import { useNavigate } from "react-router-dom";

const Donat = () => {
  const navigate = useNavigate();
  const copyHandler = (e) => {
    navigator.clipboard
      .writeText("2200 2404 0981 6317")
      .then(() => console.log("Done!"))
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative flex flex-col items-center">
        <div className="text-main-white text-[28px] text-center mb-7 font-bold">
          Поддержать
          <br /> проект💰
        </div>
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[74px] left-[-22px]"></div>
        <div className="bg-card bg-no-repeat bg-cover bg-center w-[270px] h-[164px]"></div>
        <div className="flex justify-center items-center">
          <button
            onClick={(e) => copyHandler(e)}
            className="flex text-main-white text-base text-center font-bold bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(90deg,_#264404_29%,_#396904_70%)] py-3 px-16 rounded-2xl mt-10"
          >
            Скопировать 🔗
          </button>
        </div>
        <div className="mt-[87px] flex justify-end  w-full">
          <div className="bg-bg flex items-center gap-2 px-2 pt-1 rounded-t-2xl cursor-pointer">
            <div className="bg-arrow w-[8px] h-[14px] bg-no-repeat bg-cover bg-center"></div>
            <button
              onClick={() => navigate(-1)}
              className="font-bold text-main-white "
            >
              вернуться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donat;
