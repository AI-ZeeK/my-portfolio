import React from "react";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import {
	HiUser,
	HiOutlineUser,
	HiWrenchScrewdriver,
	HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { BsPhoneVibrate, BsPhoneVibrateFill } from "react-icons/bs";
import { RiSuitcaseLine, RiSuitcaseFill } from "react-icons/ri";
import { AiOutlinePicture, AiFillPicture } from "react-icons/ai";
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
const css = "/icons8-css3.svg";
const nodejs = "/icons8-node-js.svg";
const nextjs = "/icons8-next.js.svg";
const solidity = "/solidity.svg";
const express = "/icons8-express-js.svg";
const typescript = "/icons8-typescript.svg";
const javascript = "/icons8-javascript.svg";

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
		desc: "Frontend Developement",
		stack: [
			{
				id: "f4a9624289d8",
				state: false,
				desc: "Javascript",
				img: "",
			},
			{
				id: "3259726fae1e",
				state: false,
				desc: "Typescript",
				img: "",
			},
			{
				id: "70193b4179d5",
				state: false,
				desc: "React",
				img: "",
			},
			{
				id: "ba6b55a98c09",
				state: false,
				desc: "Next",
				img: "",
			},
			{
				id: "29c6a1620243",
				state: false,
				desc: "Redux",
				img: "",
			},

			{
				id: "9a14ba727565",
				state: false,
				desc: "CSS3",
				img: "",
			},
			{
				id: "6fd5941dadcb",
				state: false,
				desc: "HTML5",
				img: "",
			},
			{
				id: "c2171d9cf9a3",
				state: false,
				desc: "Tailwind CSS",
				img: "",
			},
			{
				id: "58b833780bb5",
				state: false,
				desc: "SCSS",
				img: "",
			},
		],
	},
	{
		id: "141a7f01",
		state: false,
		desc: "Backend Developement",
		stack: [
			{
				id: "f4a9620289d8",
				state: false,
				desc: "NodeJS",
				img: "",
			},
			{
				id: "3259720fae1e",
				state: false,
				desc: "Expressjs",
				img: "",
			},
			{
				id: "70193b0179d5",
				state: false,
				desc: "MongoDB",
				img: "",
			},
			{
				id: "ba6b50a98c09",
				state: false,
				desc: "PostgresQL",
				img: "",
			},
			{
				id: "29c6a1020243",
				state: false,
				desc: "REST API's",
				img: "",
			},

			{
				id: "9a10ba727565",
				state: false,
				desc: "GraphQL",
				img: "",
			},
		],
	},
];
export const BackendStack = [];
export const Web3Stack = [];
export const Principles = [];
