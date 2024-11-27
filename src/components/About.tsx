import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { IMAGES } from "../constants";
const About = () => {
	return (
		<div
			id="about"
			className="widescreen:section-min-height tallscreen:section-min-height border-b border-neutral-300 dark:border-neutral-900">
			<h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
				About
				<span className="text-gray-500 dark:text-neutral-500"> Me</span>
			</h2>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 lg:p-8">
					<div className="flex items-center justify-center">
						<img
							className="rounded-2xl border border-neutral-200 dark:border-neutral-800"
							src={IMAGES.about}
							alt="about"
						/>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2">
					<div className="flex justify-center lg:justify-start">
						<p className="my-2 max-w-xl py-6 text-justify text-gray-700 dark:text-neutral-300">
							{ABOUT_TEXT}
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
