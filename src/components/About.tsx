import { motion } from "framer-motion";
import { IMAGES } from "../constants";
import Section from "./layout/Section";
import { fadeInLeft, fadeInRight } from "@/animations/variants";

const About: React.FC = () => {
	return (
		<Section id="about">
			<h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
				About Me
			</h2>
			<div className="flex flex-wrap">
				<motion.div
					variants={fadeInLeft}
					initial="hidden"
					whileInView="visible"
					className="w-full lg:w-1/2">
					<div className="flex items-center justify-center">
						<img
							 className="rounded-xl w-full sm:w-3/4"
							 src={IMAGES.about}
							 alt="About Damian Michałowski"
						/>
					</div>
				</motion.div>
				<motion.div
					variants={fadeInRight}
					initial="hidden"
					whileInView="visible"
					className="w-full lg:w-1/2">
					<div className="flex justify-center lg:justify-start">
						<div className="my-2 max-w-xl py-6 space-y-4 text-justify text-gray-700 dark:text-neutral-300">
							<p>
								I am a dedicated frontend developer specializing in user-friendly web applications. My experience includes working on impactful projects like a Forex Trading Application and Banking System, where I focused on intuitive UX design and real-time features.
							</p>
							<p>
								Detail-oriented and committed to excellence, I bring pixel-perfect precision to my work. My passion for IT and continuous learning is reflected in my academic background and professional approach to programming.
							</p>
							<p>
								With roots in graphic design and video production, I've found my true calling in frontend development. I'm constantly expanding my skills and knowledge to deliver valuable solutions that make a real impact.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</Section>
	);
};

export default About;
