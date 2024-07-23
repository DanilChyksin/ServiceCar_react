import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../assets/data";
import { useDispatch } from "react-redux";
import { addCityName } from "../assets/salonSlice";
import Button from "../ui/button/Button";
import Title from "../ui/Title";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] mb-28 ">
      <div className=" w-[270px] relative">
        <Title>
          Запись на
          <br /> обслуживание
        </Title>

        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[90px] left-[-25px]"></div>
        <div className=" flex flex-col items-center gap-3 ">
          {data.city.map((el) => (
            <Button
              big
              center
              key={el.id}
              onClick={dispatch(addCityName(el.name))}
              link={`/register/${el.id}`}
            >
              {el.name}
            </Button>
          ))}
        </div>
        <Button back onClick={() => navigate(-1)}>
          вернуться
        </Button>
      </div>
    </div>
  );
}
