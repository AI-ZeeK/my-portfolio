import Link from "next/link";
import serviceStyle from "../../styles/Service.module.scss";
import { motion } from "framer-motion";
import { projects } from "@/data/AppData";
import Image from "next/image";

const Portfolio = () => {
	return (
		<motion.section
			id="portfolio"
			className={`${serviceStyle.service_section}`}>
			<motion.div className={`${serviceStyle.service_head_box}`}>
				<h1 className={`${serviceStyle.service_head}`}>Projects</h1>
				<p className={`${serviceStyle.service_desc}`}>Some of my projects</p>
			</motion.div>
			<div className={serviceStyle.service_card_block}>
				{projects.map((item) => (
					<div key={item?.id}  className={serviceStyle.portfolio} >
						<div className={serviceStyle.portfolio_card}>
							<div className={serviceStyle.portfolio_card_img_box}>
								<Image
									className={serviceStyle.portfolio_card_img}
									width={500}
									height={500}
									src={item?.img}
									alt="ralt"
								/>{" "}
							</div>
							<div className={serviceStyle.portfolio_card_desc}>
								<div className={serviceStyle.portfolio_card_box}>
									<div className={serviceStyle.card_desc_head}>
										<span>{item.head}</span>

										<div className={serviceStyle.line_through} />
									</div>
									<div className={serviceStyle.tech_used_box}>
										<small>tech used</small>
										<div className={serviceStyle.tech_used}>
											{item.stack.map((item2, index) => (
												<div key={index}>{item2}</div>
											))}
										</div>
									</div>
									<div className={serviceStyle.btn_link_box}>
										{item.weblink && (
											<Link className={serviceStyle.btn_link} href={item.weblink}>
												Demo
											</Link>
										)}
										<Link
											className={serviceStyle.btn_link}
											href={item.githublink}>
											GitHub
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={serviceStyle.portfolio_desc}>
							{item?.desc}
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Portfolio;
