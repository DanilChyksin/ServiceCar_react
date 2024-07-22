import React, { useEffect, useState } from "react";

import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../routes/routes";

export default function RegisterForm() {
  const { city, salon } = useSelector(({ salon }) => salon);
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [tel, setTel] = useState();
  const [model, setModel] = useState();
  const [date, setDate] = useState();
  const [comment, setComment] = useState();
  const [nameDirty, setNameDirty] = useState(false);
  const [telDirty, setTelDirty] = useState(false);
  const [modelDirty, setModelDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [nameError, setNameError] = useState("Введите имя");
  const [telError, setTelError] = useState("Введите телефон");
  const [modelError, setModelError] = useState("Введите модель автомобиля");
  const [dateError, setDateError] = useState("Введите желаемую дату");
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (nameError || telError || modelError || dateError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, telError, modelError, dateError]);

  const nameHandler = (e) => {
    setUserName(e.target.value);
    if (e.target.value.length > 4) setNameError("");
  };
  const modelHandler = (e) => {
    setModel(e.target.value);
    if (e.target.value.length > 3) {
      setModelError("");
    } else {
      setModelError("Введите модель автомобиля");
    }
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
    if (e.target.value.length > 10) {
      setDateError("");
    } else {
      setDateError("Введите желаемую дату");
    }
  };
  const commentHandler = (e) => {
    setComment(e.target.value);
  };
  const telHandler = (e) => {
    setTel(e.target.value);
    const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if (!re.test(e.target.value)) {
      setTelError("Некорректный номер телефона");
    } else {
      setTelError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTES.THANKS);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setTelDirty(true);
        break;
      case "model":
        setModelDirty(true);
        break;
      case "date":
        setDateDirty(true);
        break;
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100wh] mt-32 mb-32">
      <div className=" w-[270px] relative">
        <div className="text-main-white text-[28px] text-center mb-7 font-bold">
          Запись на <br /> обслуживание в<br /> городе {city} в<br /> {salon}
        </div>
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[120px] left-[-25px]"></div>
        <div className="bg-[linear-gradient(90deg,_#264404_29%,_#396904_100%)] py-7 rounded-2xl">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-3 items-center"
          >
            <div className="flex flex-col">
              <span className="text-main-white font-bold text-base mb-2 ">
                Ваше имя
              </span>
              <input
                onChange={(e) => nameHandler(e)}
                onBlur={(e) => blurHandler(e)}
                className="w-[228px] bg-bg rounded-2xl p-1 border-solid border-[#396904] border hover:border-[#89c945] "
                type="text"
                name="name"
                value={userName}
                required
              />
              {nameError && nameDirty && (
                <div className="text-red-600 text-sm">{nameError}</div>
              )}
            </div>
            <div className="flex flex-col ">
              <span className="text-main-white font-bold text-base mb-2 ">
                Номер телефона
              </span>
              <input
                onChange={(e) => telHandler(e)}
                onBlur={(e) => blurHandler(e)}
                className="w-[228px] bg-bg rounded-2xl p-1 border-solid border-[#396904] border hover:border-[#89c945]  "
                type="number"
                name="phone"
                value={tel}
                required
              />
              {telError && telDirty && (
                <div className="text-red-600 text-sm">{telError}</div>
              )}
            </div>
            <div className="  flex flex-col">
              <span className="text-main-white font-bold text-base mb-2 ">
                Модель автомобиля
              </span>
              <input
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => modelHandler(e)}
                className="w-[228px] bg-bg rounded-2xl p-1 border-solid border-[#396904] border hover:border-[#89c945] "
                type="text"
                name="model"
                value={model}
                required
              />
              {modelError && modelDirty && (
                <div className="text-red-600 text-sm ">{modelError}</div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-main-white font-bold text-base mb-2 ">
                Дата и время
                <br />
                01.12.24 13.00
              </span>
              <input
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => dateHandler(e)}
                className="w-[228px] bg-bg rounded-2xl p-1  border-solid border-[#396904] border hover:border-[#89c945] "
                type="text"
                name="date"
                value={date}
                required
              />
              {dateError && dateDirty && (
                <div className="text-red-600 text-sm">{dateError}</div>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <span className="text-main-white font-bold text-base ">
                Комментарий
              </span>
              <textarea
                onChange={(e) => commentHandler(e)}
                className="w-[228px] h-[127px] bg-bg rounded-2xl p-1  border-solid border-[#396904] border hover:border-[#89c945] text-main-white"
                placeholder=""
                name="comment"
                id="comment"
                value={comment}
              ></textarea>
            </div>
            <button
              className=" bg-[linear-gradient(45deg,_#264404_50%,_#396904_70%)] rounded-md py-1 px-2 hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] cursor-pointer"
              disabled={!formValid}
              type="submit"
            >
              Отправить
            </button>
          </form>
        </div>

        <div className="mt-[34px] flex justify-end ">
          <div className="bg-bg flex items-center gap-2 px-2 pt-1 rounded-t-2xl cursor-pointer">
            <div className="bg-arrow w-[8px] h-[14px] bg-no-repeat bg-cover bg-center"></div>
            <Link
              onClick={() => navigate(-1)}
              className="font-bold text-main-white "
            >
              вернуться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
