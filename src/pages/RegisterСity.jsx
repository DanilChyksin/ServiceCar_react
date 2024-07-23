import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../assets/data";
import { useDispatch } from "react-redux";
import { addSalonName } from "../assets/salonSlice";
import Button from "../ui/button/Button";
import Title from "../ui/Title";

export default function RegisterCity() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const filter = data.city.filter((el) => +el.id === +id);
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] ">
      <div className=" w-[270px] relative">
        <Title>
          Запись на <br /> обслуживание в<br /> городе {filter[0].name}
        </Title>

        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[120px] left-[-25px]"></div>
        <div className=" flex flex-col gap-5 ">
          {filter[0].salon.map((el) => (
            <Button
              className={"h-auto w-full px-2"}
              link={`/register/form/${el.id}`}
              key={el.id}
              onClick={dispatch(addSalonName(el.name))}
            >
              <div className="text-main-white text-[26px] font-bold pb-4 px-3 flex items-start">
                {el.name}
              </div>

              <div className="bg-bg px-3 py-2 rounded-2xl">
                <div className="text-main-white text-sm ">{el.description}</div>

                <div className="text-main-white text-base pt-3 flex items-start">
                  📍{el.address}
                </div>
              </div>
            </Button>
          ))}
        </div>
        <Button back onClick={() => navigate(-1)}>
          Вернуться
        </Button>
      </div>
    </div>
  );
}
