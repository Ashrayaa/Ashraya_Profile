import React from "react";
// import "./Contact.css";
// import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";

type Props = {};

export default function Contact({}: Props) {
  const form = useRef();
  const [done, setDone] = useState(false);

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
    <div className="h-screen flex relative flex-col text-center max-w-[2000px] xl:px-10 min-h-screen justify-center gap-12 mx-auto items-center">
      <h3 className="lg:top-12 -mt-20 uppercase tracking-[20px] text-litepurple text-2xl">
        Contact Me
      </h3>

      <div >
        <form className="flex flex-col gap-8 items-center justify-center"
        //ref={form} onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_name"
            className="border p-2 w-72 rounded-xl border-litepurple "
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="border p-2 w-72 rounded-xl border-litepurple "
            placeholder="Email"
          />
          <textarea name="message" className="border p-2 w-72 rounded-xl border-litepurple " placeholder="Message" />
          <input type="submit" value="Send" className="border shadow-lg bg-red-600 text-white text-xl font-semibold rounded-2xl p-2 w-24 hover:text-litepurple hover:border-white hover:bg-white -mb-14" />
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
