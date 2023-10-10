import Head from "next/head";
import {Inter} from "@next/font/google";
import Navigation from "@/components/Nav/Navigation";
import Skills from "@/components/Skills/Skills";
import HomePage from "@/components/Home/Home";
import homeStyles from "../styles/Home.module.scss";
import Services from "../components/services/Services";
import Footer from "@/components/Footer";
import Contact from "../components/contact/Contact";
import About from "@/components/about/About";
import Portfolio from "@/components/portfolio/Portfolio";
import {useEffect, useMemo, useRef} from "react";
import {useDispatch} from "react-redux";
import {setNavObserveSelect} from "@/Redux-actions/AppSlice";
const inter = Inter({subsets: ["latin"]});

export default function Home() {
  // if (currentTarget) observer.observe(currentTarget);
  // return () => {
  //   if (currentTarget) observer.observe(currentTarget);
  // };
  return (
    <>
      <Head>
        <title>| Isaacs Portfolio</title>
        <meta
          name="description"
          content="Isaac Tubonibo Iyaye-Williams FullStack Web Developer"
        />
        <meta
          name="Keywords"
          content="Isaac, Isaac Williams, Isaac Tubonibo, Isaac Iyaye Williams, Isaac Iyaye-Williams, Developers in NIgeria, Developers in West Africa, Developers in Africa, Developers Near Me, Isaac Tubonibo Williams,  Tubonibo, Portfolio, Website, Full-stack, developer, full, stack, web3, React, Redux, Next, Next.js, Node.js, Nigerian, Programmer, Developer, Blockchain, Solidity, Front, Front-end, Frontend, Fullstack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/AiZeek.png" />
      </Head>
      <div>
        <header>
          <Navigation />
        </header>
        <main className={homeStyles.main}>
          <div id="home">
            <HomePage />
          </div>
          <div className="line-through" />
          <div id="about">
            <About />
          </div>
          <div className="line-through" />
          <div id="skills">
            <Skills />
          </div>
          {/*  <div className="line-through" />
					// <Services /> */}
          <div className="line-through" />
          <div id="portfolio">
            <Portfolio />
          </div>
          <div className="line-through" />
          <div id="contact-me">
            <Contact />
          </div>
        </main>
        <div className="line-through" />
        <Footer />
      </div>
    </>
  );
}
