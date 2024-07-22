import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative flex flex-col items-center">
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[45px] left-[-25px]"></div>
        <div className="text-main-white text-[28px] text-center mb-7 font-bold">
          О нас 🚀
        </div>
        <div className="bg-about w-[155px] h-[155px] mb-16"></div>
        <div className="flex flex-col gap-5 items-center ">
          <button className=" w-full  text-main-white text-base text-center font-bold bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] py-3 px-16 rounded-2xl ">
            {" "}
            <a target="blank" href="https://t.me/lixiang_chat">
              Наш чат 💬{" "}
            </a>
          </button>
          <button className="w-full text-main-white text-base text-center font-bold bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] py-3 px-16 rounded-2xl ">
            {" "}
            <a target="blank" href="https://t.me/lixiang_chat">
              Задать вопрос ❓
            </a>
          </button>
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
    </div>
  );
};

export default About;
