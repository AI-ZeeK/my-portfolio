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
import { useDispatch, useSelector } from "react-redux";
import {
	setFormBtnAble,
	setFormData,
	setFormSend,
	setFormSent,
} from "@/Redux-actions/AppSlice";
import { sendContactForm } from "@/lib/api";
import Loading from "../Loading";

const phoneImage = "/phone214.jpg";
const Contact = () => {
	const { formData, formSent, formBtnAble } = useSelector(
		(store: any) => store.app
	);

	const dispatch = useDispatch();

	const handleDataChange = (e: any) => {
		dispatch(
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
			})
		);
		if (!formData.name || !formData.email || !formData.message) {
			dispatch(setFormBtnAble());
		}
	};
	const handleFormBtnClick = () => {
		if (!formData.name || !formData.email || !formData.message) {
			alert("form input empty");
		}
	};
	const handleFormSubmit = async (e: any) => {
		e.preventDefault();

		dispatch(setFormSend());
		const res = await sendContactForm(formData);
		setTimeout(() => {
			alert("Email Sent");
		}, 1500);

		setTimeout(() => {
			dispatch(setFormSent());
			dispatch(
				setFormData({
					name: "",
					email: "",
					message: "",
				})
			);
		}, 2000);

		console.log(res);
	};

	return (
		<div className={`${contactStyles.contact_block}`}>
			<motion.div className={`${contactStyles.contact_advert_block}`}>
				<motion.div
					variants={fadeIn("left", "tween", 0, 0.8)}
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
					variants={fadeIn("right", "tween", 0, 0.8)}
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
					variants={fadeIn("right", "tween", 0, 0.8)}
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
					onSubmit={handleFormSubmit}
					variants={fadeIn("left", "tween", 0, 0.8)}
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
							value={formData.name}
							name="name"
							required
							onChange={handleDataChange}
						/>
					</div>
					<div className={`${contactStyles.contact_input_box}`}>
						<label htmlFor="">Email* </label>
						<input
							className={`${contactStyles.contact_input}`}
							type="email"
							placeholder="Your Email Address"
							value={formData.email}
							required
							onChange={handleDataChange}
							name="email"
						/>
					</div>
					<div className={`${contactStyles.contact_input_box}`}>
						<label htmlFor="">Message*</label>
						<textarea
							className={`${contactStyles.contact_textarea}`}
							rows={4}
							cols={2}
							placeholder="Your message"
							value={formData.message}
							required
							name="message"
							onChange={handleDataChange}
						/>
					</div>
					<div
						className={`${contactStyles.contact_input_box} ${contactStyles.btn_box}`}>
						<button
							onClick={handleFormBtnClick}
							disabled={formBtnAble}
							type="submit"
							className={`btn_primary ${contactStyles.btn_primary}`}>
							{formSent ? (
								<Loading />
							) : (
								<>
									Send Message
									<GiPaperPlane
										className={`text-[1.4rem] transition ${contactStyles.icon}`}
									/>
								</>
							)}
						</button>
						<Link
							target="_blank"
							href={`https://api.whatsapp.com/send/?phone=2348129405476&text&type=phone_number&app_absent=0`}
							className={`btn_primary ${contactStyles.btn_primary}`}>
							Whatsapp
							<IoLogoWhatsapp
								className={`text-[1.4rem] transition ${contactStyles.icon}`}
							/>
						</Link>
					</div>
				</motion.form>
			</div>
		</div>
	);
};

export default Contact;
