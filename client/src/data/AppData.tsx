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
} from "react-icons/bs";
import { RiSuitcaseLine, RiSuitcaseFill } from "react-icons/ri";
import { AiOutlinePicture, AiFillPicture, AiTwotoneApi } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { IoIosContract } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";
import { BiLocationPlus, BiSearchAlt } from "react-icons/bi";
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
const restapi = "/rest-api-icon.svg";
const ethers = "/download.png";

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
		head: "Service",
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
	},
	{
		id: "2dc8c719",
		icon: <GoBrowser />,
		type: "Cross Browser Functionality",
	},
	{
		id: "1e76ea7b",
		icon: <AiTwotoneApi />,
		type: "Api Integration & Security",
	},
	{
		id: "f590f99d",
		icon: <BiSearchAlt />,
		type: "Search Engine Optimization",
	},
	{
		id: "c0b71a79",
		icon: <AiTwotoneApi />,

		type: "Restful Api Design",
	},
	{
		id: "c0b71a79",
		icon: <MdOutlineAnimation />,
		type: "Advance Website Animations",
	},
	{
		id: "4b33a043",
		icon: <SiHiveBlockchain />,
		type: "Blockchain Development",
	},

	{
		id: "4b33a043",
		icon: <IoIosContract />,
		type: "Smart Contract Development",
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
