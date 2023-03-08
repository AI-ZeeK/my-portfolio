import Head from "next/head";
import { Inter } from "@next/font/google";
import Navigation from "@/components/Nav/Navigation";
import Skills from "@/components/Skills/Skills";
import HomePage from "@/components/Home/Home";
import homeStyles from "../styles/Home.module.scss";
import Services from "../components/services/Services";
import Footer from "@/components/Footer";
import Contact from "../components/contact/Contact";
import About from "@/components/about/About";
import Portfolio from "@/components/portfolio/Portfolio";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { setNavObserveSelect } from "@/Redux-actions/AppSlice";
const inter = Inter({ subsets: ["latin"] });

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
					content="Isaac Tubonibo Iyaye-Williams FullStack Web3 Developer"
				/>
				<meta
					name="Keywords"
					content="Isaac, Tubonibo, Portfolio, Website, Full-stack, developer, full, stack, web3, React, Redux, Next, Next.js, Node.js, Nigerian, Programmer, Developer, Blockchain, Solidity, Front, Front-end, Frontend, Fullstack"
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
					<HomePage />
					<div className="line-through" />
					<About />
					<div className="line-through" />
					<Skills />
					// <div className="line-through" />
					// <Services />
					<div className="line-through" />
					<Portfolio />
					<div className="line-through" />
					<Contact />
				</main>
				<div className="line-through" />
				<Footer />
			</div>
		</>
	);
}
