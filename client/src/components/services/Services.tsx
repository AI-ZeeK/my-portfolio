import React from "react";
import serviceStyle from "../../styles/Service.module.scss";
import { CiLocationArrow1 } from "react-icons/ci";
import ServiceModal from "./ServiceModal";

const Services = () => {
	return (
		<section id="service" className={`${serviceStyle.service_section}`}>
			<div className={`${serviceStyle.service_card}`}>
				{/* <div className={`${serviceStyle.service_desc}`}>
					<h1>Web Development Services</h1>{" "}
					<CiLocationArrow1 className={`${serviceStyle.service_icon}`} />
				</div> */}
			</div>
			<ServiceModal />
		</section>
	);
};

export default Services;
