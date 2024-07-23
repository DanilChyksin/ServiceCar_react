import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import Button from "../ui/button/Button";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative">
        <div className="absolute bg-second_img bg-no-repeat bg-cover bg-center w-[320px] h-[127px] z-[-1] top-[100px] left-[-25px]" />
        <div className="flex flex-col gap-6">
          <Button center big link={ROUTES.REGISTER}>
            Запись на обсуживание
          </Button>
          <div className="flex gap-6 items-center w-full h-[100px]">
            <Button center link={ROUTES.DONAT}>
              Поддержать проект💰
            </Button>
            <Button center link={ROUTES.ABOUT}>
              О нас 🚀
            </Button>
          </div>
          <Button
            className={"flex items-center justify-center"}
            big
            center
            link={ROUTES.FAQ}
          >
            FAQ
          </Button>
        </div>
        <div className="flex items-center justify-center mt-[61px]">
          <div className="bg-logo bg-no-repeat bg-cover bg-center w-[184px] h-[74px] " />
        </div>
      </div>
    </div>
  );
};

export default Home;
