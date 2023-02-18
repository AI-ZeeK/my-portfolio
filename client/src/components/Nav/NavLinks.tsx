import React from "react";
import navStyles from "../../styles/Navigation.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setNavSelect } from "@/Redux-actions/AppSlice";
import { TypingText, TitleText } from "../../motion-components/CustomTexts";

const NavLinks = ({ id, head, icon1, state, icon2 }: any) => {
	const dispatch = useDispatch();
	const handleNavSelect = (selectId: string) => {
		dispatch(setNavSelect(selectId));
		console.log(selectId, id);
	};
	return (
		<Link
			onClick={() => handleNavSelect(id)}
			href={`#${head === "Contact Me" ? "contact-me" : head.toLowerCase()}	
			`}
			className={`${navStyles.nav_link} ${state ? navStyles.nav_active : ""}`}>
			<span><TypingText title={`${head}`} textStyles={``} /></span>

			<div
				className={`${navStyles.nav_icon} ${navStyles.mobile} ${navStyles.huge}`}>
				{state ? icon2 : icon1}
			</div>
		</Link>
	);
};

export default NavLinks;
