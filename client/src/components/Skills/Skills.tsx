import Image from "next/image";

const Skills = () => {
	return (
		<div id="skills">
			<Image width={100} height={100} src="/icons8-css3.svg" alt="image" />
			<Image width={100} height={100} src="/icons8-node-js.svg" alt="image" />
			<Image width={100} height={100} src="/icons8-next.js.svg" alt="image" />
			<Image width={100} height={100} src="/solidity.svg" alt="image" />
			<Image
				width={100}
				height={100}
				src="/icons8-express-js.svg"
				alt="image"
			/>
			<Image
				width={100}
				height={100}
				src="/icons8-typescript.svg"
				alt="image"
			/>
			<Image
				width={100}
				height={100}
				src="/icons8-javascript.svg"
				alt="image"
			/>
		</div>
	);
};

export default Skills;
