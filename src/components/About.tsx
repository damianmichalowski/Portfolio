import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { IMAGES } from "../constants";
const About = () => {
	return (
		<div
			id="about"
			className="widescreen:section-min-height tallscreen:section-min-height border-b border-neutral-300 dark:border-neutral-900">
			<h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
				About Me
			</h2>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 lg:p-8">
					<div className="flex items-center justify-center">
						<img
							className="rounded-2xl border border-neutral-200 dark:border-neutral-800 w-full sm:w-3/4"
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
						<div className="my-2 max-w-xl py-6 space-y-4 text-justify text-gray-700 dark:text-neutral-300">
							<p>
								I am a dedicated frontend developer with experience in crafting visually appealing and user-friendly web applications. I have contributed to impactful projects such as a Forex High-Frequency Trading Application and an Internal Banking System, where I designed intuitive UX layouts, developed reusable components, and implemented real-time features.
							</p>
							<p>
								As an attentive and detail-oriented individual, I possess an unwavering commitment to perfection. With a keen eye for visual precision down to the pixel, I have harbored a lifelong passion for all things IT. My academic pursuits stand as proof of my desire to approach programming professionally, showcasing my ongoing commitment to learning.
							</p>
							<p>
								Responsibility is ingrained in my work ethic, reflected in my diverse background in front-end development. While my journey began with graphic design and video production, my enduring fascination with programming has been constant. I am driven by a thirst for new knowledge, perpetually seeking opportunities to expand my skill set and deliver measurable business value.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
