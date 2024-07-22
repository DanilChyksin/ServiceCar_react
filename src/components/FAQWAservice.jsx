import React, { useEffect, useState } from "react";
import { FAQWAservice } from "../data";
import { Link, useNavigate } from "react-router-dom";

const Faqwa = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState(FAQWAservice);

  const filterService = (searchText, list) => {
    if (!searchText) return list;
    return list.filter(({ buttonName }) =>
      buttonName.toLowerCase().includes(search.toLowerCase())
    );
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredService = filterService(search, FAQWAservice);
      setData(filteredService);
    }, 300);
    return () => clearTimeout(debounce);
  }, [search]);
  return (
    <div className="flex justify-center items-center w-[100wh] my-10 ">
      <div className=" w-[270px] relative flex flex-col items-center">
        <div className="absolute bg-bg_img bg-no-repeat bg-cover bg-center w-[320px] h-[239px] z-[-1] top-[120px] left-[-25px]"></div>
        <div className="text-main-white text-[28px] text-center mb-[25px] font-bold">
          FAQ СЕРВИС/
          <br />
          ИНФОРМАЦИЯ О<br /> МАШИНЕ
        </div>
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
          {" "}
          {data.map((el, i) => (
            <button
              key={i}
              className="w-[270px] text-main-white text-base text-center font-bold bg-[linear-gradient(45deg,_#264404_29%,_#396904_100%)] hover:bg-[linear-gradient(45deg,_#264404_29%,_#396904_70%)] py-3 px-3 rounded-2xl "
            >
              {" "}
              <a target="blank" href={el.url}>
                {el.buttonName}
              </a>
            </button>
          ))}
          {!data.length && (
            <div className="text-main-white">Ничего не найдено </div>
          )}
          <div className="mt-[34px] flex justify-end ">
            <div className="bg-bg flex items-center gap-2 px-2 pt-1 rounded-t-2xl cursor-pointer">
              <div className="bg-arrow w-[8px] h-[14px] bg-no-repeat bg-cover bg-center"></div>
              <Link to="/faq" className="font-bold text-main-white ">
                вернуться
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqwa;
