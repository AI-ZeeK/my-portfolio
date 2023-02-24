import navStyles from "../../styles/Navigation.module.scss";
import {
	MdOutlineDashboard,
	MdDashboard,
	MdOutlinePalette,
	MdPalette,
} from "react-icons/md";
import { HiSparkles, HiOutlineSparkles } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
	setNavToggle,
	setThemeToggle,
	setCloseThemeBar,
	setTheme,
} from "../../Redux-actions/AppSlice";
import NavLinks from "./NavLinks";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, fadeIn } from "../../utils/motion";

const AiZeekLogo = "/AiZeek.png";
const AiZeekProfile = "/profile.jpg";
const Navigation = () => {
	const { navToggle, isChecked, themeToggle, navData, currentTheme } =
		useSelector((store: any) => store.app);

	const dispatch = useDispatch();

	const handleChecked = (e: any) => {
		dispatch(setTheme(e.target.value));
	};

	const handleCheckClick = () => {
		handleChecked(1);
	};
	const handleThemeToggle = () => {
		dispatch(setThemeToggle());
	};

	const themeBarRef: any = useRef(null);
	useEffect(() => {
		const handleOutsideClick = (e: any) => {
			if (!themeBarRef.current.contains(e.target)) {
				dispatch(setCloseThemeBar());
			}
			return;
		};
		document.addEventListener("click", handleOutsideClick, true);

		return () => {
			document.removeEventListener("click", handleOutsideClick, true);
		};
	}, [dispatch]);

	useEffect(() => {
		dispatch(setTheme(currentTheme));
	});

	return (
		<nav
			className={`${navStyles.nav_block} ${
				navToggle ? navStyles.active : ""
			} `}>
			<div className={navStyles.nav_logo_box}>
				<motion.div
					variants={fadeIn("left", "tween", 0.2, 1)}
					whileInView="show"
					initial="hidden"
					viewport={{ once: true, amount: 0.25 }}
					className={navStyles.nav_logo_image}>
					<Image
						width={500}
						height={500}
						src={AiZeekProfile}
						alt="A Logo for my brand"
						className={navStyles.nav_logo}
					/>
				</motion.div>
				<motion.div
					className={navStyles.nav_logo_text}
					variants={fadeIn("right", "tween", 0.1, 1)}
					whileInView="show"
					initial="hidden"
					viewport={{ once: false, amount: 0.25 }}>
					<motion.span>Isaac</motion.span>
				</motion.div>

				{/* <div className={navStyles.nav_logo_text}>Isaac</div> */}
			</div>
			<div className={`${navStyles.nav_links_box} `}>
				<ul
					className={`${navStyles.nav_links_block}  ${
						navToggle ? navStyles.active : ""
					} `}>
					{navData?.map((item: any) => (
						<NavLinks key={item?.id} id={item?.id} {...item} />
					))}
					<div className={`${navStyles.nav_logo_image} ${navStyles.huge}`}>
						<Image
							width={500}
							height={500}
							src={AiZeekLogo}
							alt="A Logo for my brand"
							className={navStyles.nav_logo}
						/>
					</div>
				</ul>
			</div>
			<div className={navStyles.nav_theme_area} onClick={handleThemeToggle}>
				{themeToggle ? (
					// <MdPalette className={`${navStyles.theme_toggle}`} />
					<HiSparkles className={`${navStyles.theme_toggle}`} />
				) : (
					// <MdOutlinePalette className={`${navStyles.theme_toggle}`} />
					<HiOutlineSparkles className={`${navStyles.theme_toggle}`} />
				)}
			</div>
			<div
				ref={themeBarRef}
				className={`${themeToggle ? navStyles.active : ""} ${
					navStyles.theme_box
				}`}>
				<div className={`${navStyles.theme_desc}`}>
					<h3>Pick a theme</h3>
				</div>
				<div className={`${navStyles.hr}`} />
				<div className={`${navStyles.select_block}`}>
					<label htmlFor="black" className="radio-label">
						Lights Out
					</label>
					<input
						onChange={handleChecked}
						type="radio"
						name="theme"
						id="black"
						value="black"
					/>
				</div>
				<div className={`${navStyles.select_block}`}>
					<label htmlFor="dim" className="radio-label">
						Dim
					</label>
					<input
						onChange={handleChecked}
						type="radio"
						name="theme"
						id="dim"
						value="dim"
					/>
				</div>
				<div className={`${navStyles.select_block}`}>
					<label htmlFor="coffee" className="radio-label">
						Coffee
					</label>
					<input
						onChange={handleChecked}
						type="radio"
						name="theme"
						id="coffee"
						value="coffee"
					/>
				</div>

				<div className={`${navStyles.select_block}`}>
					<label htmlFor="light" className="radio-label">
						Light
					</label>
					<input
						onChange={handleChecked}
						type="radio"
						name="theme"
						id="light"
						value="light"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
