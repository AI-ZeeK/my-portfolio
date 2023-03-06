import React from "react";
import serviceStyle from "../../styles/Service.module.scss";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
  <motion.section id="services" className={`${serviceStyle.service_section}`}>
  <motion.div className={`${serviceStyle.service_head_box}`}>
    <h1 className={`${serviceStyle.service_head}`}>Projects</h1>
    <p className={`${serviceStyle.service_desc}`}>Some of my projects</p>
  </motion.div>
 
</motion.section>
)
}

export default Portfolio;
