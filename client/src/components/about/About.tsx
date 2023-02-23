import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutStyle from "../../styles/About.module.scss";

import { motion } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
const aboutImage = "/avel.jpg";
const About = () => {
	return (
		<div id="about" className={`${aboutStyle.about_section}`}>
			<motion.div className={`${aboutStyle.about_head_box}`}>
				<h1 className={`${aboutStyle.about_head}`}>About</h1>
				<p className={`${aboutStyle.about_desc}`}>My Introduction</p>
			</motion.div>
			<motion.div className={`${aboutStyle.about_body_block}`}>
				<div className={`${aboutStyle.about_image}`}>
					<Image
						className={`${aboutStyle.img}`}
						width={200}
						height={200}
						alt="alternate"
						src={aboutImage}
					/>
				</div>
				<div  className={`${aboutStyle.about_info_block}`}>
					<div className={`${aboutStyle.about_info_box}`}>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Doloremque dolor voluptate ea dolorem aliquid modi placeat
							deleniti repudiandae praesentium mollitia.{" "}
						</p>
					</div>
					<div className={`${aboutStyle.about_info_box}`}>
						<strong>1+</strong>
						<small>years <br />
						Experience</small>
					</div>
					<div className={`${aboutStyle.about_info_box}`}>
						<Link href="" download="" className={`${aboutStyle.btn_primary}`}>
							<span>Download CV</span>
							<HiOutlineDownload 	className={`text-[1.4rem] transition ${aboutStyle.icon}`} /> 
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default About;
