import React from "react";

const Input = ({
  nameError,
  nameDirty,
  onBlur,
  onChange,
  className,
  type,
  value,
  required,
  name,
  title,
}) => {
  return required ? (
    <div className="flex flex-col">
      <span className="text-main-white font-bold text-base mb-2 ">{title}</span>
      <input
        onChange={onChange}
        onBlur={onBlur}
        className="w-[228px] bg-bg rounded-2xl p-1 border-solid border-[#396904] border hover:border-[#89c945] "
        type={type}
        name={name}
        value={value}
        required
      />
      {nameError && nameDirty && (
        <div className="text-red-600 text-sm">{nameError}</div>
      )}
    </div>
  ) : (
    <div className="flex flex-col gap-2 mb-3">
      <span className="text-main-white font-bold text-base ">Комментарий</span>
      <textarea
        onChange={onChange}
        className="w-[228px] h-[127px] bg-bg rounded-2xl p-2  border-solid border-[#396904] border hover:border-[#89c945] text-main-white"
        name={name}
        id={name}
        value={value}
      ></textarea>
    </div>
  );
};

export default Input;
