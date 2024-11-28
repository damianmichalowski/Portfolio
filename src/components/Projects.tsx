import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<div
			id="projects"
			className="widescreen:section-min-height tallscreen:section-min-height border-b border-neutral-300 dark:border-neutral-900 pb-4">
			<h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
				Projects
			</h2>
			<div>
				{PROJECTS.map((project, index) => (
					<div key={index} className="mb-16 sm:mb-8 flex flex-wrap gap-2 sm:gap-8 lg:justify-center">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4">
							<img
								src={project.image}
								alt={project.title}
								className="mb-6 rounded w-full h-[145px] object-cover object-center"
							/>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-3/4">
							<div className="flex items-center gap-4 mb-4">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="font-semibold hover:underline hover:underline-offset-2 hover:cursor-pointer text-black hover:text-purple-800 dark:text-purple-100">
									{project.title}
								</a>
								{project.github && (
									<motion.a
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.95 }}
										transition={{
											type: "spring",
											stiffness: 500,
											damping: 15,
										}}
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="">
										<FaGithub className="h-5 w-5 text-black dark:text-white shadow-lg backdrop-blur-3xl" />
									</motion.a>
								)}
							</div>
							<p className="mb-4 text-gray-600 dark:text-neutral-400">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="rounded bg-neutral-200 dark:bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
