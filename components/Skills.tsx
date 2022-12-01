import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import { Skill as SkillType } from "../typings";
// import Skill from "./Skill";
import Github from "../public/github.png";
import Gitlab from "../public/icons8-gitlab-480.png";
import Postman from "../public/postman-icon.webp";
import Tailwind from "../public/icons8-tailwind-css-480.png";
import Jira from "../public/icons8-jira-480.png";
import Html from "../public/html-5.png";
import Css from "../public/css-3.png";
import Js from "../public/java-script.png";
import Reactjs from "../public/react.png";





type Props = {
  //   skills: SkillType[];
  //   directionLeft?: boolean;
};

export default function Skills({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute lg:top-12 top-24 uppercase tracking-[20px] text-litepurple text-2xl">
        Skills
      </h3>

      <h3 className="absolute lg:top-24 top-32 uppercase tracking-[3px] text-litepurple text-sm">
        hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-3 gap-4 mt-20 lg:mt-32">
        

        <div className="group relative flex cursor-pointer">
          <Image
            src={Html}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                95%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Css}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                95%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Tailwind}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                95%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Js}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                75%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Reactjs}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                75%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Github}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Gitlab}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Jira}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                80%
              </p>
            </div>
          </div>
        </div>

        <div className="group relative flex cursor-pointer">
          <Image
            src={Postman}
            alt="Image"
            className="rounded-full object-cover w-20 h-20 mx-6 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-32 md:w-28 md:h-28 xl:w-40 xl:h-24 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="lg:text-2xl text-xl font-bold text-black opacity-100">
                60%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
