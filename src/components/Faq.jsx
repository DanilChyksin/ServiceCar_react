import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Faq = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative flex flex-col items-center">
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[60px] left-[-25px]"></div>
        <div className="text-main-white text-[28px] text-center mb-[71px] font-bold">
          FAQ
        </div>
        <div className="flex flex-col gap-6">
          <Link
            to={`/faq/info`}
            className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-xl font-bold py-5 text-center text-main-white rounded-2xl h-[100px] cursor-pointer flex items-center justify-center"
          >
            FAQ СЕРВИС/
            <br />
            ИНФОРМАЦИЯ О<br /> МАШИНЕ
          </Link>
          <div className="flex gap-6 items-center w-full h-[100px]">
            <Link
              to={`/faq/po`}
              className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-center w-[124px] text-base font-bold py-5 text-main-white rounded-2xl h-full flex items-center justify-center cursor-pointer"
            >
              FAQ ПО
            </Link>
            <Link
              to={"/faq/wa"}
              className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-center w-[124px] text-base font-bold py-5 text-main-white rounded-2xl h-full flex items-center justify-center cursor-pointer"
            >
              FAQ MA,
              <br /> eSender,
              <br /> WeChat
            </Link>
          </div>
          <div className="mt-[87px] flex justify-end ">
            <div className="bg-bg flex items-center gap-2 px-2 pt-1 rounded-t-2xl cursor-pointer">
              <div className="bg-arrow w-[8px] h-[14px] bg-no-repeat bg-cover bg-center"></div>
              <Link to={`/`} className="font-bold text-main-white ">
                вернуться
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
