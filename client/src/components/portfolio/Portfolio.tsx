import React from "react";
import serviceStyle from "../../styles/Service.module.scss";
import { motion } from "framer-motion";
import { projects } from "@/data/AppData";
import Image from "next/image";

const Portfolio = () => {
	return (
		<motion.section id="services" className={`${serviceStyle.service_section}`}>
			<motion.div className={`${serviceStyle.service_head_box}`}>
				<h1 className={`${serviceStyle.service_head}`}>Projects</h1>
				<p className={`${serviceStyle.service_desc}`}>Some of my projects</p>
			</motion.div>
			<div  className={serviceStyle.service_card_block}>
				{projects.map((item) => (
					<div key={item?.id} className={serviceStyle.portfolio_card}>
						<div>
							<Image width={500} height={500} src={item?.img} alt="ralt" />{" "}
						</div>
						<div  className={serviceStyle.portfolio_card_desc}>
						<div>
							<h3>{item.head} </h3>{" "}
						</div>
						<div>
							{item.stack.map((item2, index) => (
								<div key={index}>
									<Image width={50} height={50} src={item2} alt="ralt" />{" "}
								</div>
							))}{" "}
						</div>
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Portfolio;
