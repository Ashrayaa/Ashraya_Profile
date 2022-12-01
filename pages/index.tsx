import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import type { NextPage } from "next";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
// import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-scroll z-0 h-screen text-[#DA1919]">
      <Head>
        <title>Ashraya&apos;s Portfolio</title>
        <meta name="Portfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header 
      // socials={socials}
      />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero 
        // pageInfo={pageInfo}
        />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About 
        // pageInfo={pageInfo}
        />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience 
        // experiences={experiences}
        />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start mt-24">
        <Skills/>
      </section>

      {/* Projects */}
      {/* <section id="projects" className="snap-start">
        <Projects/>
      </section> */}

      {/* Contact Me */}
      <section id="contactme" className="snap-start mt-24">
        <Contact/>
      </section>
    </div>
  );
}
