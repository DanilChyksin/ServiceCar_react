import React from "react";

const Title = ({ children, className }) => {
  return (
    <div
      className={`text-main-white text-[28px] text-center mb-7 font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export default Title;
