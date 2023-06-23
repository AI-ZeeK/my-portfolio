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
import Link from "next/link";

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
            <p>FullStack Web2/Web3 Developer</p>
            <p>Smart contract Developer</p>
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
            <Link href={`#home`}>Home</Link>
          </motion.li>
          <motion.li
            variants={fadeIn("left", "tween", 0, 1)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}>
            <Link href={`#portfolio`}>Portfolio</Link>
          </motion.li>
          <motion.li
            variants={fadeIn("left", "tween", 0, 1)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}>
            <Link href={`#services`}>Services</Link>
          </motion.li>
          {/* <motion.li
            variants={fadeIn("left", "tween", 0, 1)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}>
            <Link href={`#blog`}>Blog</Link>
          </motion.li> */}
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
            <Link href="https://www.linkedin.com/in/isaac-iyaye-williams-3143041b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHvVVSyhITLuhOh5vKTGG%2Bg%3D%3D">
              <CiLinkedin />
            </Link>
          </motion.li>
          <motion.li
            variants={planetVariants("right")}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}>
            <Link href="https://github.com/AI-ZeeK">
              <AiFillGithub />
            </Link>
          </motion.li>
          {/* <motion.li
            variants={planetVariants("right")}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}>
            <CiFacebook />
          </motion.li> */}
          <motion.li
            variants={planetVariants("right")}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}>
            <Link href="https://twitter.com/_____Mamba?t=0fdrPb3C-VURWSLabHYhlw&s=09">
              <AiOutlineTwitter />
            </Link>
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
