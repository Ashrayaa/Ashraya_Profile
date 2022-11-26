import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Github from "../public/github.png";

type Props = {};

export default function Skill({}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        src={Github}
        alt="Image"
        className="rounded-full border border-gray-700 object-cover w-20 h-20 mx-6 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-44 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="lg:text-3xl text-xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
