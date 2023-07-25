"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";

interface DropDownMenu {
  isOpen?: boolean;
  setIsOpen?: () => void;
}

const DropDownMenu: React.FC<DropDownMenu> = ({ isOpen, setIsOpen }) => {
  const [showDropDown, setShowDropDown] = useState(isOpen);
  const [activeMenuItem, setActiveMenuItem] = useState("/");
  const router = useRouter();

  const handleMenuItemClick = (route: any) => {
    router.push(route);
    setActiveMenuItem(route); // Set the active menu item when a menu item is clicked
  };

  useEffect(() => {
    setShowDropDown(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className=" bg-[#FFFCFC] h-screen lg:h-[450px] border mx-auto xl:px-20 md:px-10 sm:px-2 px-4 shadow">
      {/* close button */}
      <div className="flex flex-row-reverse justify-between pt-8 lg:pt-10">
        <div
          className=" bg-[#BEBEBE] rounded-full p-2 md:p-3 cursor-pointer hover:shadow-md"
          onClick={setIsOpen}
        >
          <Image src="/icons/cross.svg" alt="close" width="20" height="20" />
        </div>
      </div>
      {/* dropdown container */}
      <div className=" flex flex-col md:flex-row md:justify-between gap-8 flex-1 md:gap-10 mt-6 lg:mt-12">
        {/* user */}
        <div className="flex flex-col items-center md:items-start gap-2 text-[#141414]">
          <div className=" flex flex-row items-center gap-3">
            <h2 className=" text-3xl md:text-xl lg:text-4xl font-semibold">
              Sheikh Ahmed
            </h2>
            <hr className="w-10 bg-[#F64749] h-[2px]" />
          </div>
          <p className="text-xl md:text-base lg:text-xl">Product Designer</p>
        </div>
        {/* menu item */}
        <div className=" flex flex-col items-center md:items-start gap-4">
          <div className=" flex flex-row items-center gap-2">
            <h6 className="text-[#AFAFAF] text-xl md:text-base lg:text-xl font-medium">
              Menu
            </h6>
            <hr className="w-5 bg-[#F64749] h-[2px]" />
          </div>
          <MenuItem
            label="Home"
            isActive={activeMenuItem === "/"}
            onClick={() => {
              handleMenuItemClick("/");
            }}
          />
          <MenuItem
            label="About"
            isActive={activeMenuItem === "/about"}
            onClick={() => {
              handleMenuItemClick("/about");
            }}
          />
          <MenuItem label="Work" />
          <MenuItem label="Get in touch" />
          <MenuItem label="Writing" />
        </div>
        {/* user info */}
        <div className=" flex flex-col">
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-row justify-center md:justify-end items-center gap-2">
              <p className=" text-base md:text-sm lg:text-base font-medium underline">
                shikh001@gmail.com
              </p>
              <Image
                src="/icons/email-red.svg"
                alt="email"
                width="18"
                height="18"
              />
            </div>
            <div className=" flex flex-row justify-center md:justify-end items-center gap-2">
              <p className="text-base md:text-sm lg:text-base font-medium">
                Download CV
              </p>
              <Image
                src="/icons/download.svg"
                alt="download"
                width="18"
                height="18"
              />
            </div>
            <div className=" mt-1 lg:mt-8 flex flex-row justify-center md:justify-end items-center gap-4">
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                width="20"
                height="20"
                className=" cursor-pointer"
              />
              <Image
                src="/icons/medium.svg"
                alt="meduim"
                width="24"
                height="24"
                className=" cursor-pointer"
              />
              <Image
                src="/icons/behance.svg"
                alt="behance"
                width="24"
                height="24"
                className=" cursor-pointer"
              />
              <Image
                src="/icons/instragram.svg"
                alt="instragram"
                width="20"
                height="20"
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
