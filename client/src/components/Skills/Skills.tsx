import Image from "next/image";
import { TechStack } from "@/data/AppData";
import skillsStyle from "../../styles/Skills.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {toggleSkillsBox} from "../../Redux-actions/AppSlice";

const Skills = () => {
	const { skillshead } =	useSelector((store: any) => store.app);
	const dispatch = useDispatch();
	const handleToggleSkills  = (selectId: string) => {
		dispatch(toggleSkillsBox(selectId))
	}
	return (
		<div id="skills" className={`${skillsStyle.skills_section}`}>
			<motion.div className={`${skillsStyle.skills_head_box}`}>
				<h1 className={`${skillsStyle.skills_head}`}>Skills</h1>
				<p className={`${skillsStyle.skills_desc}`}>My technical level</p>
			</motion.div>
			<div className={`${skillsStyle.skills_card_block}`}>
				{skillshead?.map((item: any) => (
					<div key={item.id} className={`${skillsStyle.skills_card_box} ${item.state ? skillsStyle.active : ''} `}>
						<div onClick={() => handleToggleSkills(item.id)} className={`${skillsStyle.skills_card_head}`}>
							<div className={`${skillsStyle.skills_head_icon}`}>
								{item?.icon3}
							</div>

							<h1 className={`${skillsStyle.skills_head_desc}`}>{item.desc}</h1>
							<div className={`${skillsStyle.skills_head_chev}`}>
								{item.state ? item?.icon1 : item?.icon2 }
							</div>
							{/* <div>{}</div> */}
						</div>
						<div className={`${skillsStyle.stack_card_block}`}>
							{item.stack.map((stack : any) => (
								<div className={`${skillsStyle.stack_card_box}`} key={stack.id}>
									<div className={`${skillsStyle.stack_card_image}`}>
										<Image className={`${skillsStyle.img}`} width={25} height={25} src={stack.img} alt="alt" />
									</div>
									<h1 className={`${skillsStyle.stack_card_desc}`}>
										{stack.desc}
									</h1>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
