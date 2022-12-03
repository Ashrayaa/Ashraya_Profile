import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Profileimg1 from ".././public/ashrayaimage1.jpg";
import Link from "next/link";
// import Resume from "../assets/ASHRAYA_CV_2022.pdf";

type Props = {};

export default function About({}: Props) {
  return (
    // <motion.div
    //   initial={{
    //     opacity: 0,
    //   }}
    //   transition={{
    //     duration: 1.5,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //   }}
    //   className="flex flex-col mt-52 relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen"
    // >
    <div className="flex flex-col items-center justify-center gap-6 lg:mb-44">
      <h3 className="lg:mt-12 mt-36 uppercase tracking-[20px] text-onepurple text-2xl">
        About
      </h3>

      <button>
        <Link
          href="/resume"
          className="border border-litepurple bg-litepurple text-white text-sm font-semibold rounded-2xl p-4 hover:text-litepurple hover:bg-white -mb-14"
        >
          {" "}
          VIEW RESUME
        </Link>
      </button>

      {/* <motion.img
        initial={{
          x:200,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}

        className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      >
        {" "}
       
      </motion.img> */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-center lg:mt-12">
        <Image
          src={Profileimg1}
          alt="ashraya_image"
          className="flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-xl md:w-60 md:h-60 xl:w-[400px] xl:h-[400px] lg:-mr-32 lg:ml-48"
        />
        <div className="md:px-10 flex flex-col items-center justify-center gap-4 mx-6 lg:mx-32">
          <h4 className="lg:text-4xl text-2xl font-semibold">
            Here is a little background
          </h4>
          <div className="flex flex-col gap-2 justify-items-center justify-center mx-3">
            <p className="text-sm text-litepurple">
              I would like to introduce myself as an active front-end developer
              and software tester, passionate teacher, and ardent content
              writer. I worked as a software tester for past years after my
              post-graduation. I was teamed with the quality analysis
              environment which helped me in bringing a meticulous approach to
              the work. Through the journey, I was able to study the software
              product in detail and thus ensure that user expectations were met
              during the testing process. Working with a team also helped me in
              developing collaboration and social skills.
            </p>
            <p className="hidden lg:flex text-sm text-litepurple">
              I like to contribute my skills in the area of developing the front
              end too. I have extensive knowledge of technologies and tools
              associated with them. Above all, I have a strong ground-level
              knowledge of data structures and algorithms, database management
              systems, and software engineering.
            </p>
            <p className="hidden lg:flex text-sm text-litepurple">
              In addition, I&apos;m confident that I can think at the level of a
              software product manager and have a strong ground in developing
              user stories from the business requirements. Besides all of these,
              I love to teach students. Even from my school days, I love to take
              tuition for students below my age. I like the concept of sharing
              knowledge.
            </p>
            <p className="hidden lg:flex text-sm text-litepurple">
              Apart from that, I love reading books. These books could escalate
              you to the next level. Books like “Power of your subconscious
              mind” by Joseph Murphy and “ The monk who sold his Ferrari, “ by
              Robin Sharma fascinated me for a long time. And yes, I do invest
              my time in being with books.
            </p>
          </div>
        </div>
      </div>
    </div>

    // </motion.div>
  );
}
