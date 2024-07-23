import React, { useEffect, useState } from "react";
import { FAQPOservice } from "../assets/data";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Title from "../ui/Title";

const Faqpo = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState(FAQPOservice);

  const filterService = (searchText, list) => {
    if (!searchText) return list;
    return list.filter(({ buttonName }) =>
      buttonName.toLowerCase().includes(search.toLowerCase())
    );
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredService = filterService(search, FAQPOservice);
      setData(filteredService);
    }, 300);
    return () => clearTimeout(debounce);
  }, [search]);
  return (
    <div className="flex justify-center items-center w-[100wh] my-10 ">
      <div className=" w-[270px] relative flex flex-col items-center">
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[120px] left-[-25px]"></div>
        <Title className={"mb-[25px]"}>FAQ ПО</Title>

        <form className="flex items-center w-[270px] h-[31px] bg-[#D9D9D9] rounded-2xl">
          <span className="bg-search bg-center bg-no-repeat bg-cover w-[24px] h-[20px] mx-3"></span>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-black mr-3"
            type="text"
            value={search}
          />
        </form>
        <div className="mt-8 flex flex-col gap-5">
          {data.map((el, i) => (
            <Button className={"w-[270px] px-3 py-3"} href={el.url} key={i}>
              {el.buttonName}
            </Button>
          ))}
          {!data.length && (
            <div className="text-main-white">Ничего не найдено </div>
          )}
          <Button back onClick={() => navigate(-1)}>
            вернуться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faqpo;
