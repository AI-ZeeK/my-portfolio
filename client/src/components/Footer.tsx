import Image from "next/image";
import footerStyle from "../styles/Footer.module.scss";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { motion } from "framer-motion";
import {
	fadeIn,
	footerVariants,
	planetVariants,
	staggerContainer,
} from "@/utils/motion";

const AiZeekLogo = "/AiZeek.png";
const Footer = () => {
	return (
		<footer className={footerStyle.footer}>
			<motion.div className={footerStyle.footer_top}>
				<div className={footerStyle.footer_top_head}>
					<motion.div
						variants={fadeIn("left", "tween", 0, 1)}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}
						className={footerStyle.footer_top_image}>
						<Image
							className={footerStyle.img}
							width={200}
							height={200}
							src={AiZeekLogo}
							alt="alt"
						/>
					</motion.div>
					<motion.div
						variants={fadeIn("right", "tween", 0, 1)}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}
						className={footerStyle.footer_top_info}>
						<h1>Isaac Williams</h1>
						<p>FullStack Developer</p>
						<p>Blockchain Developer</p>
					</motion.div>
				</div>

				<motion.ul
					variants={staggerContainer}
					whileInView="show"
					initial="hidden"
					viewport={{ once: false, amount: 0.25 }}
					className={footerStyle.footer_top_links}>
					<motion.li
						variants={fadeIn("left", "tween", 0, 1)}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}>
						Services
					</motion.li>
					<motion.li
						variants={fadeIn("left", "tween", 0, 1)}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}>
						Portfolio
					</motion.li>
					<motion.li
						variants={fadeIn("left", "tween", 0, 1)}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}>
						Services
					</motion.li>
					<motion.li
						variants={fadeIn("left", "tween", 0, 1)}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}>
						Blog
					</motion.li>
				</motion.ul>
				<motion.ul
					variants={staggerContainer}
					whileInView="show"
					initial="hidden"
					viewport={{ once: false, amount: 0.25 }}
					className={footerStyle.footer_top_socials}>
					<motion.li
						variants={planetVariants("right")}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}>
						<CiLinkedin />
					</motion.li>
					<motion.li
						variants={planetVariants("right")}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}>
						<AiFillGithub />
					</motion.li>
					<motion.li
						variants={planetVariants("right")}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}>
						<CiFacebook />
					</motion.li>
					<motion.li
						variants={planetVariants("right")}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}>
						<AiOutlineTwitter />
					</motion.li>
				</motion.ul>
			</motion.div>
			<motion.div
				variants={footerVariants}
				whileInView="show"
				initial="hidden"
				viewport={{ once: false, amount: 0.25 }}
				className={footerStyle.footer_bottom}>
				<span>&copy; Isaac Tubonibo</span>
				<strong>All rights reserved</strong>
			</motion.div>
			<div className={footerStyle.bord_box}></div>
			<div className={footerStyle.bord_box_b}></div>
		</footer>
	);
};

export default Footer;
