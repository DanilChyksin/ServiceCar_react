import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../ui/Title";
import { useSelector } from "react-redux";
import Button from "../ui/button/Button";

const Thanks = () => {
  const navigate = useNavigate();
  const { city, salon } = useSelector(({ salon }) => salon);
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh]">
      <div className=" w-[270px] relative">
        <Title>
          Запись на <br /> обслуживание в<br /> городе {city} в<br /> {salon}
        </Title>

        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[120px] left-[-25px]"></div>
        <div className="bg-[linear-gradient(90deg,_#264404_29%,_#396904_100%)] py-8 rounded-2xl">
          <Title className={"mb-0"}>
            ✅<br />
            Спасибо,
            <br /> информация отправлена в<br /> сервис!
          </Title>
        </div>
        <Button back to={"/"}>
          вернуться
        </Button>
      </div>
    </div>
  );
};

export default Thanks;
