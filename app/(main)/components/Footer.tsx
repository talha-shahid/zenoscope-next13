import Image from "next/image";
import React from "react";

//rect-icon imports
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" mt-10">
      <hr className="mb-5" />
      <div className="bottom-0 mx-3 flex items-center justify-between">
        <div>
          <Link className="flex gap-[6px] text-xl  items-center" href="/">
            <Image src={"/logo.png"} width={30} height={20} alt="logo" />
            <p className="text-white">ZENOSCOPE</p>
          </Link>
        </div>
        <div className="md:block hidden">
          <p>Copyright © 2022 - 2023 Zenoscope. All rights reserved.</p>
        </div>
        <div className="text-white md:text-2xl text-lg flex gap-5">
          <BsTwitter />
          <BsFacebook />
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
