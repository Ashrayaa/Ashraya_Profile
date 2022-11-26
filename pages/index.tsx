import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import type { NextPage } from "next";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-scroll z-0 h-screen text-[#DA1919]">
      <Head>
        <title>Ashraya&apos;s Portfolio</title>
        <meta name="Portfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
