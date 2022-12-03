import React from "react";
import { motion } from "framer-motion";
// import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
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
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto top-24 items-center"
    >
      <h3 className="uppercase  mb-6 px-4 tracking-[20px] text-onepurple text-2xl">
        Experience
      </h3>
      {/* <h3 className="lg:-mt-12 mt-36 uppercase tracking-[20px] text-onepurple text-2xl">
        EXPERIENCE
      </h3> */}
    

      <div className="w-full -mt-12 xl:-mt-0 2xl:-mt-24 md:-mt-80 flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory">
        {/* Experience 1 */}
        <article className="flex flex-col border rounded-xl items-center space-y-5 flex-shrink-0 w-[320px] h-[600px]  md:w-[600px] md:h-[585px] snap-center bg-[#0a0909] text-white p-4 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <div className="p-2 md:px-10">
            <h4 className="text-xl font-light">SOFTWARE TEST ENGINEER</h4>
            <p className="font-bold text-base lg:text-2xl mt-1">
              Innovation Incubator Advisory | Trivandrum
            </p>

            <p className="uppercase py-5 text-gray-300">Aug 2022 - Present</p>

            <ul className="list-disc space-y-2 ml-5 text-sm  mx-4">
              <li>
                {" "}
                Developed Test Plans, Test Cases and Test Scenarios from
                business requirements.
              </li>

              <li>
                {" "}
                Actively involved in software testing and documentation,
                analysis of the business requirements and functional
                specifications.{" "}
              </li>
              <li>
                {" "}
                Quality Assurance and Manual, Functional Testing of Web
                applications and mobile applications developed in web, mobile
                using Agile/ Scrum test methodologies.
              </li>

              <li>
                {" "}
                Directed junior software testers from preparing test case
                document to the submission of release note.
              </li>
            </ul>
          </div>
        </article>

        {/* Experience 2 */}
        <article className="flex flex-col border rounded-xl items-center space-y-5 flex-shrink-0 w-[320px] h-[600px]  md:w-[600px] md:h-[585px] snap-center bg-[#0a0909] text-white p-4 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <div className="p-2 md:px-10">
            <h4 className="text-xl font-light">QA ENGINEER</h4>
            <p className="font-bold text-base lg:text-2xl mt-1">
              Vspace Networks DMCC | UAE
            </p>

            <p className="uppercase py-5 text-gray-300">Nov 2021 - July 2022</p>

            <ul className="list-disc space-y-2 ml-5 text-sm  mx-4">
              <li>
                {" "}
                Quality Assurance and Manual, Functional Testing of Web
                applications and mobile applications developed in web, mobile
                using Agile/ Scrum test methodologies.
              </li>

              <li>
                {" "}
                Developed Test Plans, Test Cases and Test Scenarios from
                business requirements.
              </li>

              <li>
                {" "}
                Actively involved in software testing and documentation,
                analysis of the business requirements and functional
                specifications.{" "}
              </li>
            </ul>
          </div>
        </article>
        {/* Experience 3 */}
        <article className="flex flex-col border rounded-xl items-center space-y-5 flex-shrink-0 w-[320px] h-[600px]  md:w-[600px] md:h-[585px] snap-center bg-[#0a0909] text-white p-4 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <div className="p-2 md:px-10">
            <h4 className="text-xl font-light">QA ENGINEER TRAINEE</h4>
            <p className="font-bold text-base lg:text-2xl mt-1">
              Innovation Incubator Advisory | Trivandrum
            </p>

            <p className="uppercase py-5 text-gray-300">July 2021 - Oct 2021</p>

            <ul className="list-disc space-y-2 ml-5 text-sm mx-4">
              <li>
                Working as a part of the team in developing test plans, test
                cases and test scenarios from business requirements.
              </li>

              <li>
                {" "}
                Actively involved in software testing and documentation,
                analysis of the business requirements and functional
                specifications.{" "}
              </li>

              <li>
                Ensured the quality of the web applications and mobile
                applications on iOS and android platforms.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
}
