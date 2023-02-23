import Image from "next/image";
import Link from "next/link";
import homeStyles from "../../styles/Home.module.scss";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { GiPaperPlane } from "react-icons/gi";
import { TypingText, TitleText } from "../../motion-components/CustomTexts";
import { staggerContainer, slideIn, fadeIn } from "../../utils/motion";

const HomePage = () => {
	return (
		<section className={`${homeStyles.home} ${homeStyles.section}`} id="home">
			<div className={`${homeStyles.home__container} ${homeStyles.grid}`}>
				<div className={`${homeStyles.home__content} `}>
					<aside className={`${homeStyles.home__social}`}>
						<motion.div
							variants={slideIn("left", "tween", 0, 1)}
							whileInView="show"
							initial="hidden"
							viewport={{ once: false, amount: 0.25 }}>
							<Link
								target="_blank"
								href="https://www.linkedin.com/in/isaac-iyaye-williams-3143041b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHvVVSyhITLuhOh5vKTGG%2Bg%3D%3D"
								className={`${homeStyles.home__social_icon}`}>
								<CiLinkedin className={`${homeStyles.social_icon}`} />
							</Link>
						</motion.div>
						<motion.div
							variants={slideIn("left", "tween", 0.1, 1)}
							whileInView="show"
							initial="hidden"
							viewport={{ once: false, amount: 0.25 }}>
							<Link
								href="https://github.com/AI-ZeeK"
								target="_blank"
								className={`${homeStyles.home__social_icon}`}>
								<AiFillGithub />
							</Link>
						</motion.div>
					</aside>
					{/* <div className={`relative ${homeStyles.home_img_box}`}> */}
					<motion.div
						variants={fadeIn("left", "tween", 0.2, 1)}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}
						className={`${homeStyles.home__Image}`}>
						<svg
							className={`${homeStyles.home__blob}`}
							viewBox="120 0 900 1000"
							xmlns="http://www.w3.org/2000/svg">
							<defs>
								<filter
									id="grain"
									x="-50vw"
									y="-50vh"
									width="100vw"
									height="100vh">
									<feFlood flood-color="#ffffff" result="neutral-gray" />
									<feTurbulence
										in="neutral-gray"
										type="fractalNoise"
										baseFrequency="2.5"
										numOctaves="100"
										stitchTiles="stitch"
										result="noise"
									/>
									<feColorMatrix
										in="noise"
										type="saturate"
										values="0"
										result="destaturatedNoise"></feColorMatrix>
									<feComponentTransfer in="desaturatedNoise" result="theNoise">
										<feFuncA type="table" tableValues="0 0 0.35 0"></feFuncA>
									</feComponentTransfer>
									<feBlend
										in="SourceGraphic"
										in2="theNoise"
										mode="soft-light"
										result="noisy-image"
									/>
								</filter>
								<clipPath id="shape">
									<path
										fill="currentColor"
										d="M882,648Q796,796,648,851.5Q500,907,323.5,880Q147,853,125,676.5Q103,500,169,367.5Q235,235,367.5,162Q500,89,650,144.5Q800,200,884,350Q968,500,882,648Z"></path>
								</clipPath>
							</defs>
							<g filter="url(#grain)" clip-path="url(#shape)">
								<path
									fill=""
									d="M882,648Q796,796,648,851.5Q500,907,323.5,880Q147,853,125,676.5Q103,500,169,367.5Q235,235,367.5,162Q500,89,650,144.5Q800,200,884,350Q968,500,882,648Z"
								/>
								<image
									className={`${homeStyles.home__blob_Image}`}
									x="70"
									y="160"
									// style="width: 100%"
									xlinkHref="/2-preview.png"
								/>
							</g>
						</svg>
					</motion.div>
					{/* </div> */}
					<motion.div
						variants={staggerContainer}
						whileInView="show"
						initial="hidden"
						viewport={{ once: false, amount: 0.25 }}
						className={`${homeStyles.home__data}`}>
						<motion.h1
							variants={fadeIn("up", "tween", 0, 1)}
							whileInView="show"
							initial="hidden"
							viewport={{ once: false, amount: 0.25 }}
							className={`${homeStyles.home__title}`}>
							Hi, I am{" "}
							<span className={`${homeStyles.home__title_span}`}>Isaac</span>
						</motion.h1>
						<TypingText
							title="Full Stack Web3 Developer"
							textStyles={`${homeStyles.home__subtitle}`}
						/>

						<motion.p
							variants={fadeIn("down", "tween", 0, 1)}
							whileInView="show"
							initial="hidden"
							viewport={{ once: false, amount: 0.25 }}
							className={`${homeStyles.home__description} mb-2`}>
							Known for architecting customer-facing products that deliver
							unique experiences while complying with internal coding standards
							and technical requirements
						</motion.p>
						<motion.div
							variants={fadeIn("left", "tween", 0, 1.4)}
							whileInView="show"
							initial="hidden"
							viewport={{ once: false, amount: 0.25 }}>
							<Link
								href="#contact"
								className={`btn_primary ${homeStyles.btn_primary} ${homeStyles.button__flex}`}>
								Contact Me
								<GiPaperPlane
									className={`text-[1.4rem] transition ${homeStyles.icon}`}
								/>
							</Link>
						</motion.div>
					</motion.div>
				</div>

				{/* <div className="home__scroll">
					<a href="#about" className="home__scroll-button button--flex">
						<Image
							width={100}
							height={100}
							className="icons8 home__scroll-mouse"
							src="/thirteen.svg"
							alt=""
						/>
						<span className="home_scroll-name">Scroll down</span>
						<Image
							width={100}
							height={100}
							className="icons8 home__scroll-arrow"
							src="/thirteen.svg"
							alt=""
						/>
					</a>
				</div> */}
			</div>
		</section>
	);
};

export default HomePage;
