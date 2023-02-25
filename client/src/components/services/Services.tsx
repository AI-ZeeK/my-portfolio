import React from "react";
import serviceStyle from "../../styles/Service.module.scss";
// import { arrow } from "react-icons/ai";
import ServiceModal from "./ServiceModal";
import { Principles } from "@/data/AppData";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  staggerContainer,
  zoomIn,
} from "@/utils/motion";

const Services = () => {
  return (
    <motion.section id="service" className={`${serviceStyle.service_section}`}>
      <motion.div className={`${serviceStyle.service_head_box}`}>
        <h1 className={`${serviceStyle.service_head}`}>Services</h1>
        <p className={`${serviceStyle.service_desc}`}>What i offer</p>
      </motion.div>
      <motion.div className={serviceStyle.service_card_block}>
        {Principles.sort((a, b) =>
          a.type.toLowerCase() < b.type.toLowerCase() ? -1 : 1
        ).map((item) => (
          <motion.div key={item.id} className={`${serviceStyle.service_card}`}>
            <motion.h1 className={`${serviceStyle.card_desc}`}>
              {item.type}
            </motion.h1>
            <div className={`${serviceStyle.card_icon_box}`}>
              <motion.span className={`${serviceStyle.card_icon}`}>
                {item?.icon}
              </motion.span>
            </div>
            <div className={`${serviceStyle.line_through}`} />
            <motion.div className={`${serviceStyle.service_info}`}>
              {item.desc}
            </motion.div>
          </motion.div>
        ))}
        {/* <div className={`${serviceStyle.service_desc}`}>
					<h1>Web Development Services</h1>{" "}
					<CiLocationArrow1 className={`${serviceStyle.service_icon}`} />
				</div> */}
      </motion.div>
    </motion.section>
  );
};

export default Services;
