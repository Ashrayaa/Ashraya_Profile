import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Profileimg1 from ".././public/ashrayaimage1.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col mt-52 relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen"
    >
      <h3 className="top-24 absolute uppercase tracking-[20px] text-onepurple text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: 200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rpunded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      >
        {" "}
        <Image src={Profileimg1} alt="ashraya_image" className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rpunded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"/>
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span
          // className="underline decoration-[#F7AB0A]/50"
          >
            little{" "}
          </span>
          background
        </h4>
        <p className="text-base text-litepurple ">
          I would like to introduce myself as an active software tester and
          front-end developer, passionate teacher, and ardent content writer. I
          worked as a software tester for the past year after my
          post-graduation. In my previous project, I was teamed with the quality
          analysis environment which helped me in bringing a meticulous approach
          to the work. Through the journey, I was able to study the software
          product in detail and thus ensure that user expectations were met
          during the testing process. Working with a team also helped me in
          developing collaboration and social skills. I like to contribute my
          skills in the area of developing the front end too. I have extensive
          knowledge of technologies and tools associated with them. Above all, I
          have a strong ground-level knowledge of data structures and
          algorithms, database management systems, and software engineering. In
          addition, I&apos;m confident that I can think at the level of a
          software product manager and have a strong ground in developing user
          stories from the business requirements. Besides all of these, I love
          to teach students. Even from my school days, I love to take tuition
          for students below my age. I like the concept of sharing knowledge.
          Apart from that, I love reading books. These books could escalate you
          to the next level. Books like “Power of your subconscious mind” by
          Joseph Murphy and “ The monk who sold his Ferrari, “ by Robin Sharma
          fascinated me for a long time. And yes, I do invest my time in being
          with books.
        </p>
      </div>
    </motion.div>
  );
}
