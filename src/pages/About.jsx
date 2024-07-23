import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Title from "../ui/Title";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative flex flex-col items-center">
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[45px] left-[-25px]"></div>
        <Title>О нас 🚀</Title>

        <div className="bg-about w-[155px] h-[155px] mb-16"></div>
        <div className="flex flex-col gap-5">
          <Button href="https://t.me/lixiang_chat">Наш чат 💬</Button>
          <Button href="https://t.me/lixiang_chat">Задать вопрос ❓</Button>
          <Button back onClick={() => navigate(-1)}>
            вернуться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
