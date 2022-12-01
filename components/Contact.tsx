import React from "react";
// import "./Contact.css";
// import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";

type Props = {};

export default function Contact({}: Props) {
    const form = useRef();
    const [done, setDone] = useState(false)
  
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .sendForm(
    //       "service_0zfq10i",
    //       "template_j208suu",
    //       form.current,
    //       "YOUR_PUBLIC_KEY"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         setDone(true);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="lg:top-12 top-24 uppercase tracking-[20px] text-litepurple text-2xl">
        Contact Me
      </h3>

      <div>
      <form 
      //ref={form} onSubmit={sendEmail}
      >
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}
