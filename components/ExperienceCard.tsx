import React from "react";
import Image from "next/image";
import Profileimg1 from ".././public/ashrayaimage1.jpg";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/* image */}
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={Profileimg1}
          alt="ashraya_image"
          className="rounded-full h-32 w-32 mx-auto object-cover object-center xl:h-[200px] xl:w-[200px]"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">SOFTWARE TEST ENGINEER</h4>
        <p className="font-bold text-2xl mt-1">IIA</p>
        <div className="flex space-x-2 my-2">
          <Image
            src={Profileimg1}
            alt="ashraya_image"
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={Profileimg1}
            alt="ashraya_image"
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={Profileimg1}
            alt="ashraya_image"
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={Profileimg1}
            alt="ashraya_image"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work.. - Ended..</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li></li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
