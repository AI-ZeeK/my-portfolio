import contactStyles from "../../styles/Contact.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactMe } from "@/data/AppData";
import { GiPaperPlane } from "react-icons/gi";
import {
	fadeIn,
	planetVariants,
	staggerContainer,
	zoomIn,
} from "@/utils/motion";
import { IoLogoWhatsapp } from "react-icons/io5";

const phoneImage = "/phone214.jpg";
const Contact = () => {
	return (
		<div className={`${contactStyles.contact_block}`}>
			<motion.div className={`${contactStyles.contact_advert_block}`}>
				<motion.div
					variants={fadeIn("left", "tween", 0, 1)}
					whileInView="show"
					initial="hidden"
					viewport={{ once: false, amount: 0.25 }}
					className={`${contactStyles.contact_advert_info}`}>
					<h2>Do you have a project in mind?</h2>
					<p>
						Contact me now and get a 20% discount on your new Frontend projects
					</p>
					<motion.div>
						<Link
							href="#contact-me"
							className={`btn_primary ${contactStyles.btn_primary}`}>
							Contact Me
							<GiPaperPlane
								className={`text-[1.4rem] transition ${contactStyles.icon}`}
							/>
						</Link>
					</motion.div>
				</motion.div>
				<motion.div
					variants={fadeIn("right", "tween", 0, 1)}
					whileInView="show"
					initial="hidden"
					viewport={{ once: false, amount: 0.25 }}
					className={`${contactStyles.contact_advert_image}`}>
					<Image
						className={`${contactStyles.img}`}
						width={200}
						height={200}
						alt="alternate"
						src={phoneImage}
					/>
				</motion.div>
			</motion.div>
			<div id="contact-me" className={`${contactStyles.contact_middle_block}`}>
				<h2>Contact Me</h2>
				<small>Get in touch</small>
			</div>
			<div className={`${contactStyles.contact_bottom_block}`}>
				<motion.div
					variants={fadeIn("right", "tween", 0, 1)}
					whileInView="show"
					initial="hidden"
					viewport={{ once: false, amount: 0.25 }}
					className={`${contactStyles.contact_info_block}`}>
					{contactMe.map((item) => (
						<div className={`${contactStyles.contact_info_box}`} key={item.id}>
							<motion.div className={`${contactStyles.info_icon}`}>
								{item.icon}
							</motion.div>
							<div>
								<h3>{item.head}</h3>
								<small>{item.desc}</small>
							</div>
						</div>
					))}
				</motion.div>
				<motion.form
					variants={fadeIn("left", "tween", 0, 1)}
					whileInView="show"
					initial="hidden"
					viewport={{ once: false, amount: 0.25 }}
					className={`${contactStyles.contact_input_block}`}>
					<div className={`${contactStyles.contact_input_box}`}>
						<label htmlFor="">Name* </label>
						<input
							className={`${contactStyles.contact_input}`}
							type="text"
							placeholder="Your Full Name"
						/>
					</div>
					<div className={`${contactStyles.contact_input_box}`}>
						<label htmlFor="">Email* </label>
						<input
							className={`${contactStyles.contact_input}`}
							type="email"
							placeholder="Your Email Address"
						/>
					</div>
					<div className={`${contactStyles.contact_input_box}`}>
						<label htmlFor="">Message*</label>
						<textarea
							className={`${contactStyles.contact_textarea}`}
							rows={4}
							cols={2}
							placeholder="Your message"></textarea>
					</div>
					<div className={`${contactStyles.contact_input_box}`}>
						<button
							type='submit'
							className={`btn_primary ${contactStyles.btn_primary}`}>
							Send Message
							<GiPaperPlane
								className={`text-[1.4rem] transition ${contactStyles.icon}`}
							/>
						</button>
					</div>
					<div className={`${contactStyles.contact_input_box}`}>
						<button
							className={`btn_primary ${contactStyles.btn_primary}`}>
							Whatsapp
							<IoLogoWhatsapp
								className={`text-[1.4rem] transition ${contactStyles.icon}`}
							/>
						</button>
					</div>
				</motion.form>
			</div>
		</div>
	);
};

export default Contact;
