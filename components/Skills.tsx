import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import Skill from "./Skill";

type Props = {
  directionLeft?: boolean;
};

export default function Skills({ directionLeft }: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute lg:top-12 top-24 uppercase tracking-[20px] text-litepurple text-2xl">
        Skills
      </h3>

      <h3 className="absolute lg:top-24 top-32 uppercase tracking-[3px] text-litepurple text-sm">hover over a skill for currency profieciency</h3>

      <div className="grid grid-cols-3 gap-4 mt-20 lg:mt-32">
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        
      </div>
    </div>
  );
}
