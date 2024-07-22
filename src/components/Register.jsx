import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../data";
import { useDispatch } from "react-redux";
import { addCityName } from "../salonSlice";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] mb-28 ">
      <div className=" w-[270px] relative">
        <div className="text-main-white text-[28px] text-center mb-7 font-bold">
          Запись на
          <br /> обслуживание
        </div>
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[90px] left-[-25px]"></div>
        <div className=" flex flex-col items-center gap-3 ">
          {data.city.map((el) => (
            <Link
              onClick={() => dispatch(addCityName(el.name))}
              key={el.id}
              to={`/register/${el.id}`}
              className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] text-[26px] font-bold py-[30px] w-full text-center text-main-white rounded-2xl cursor-pointer"
            >
              {el.name}
            </Link>
          ))}
        </div>
        <div className="mt-[87px] flex justify-end ">
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
}
