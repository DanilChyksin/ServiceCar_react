import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] mt-32">
      <div className=" w-[270px] relative">
        <div className="text-main-white text-[28px] text-center mb-7 font-bold">
          Запись на <br /> обслуживание в<br /> городе Москва в<br /> Фастар
        </div>
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[120px] left-[-25px]"></div>
        <div className="bg-[linear-gradient(90deg,_#264404_29%,_#396904_100%)] py-8 rounded-2xl">
          <div className="text-center text-[28px] text-main-white font-bold">
            ✅<br />
            Спасибо,
            <br /> информация отправлена в<br /> сервис!
          </div>
        </div>

        <div className="mt-[34px] flex justify-end ">
          <div className="bg-bg flex items-center gap-2 px-2 pt-1 rounded-t-2xl cursor-pointer">
            <div className="bg-arrow w-[8px] h-[14px] bg-no-repeat bg-cover bg-center"></div>
            <Link to={"/"} className="font-bold text-main-white ">
              вернуться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
