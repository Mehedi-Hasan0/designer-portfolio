"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src="/images/logo.png"
      width="43"
      height="20"
      alt="Logo"
      onClick={() => {
        router.push("/");
      }}
      className="cursor-pointer"
    />
  );
};

export default Logo;
