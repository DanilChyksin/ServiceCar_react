import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Title from "../ui/Title";

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
      <div className=" w-[270px] relative flex flex-col ">
        <Title>
          Поддержать
          <br /> проект💰
        </Title>
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[74px] left-[-22px]"></div>
        <div className="bg-card bg-no-repeat bg-cover bg-center w-[270px] h-[164px]"></div>
        <div className="flex justify-center items-center">
          <Button onClick={(e) => copyHandler(e)}>Скопировать 🔗</Button>
        </div>
        <Button back onClick={() => navigate(-1)}>
          вернуться
        </Button>
      </div>
    </div>
  );
};

export default Donat;
