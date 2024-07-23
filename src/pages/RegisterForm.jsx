import React, { useEffect, useState } from "react";

import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../routes/routes";
import Button from "../ui/button/Button";
import Title from "../ui/Title";
import Input from "../ui/input/Input";

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
        <Title className={"text-[23px]"}>
          Запись на
          <br />
          обслуживание в<br />
          городе {city} в {salon}
        </Title>
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[120px] left-[-25px]"></div>
        <div className="bg-[linear-gradient(90deg,_#264404_29%,_#396904_100%)] py-7 rounded-2xl">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-3 items-center"
          >
            <Input
              type={"text"}
              name={"name"}
              value={userName}
              required
              nameError={nameError}
              nameDirty={nameDirty}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => nameHandler(e)}
              title={"Ваше имя"}
            />
            <Input
              type={"number"}
              name={"phone"}
              value={tel}
              required
              nameError={telError}
              nameDirty={telDirty}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => telHandler(e)}
              title={"Номер телефона"}
            />
            <Input
              type={"text"}
              name={"model"}
              value={model}
              required
              nameError={modelError}
              nameDirty={modelDirty}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => modelHandler(e)}
              title={"Модель автомобиля"}
            />
            <Input
              type={"text"}
              name={"date"}
              value={date}
              required
              nameError={dateError}
              nameDirty={dateDirty}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => dateHandler(e)}
              title={`Дата и время 01.12.24 13.00`}
            />
            <Input
              name={"comment"}
              value={comment}
              onChange={(e) => commentHandler(e)}
            ></Input>
            <Button submit disabled={!formValid}>
              Отправить
            </Button>
          </form>
        </div>
        <Button back onClick={() => navigate(-1)}>
          Вернуться
        </Button>
      </div>
    </div>
  );
}
