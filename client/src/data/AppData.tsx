import React from "react";
import { IoHome, IoHomeOutline, IoLocation } from "react-icons/io5";
import {
	HiUser,
	HiOutlineUser,
	HiWrenchScrewdriver,
	HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import {
	BsPhoneVibrate,
	BsPhoneVibrateFill,
	BsCodeSlash,
	BsPhoneFill,
	BsTools,
	BsFillMenuAppFill,
} from "react-icons/bs";
import { RiSuitcaseLine, RiSuitcaseFill } from "react-icons/ri";
import { AiOutlinePicture, AiFillPicture, AiTwotoneApi } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { IoIosContract } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";
import { BiLocationPlus, BiSearchAlt, BiTestTube } from "react-icons/bi";
import {
	MdOutlineDashboard,
	MdDashboard,
	MdOutlineAnimation,
	MdEmail,
	MdOutlineFlipToFront,
	MdOutlineFlipToBack,
} from "react-icons/md";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const css = "/css3.svg";
const nodejs = "/node-js.svg";
const nextjs = "/next.js.svg";
const solidity = "/solidity.svg";
const express = "/express-js.svg";
const typescript = "/typescript.svg";
const javascript = "/javascript.svg";
const react = "/react.svg";
const redux = "/redux.svg";
const git = "/git.svg";
const github = "/github.svg";
const graphql = "/graphql.svg";
const mongodb = "/mongodb.svg";
const postgresql = "/postgresql.svg";
const tailwindcss = "/tailwindcss.svg";
const html = "/html-5.svg";
const postman = "/postman.svg";
const sass = "/sass-1.svg";
const vscode = "/visual-studio-code-1.svg";
const hardhat = "/hardhat-icon.svg";
const metamask = "/metamask.svg";
const restapi = "/rest-api-icon.svg";
const googleanalytics = "/google-analytics.svg";
const bootstrap = "/bootstrap.svg";
const framer = "/framer.svg";
const materialui = "/material-ui.svg";
const word = "/word-1.svg";
const stripe = "/stripe-4.svg";
const ethers = "/download.png";
const jest = "/jest-2.svg";
const apolloGraphQl = "/apollo-graphql-1.svg";

export const NavData = [
	{
		id: "01006ff2",
		state: false,
		head: "Home",
		icon1: <IoHomeOutline />,
		icon2: <IoHome />,
	},
	{
		id: "5438c4f7",
		state: false,
		head: "About",
		icon1: <HiOutlineUser />,
		icon2: <HiUser />,
	},

	{
		id: "a8b49cc9",
		state: false,
		head: "Skills",
		icon1: <HiOutlineWrenchScrewdriver />,
		icon2: <HiWrenchScrewdriver />,
	},
	{
		id: "444cc3c4",
		state: false,
		head: "Services",
		icon1: <RiSuitcaseLine />,
		icon2: <RiSuitcaseFill />,
	},
	{
		id: "faa0d223",
		state: false,
		head: "Portfolio",
		icon1: <AiOutlinePicture />,
		icon2: <AiFillPicture />,
	},
	{
		id: "4b796c17",
		state: false,
		head: "Contact Me",
		icon1: <BsPhoneVibrate />,
		icon2: <BsPhoneVibrateFill />,
	},
];

export const TechStack = [
	{
		id: "2538b28d",
		state: false,
		icon3: <MdOutlineFlipToFront />,
		desc: "Frontend Development",
		icon1: <IoChevronUp />,
		icon2: <IoChevronDown />,
		stack: [
			{
				id: "f4a9624289d8",
				state: false,
				desc: "Javascript",
				img: javascript,
			},
			{
				id: "3259726fae1e",
				state: false,
				desc: "Typescript",
				img: typescript,
			},
			{
				id: "70193b4179d5",
				state: false,
				desc: "React",
				img: react,
			},
			{
				id: "ba6b55a98c09",
				state: false,
				desc: "Next",
				img: nextjs,
			},
			{
				id: "29c6a1620243",
				state: false,
				desc: "Redux",
				img: redux,
			},

			{
				id: "9a14ba727565",
				state: false,
				desc: "CSS3",
				img: css,
			},
			{
				id: "6fd5941dadcb",
				state: false,
				desc: "HTML5",
				img: html,
			},
			{
				id: "c2171d9cf9a3",
				state: false,
				desc: "Tailwind",
				img: tailwindcss,
			},

			{
				id: "58b833780bb5",
				state: false,
				desc: "SCSS",
				img: sass,
			},
			{
				id: "58b833780ghi",
				state: false,
				desc: "Bootstrap",
				img: bootstrap,
			},
			{
				id: "58b892680ghi",
				state: false,
				desc: "Material UI",
				img: materialui,
			},
			{
				id: "c2171d78j9a3",
				state: false,
				desc: "Framer Motion",
				img: framer,
			},
			{
				id: "Po171d78j9a3",
				state: false,
				desc: "Jest",
				img: jest,
			},
			{
				id: "Po17i978j9a3",
				state: false,
				desc: "Apollo Graphql",
				img: apolloGraphQl,
			},
		],
	},
	{
		id: "141a7f01",
		state: false,
		icon3: <MdOutlineFlipToBack />,
		desc: "Backend Development",
		icon1: <IoChevronUp />,
		icon2: <IoChevronDown />,
		stack: [
			{
				id: "f4a9620289d8",
				state: false,
				desc: "NodeJS",
				img: nodejs,
			},
			{
				id: "3259720fae1e",
				state: false,
				desc: "Expressjs",
				img: express,
			},
			{
				id: "70193b0179d5",
				state: false,
				desc: "MongoDB",
				img: mongodb,
			},
			{
				id: "ba6b50a98c09",
				state: false,
				desc: "PostgresQL",
				img: postgresql,
			},
			{
				id: "29c6a1020243",
				state: false,
				desc: "REST",
				img: restapi,
			},
			{
				id: "9a10ba727565",
				state: false,
				desc: "GraphQL",
				img: graphql,
			},
		],
	},
	{
		id: "588c2376",
		state: false,
		icon3: <SiHiveBlockchain />,
		desc: "Web3 Development",
		icon1: <IoChevronUp />,
		icon2: <IoChevronDown />,
		stack: [
			{
				id: "09f6f95555ab",
				state: false,
				desc: "Solidity",
				img: solidity,
			},
			{
				id: "00efc0dab94d",
				state: false,
				desc: "EthersJs",
				img: ethers,
			},
			{
				id: "1e0fb0c107f2",
				state: false,
				desc: "Hardhat",
				img: hardhat,
			},
			{
				id: "1e0fb5j107f2",
				state: false,
				desc: "Metamask",
				img: metamask,
			},
		],
	},
	{
		id: "588r2376",
		state: false,
		icon3: <BsTools />,
		desc: "Tools",
		icon1: <IoChevronUp />,
		icon2: <IoChevronDown />,

		stack: [
			{
				id: "09r6f95555ab",
				state: false,
				desc: "Git",
				img: git,
			},
			{
				id: "00ofc0dab94d",
				state: false,
				desc: "GitHub",
				img: github,
			},
			{
				id: "1e3fb0c107f2",
				state: false,
				desc: "Postman",
				img: postman,
			},
			{
				id: "1e0gb0c107f2",
				state: false,
				desc: "VsCode",
				img: vscode,
			},
			{
				id: "1e0gb067f07f2",
				state: false,
				desc: "Google Analytics",
				img: googleanalytics,
			},
			{
				id: "1e0gb069p07f2",
				state: false,
				desc: "MS Word",
				img: word,
			},
			{
				id: "1e0gb069p12f2",
				state: false,
				desc: "Stripe",
				img: stripe,
			},
			{
				id: "1e0gb0c10jd2",
				state: false,
				desc: "Remix IDE",
				img: "",
			},
		],
	},
];
export const BackendStack = [];
export const Web3Stack = [];
export const Principles = [
	{
		id: "04c35840",
		icon: <BsCodeSlash />,
		type: "Responsive Web Design",
		desc: "I specialize in creating websites that are optimized for all devices, including desktops, tablets, and smartphones.",
	},
	{
		id: "2dc8c719",
		icon: <GoBrowser />,
		type: "Cross-device compatibility",
		desc: "I Ensure that the website works seamlessly across different devices, including desktops, laptops, tablets, and smartphones.",
	},
	{
		id: "9dc8c719",
		icon: <BsTools />,
		type: "Maintenance and support",
		desc: "I Provide ongoing maintenance and support to ensure that the website continues to function well and meet the needs of the business and its users.",
	},
	{
		id: "1e76ea7b",
		icon: <AiTwotoneApi />,
		type: "Api Integration & Security",
		desc: `I am Familiar with API documentation and testing tools, such as Postman, to ensure API functionality and reliability, I also have the Ability to customize API integrations to meet the specific needs of clients and enhance the user experience.`,
	},
	{
		id: "1e76j77b",
		icon: <BiTestTube />,
		type: "Testing and optimization",
		desc: "I Conduct thorough testing and optimization to ensure that the website is functioning optimally on all devices and browsers",
	},
	{
		id: "f590f99d",
		icon: <BiSearchAlt />,
		type: "Search Engine Optimization",
		desc: "I conduct thorough research to identify relevant keywords that can improve website traffic and rankings",
	},
	{
		id: "c0b71a79",
		icon: <AiTwotoneApi />,
		type: "Restful Api Design",
		desc: "Proficiency in RESTful API design principles and experience working with various APIs, including social media, payment gateway, and e-commerce APIs.",
	},
	{
		id: "c0b71a79",
		icon: <MdOutlineAnimation />,
		type: "Advance Website Animations",
		desc: "I specialize in creating custom animations that enhance the user experience and make websites more engaging and visually appealing.",
	},
	{
		id: "4b33ah53",
		icon: <SiHiveBlockchain />,
		type: "Blockchain Integration",
		desc: "I Integrate blockchain technology into existing systems and applications to enhance their security, transparency, and efficiency.",
	},
	{
		id: "4k33a013",
		icon: <BsFillMenuAppFill />,
		type: "dApp Development",
		desc: "I Build dApps that leverage blockchain technology to provide secure, transparent, and tamper-proof solutions for various industries.",
	},
	{
		id: "4b33a043",
		icon: <IoIosContract />,
		type: "Smart Contract Development",
		desc: "I Create and deploy smart contracts on various blockchain platforms, such as Ethereum, Polkadot, and Solana.",
	},
];

export const contactMe = [
	{
		id: "01336ff2",
		head: "Mobile Number",
		desc: "(+234) 812-940-5476",
		icon: <BsPhoneFill />,
	},
	{
		id: "01226ff2",
		head: "Email Address",
		desc: "isaaciyaye174@gmail.com",
		icon: <MdEmail />,
	},
	{
		id: "01116ff2",
		head: "Location",
		desc: "Port-Harcourt ,Rivers State ,Nigeria",
		icon: <IoLocation />,
	},
];

export const projects = [
	{
		id: "1e3fb0c107f2",
		state: false,
		img: "/portfolio/proj13.jpeg",
		head: "Boutique Landing Page",
		weblink: null,
		githublink: "",
		stack: ["React", "Framer Motion", "CSS"],
	},
	{
		id: "1edg7b0c107f2",
		state: false,
		img: "/portfolio/Web3-transfer.png",
		head: "Web3 Transaction App",
		weblink: null,
		githublink: "",
		stack: [
			"React",
			"Tailwind CSS",
			"CSS",
			"Solidity",
			"Hardhat",
			"EthersJS",
			"Vite",
		],
	},
];
