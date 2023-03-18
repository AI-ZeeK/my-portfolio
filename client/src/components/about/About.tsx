import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutStyle from "../../styles/About.module.scss";

import { motion } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
import { fadeIn } from "@/utils/motion";
const aboutImage = "/avel.jpg";
const About = () => {
	return (
		<div id="about" className={`${aboutStyle.about_section}`}>
			<motion.div className={`${aboutStyle.about_head_box}`}>
				<h1 className={`${aboutStyle.about_head}`}>About</h1>
				<p className={`${aboutStyle.about_desc}`}>My Introduction</p>
			</motion.div>
			<motion.div
				variants={fadeIn("left", "tween", 0, 0.5)}
				whileInView="show"
				initial="hidden"
				viewport={{ once: false, amount: 0.05 }}
				className={`${aboutStyle.about_body_block}`}>
				<div className={`${aboutStyle.about_image}`}>
					<Image
						className={`${aboutStyle.img}`}
						width={860}
						height={860}
						alt="alternate"
						src={aboutImage}
					/>
				</div>
				<div className={`${aboutStyle.about_info_block}`}>
					<div className={`${aboutStyle.about_info_box}`}>
						<p>
							I am committed to delivering solutions that are not only
							functional and user-friendly, but also scalable and efficient.
							<br /> In addition to my technical skills, I am always eager to
							learn and explore new possibilities. I am dedicated to staying
							up-to-date with the latest trends and advancements in the
							industry, and I consistently research and grow my knowledge to
							deliver solutions that meet the needs of stakeholders.
						</p>
					</div>
					{/* <div className={`${aboutStyle.about_info_box}`}>
						<strong>1+</strong>
						<small>
							years <br />
							Experience
						</small>
					</div> */}
					<div className={`${aboutStyle.about_info_box}`}>
						<Link
							href="https://drive.google.com/file/d/1U67MM0Ts0aRkjLFCXDNLoSnZJkbf4ZY2/view?usp=drivesdk"
							download=""
							className={`${aboutStyle.btn_primary}`}>
							<span>Download CV</span>
							<HiOutlineDownload
								className={`text-[1.4rem] transition ${aboutStyle.icon}`}
							/>
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default About;
