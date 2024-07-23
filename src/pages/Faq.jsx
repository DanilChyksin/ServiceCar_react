import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Title from "../ui/Title";

const Faq = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative flex flex-col items-center">
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[60px] left-[-25px]"></div>
        <Title className={"mb-[71px]"}>FAQ</Title>
        <div className="flex flex-col gap-6">
          <Button className={"text-xl"} center big link="/faq/info">
            FAQ СЕРВИС/
            <br />
            ИНФОРМАЦИЯ О<br /> МАШИНЕ
          </Button>
          <div className="flex gap-6 items-center w-full h-[100px]">
            <Button center link="/faq/po">
              FAQ ПО
            </Button>
            <Button center link="/faq/wa">
              FAQ MA,
              <br /> eSender,
              <br /> WeChat
            </Button>
          </div>
          <Button back onClick={() => navigate(-1)}>
            вернуться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
