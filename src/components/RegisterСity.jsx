import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../data";
import { useDispatch } from "react-redux";
import { addSalonName } from "../salonSlice";

export default function RegisterCity() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const filter = data.city.filter((el) => +el.id === +id);
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative">
        <div className="text-main-white text-[28px] text-center mb-7 font-bold">
          Запись на <br /> обслуживание в<br /> городе {filter[0].name}
        </div>
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[120px] left-[-25px]"></div>
        <div className=" flex flex-col items-center gap-3 ">
          <div className=" flex flex-col gap-5 ">
            {filter[0].salon.map((el) => (
              <Link
                className="bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)]   py-2 px-2 w-full rounded-2xl cursor-pointer"
                onClick={() => dispatch(addSalonName(el.name))}
                key={el.id}
                to={`/register/form/${el.id}`}
              >
                <div className="text-main-white text-[26px] font-bold pb-2">
                  {el.name}
                </div>
                <div className="bg-bg px-3 py-2 rounded-2xl">
                  <div className="text-main-white text-sm ">
                    {el.description}
                  </div>
                  <div className="text-main-white text-base pt-3">
                    📍{el.address}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-[34px] flex justify-end ">
          <div className="bg-bg flex items-center gap-2 px-2 pt-1 rounded-t-2xl cursor-pointer">
            <div className="bg-arrow w-[8px] h-[14px] bg-no-repeat bg-cover bg-center"></div>
            <button
              onClick={() => navigate(-1)}
              className="font-bold text-main-white"
            >
              вернуться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
