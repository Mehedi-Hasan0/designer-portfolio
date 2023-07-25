"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import DropDownMenu from "./DropDownMenu";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <>
      <div className=" flex flex-row items-center gap-3 sm:gap-5 md:gap-7 lg:gap-10">
        <div className=" md:flex flex-row items-center gap-2 hidden">
          <p className=" text-sm md:text-base text-[#141414] underline">
            shikh001@gmail.com
          </p>
          <Image src="/icons/mail.svg" alt="email" width="18" height="18" />
        </div>
        <div
          onClick={toggleOpen}
          className="bg-[#F64749] rounded-full p-2 xl:p-3 cursor-pointer hover:shadow-lg"
        >
          <Image src="/icons/menubar.svg" width="24" height="24" alt="menu" />
        </div>
      </div>
      <div
        className={` absolute left-0 top-0 translate duration-500 w-full ${
          isOpen ? "translate-y-0" : " -translate-y-full"
        } ${isOpen ? "opacity-100" : " opacity-0"}`}
      >
        <DropDownMenu setIsOpen={toggleOpen} isOpen={isOpen} />
      </div>
    </>
  );
};

export default UserMenu;
