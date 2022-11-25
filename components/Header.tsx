import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 bg-red-100 h-24 lg:bg-transparent bg-opacity-75">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5
        }}
        className="flex flex-row items-center gap-2 p-4"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/ashrayakk/"
          fgColor="crimson"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Ashrayaa"
          fgColor="crimson"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/aashrayadev?igshid=YmMyMTA2M2Y="
          fgColor="crimson"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/ashraya.deva?mibextid=ZbWKwL"
          fgColor="crimson"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://medium.com/@mailtoashrayaa"
          fgColor="crimson"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
              x:0,
              opacity:1,
              scale:1
          }}
          transition={{
              duration:1.5
          }}
           className="hidden lg:inline-flex lg:justify-center lg:items-center">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="crimson"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex">Get In Touch</p>
      </motion.div>
    </header>
  );
}
