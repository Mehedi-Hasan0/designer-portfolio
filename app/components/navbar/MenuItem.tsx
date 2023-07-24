"use client";

import { useState } from "react";

interface MenuItemProps {
  onClick?: () => void;
  label: string;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, isActive }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(true);
  };

  return (
    <div
      onClick={onClick}
      className={` ${
        isActive ? "flex flex-row items-center gap-2" : ""
      } text-lg font-medium cursor-pointer`}
    >
      {isActive ? <hr className=" bg-[#F64749] w-5 h-[2px]" /> : null}
      <p
        className={`${isActive ? "text-[#F64749]" : "text-[#141414]"}`}
        onClick={handleClicked}
      >
        {label}
      </p>
    </div>
  );
};

export default MenuItem;
