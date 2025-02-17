import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { GalleryModal } from "./GalleryModal";
import { ExternalLink, ImageIcon } from "lucide-react";
import Section from "./layout/Section";

interface Project {
	title: string;
	description: string;
	image: string;
	link: string;
	github?: string;
	gallery?: string[];
	technologies: string[];
}

const Projects: React.FC = () => {
	const [selectedProject, setSelectedProject] = useState<number | null>(null);
	const [selectedImage, setSelectedImage] = useState<string>("");

	const handleImageClick = (projectIndex: number, image: string): void => {
		setSelectedProject(projectIndex);
		const galleryImages = PROJECTS[projectIndex].gallery;
		setSelectedImage(galleryImages ? galleryImages[0] : image);
	};

	return (
		<Section id="projects">
			<h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
				Projects
			</h2>
			<div>
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className="mb-16 sm:mb-8 flex flex-wrap gap-2 sm:gap-8 lg:justify-center">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4 relative group cursor-pointer"
							onClick={() => handleImageClick(index, project.image)}>
							<div className="relative overflow-hidden rounded h-[180px] w-full mb-6 bg-neutral-100 dark:bg-neutral-900">
								<div className="absolute inset-0 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="h-full w-full rounded object-cover scale-100 transition-transform duration-300 group-hover:scale-125"
									/>
								</div>
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
									<div className="text-white flex items-center gap-2">
										<ImageIcon className="w-5 h-5" />
										<span>
											{project.gallery ? "View Gallery" : "View Image"}
										</span>
									</div>
								</motion.div>
							</div>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-3/4">
							<div className="flex items-center gap-4 mb-4">
								<h6>
									<motion.a
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										transition={{
											type: "spring",
											stiffness: 500,
											damping: 15,
										}}
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 font-semibold hover:underline hover:underline-offset-2 hover:cursor-pointer text-black hover:text-purple-800 dark:text-purple-100">
										{project.title}
										<ExternalLink className="h-4 w-4" />
									</motion.a>
								</h6>
								{project.github && (
									<motion.a
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										transition={{
											type: "spring",
											stiffness: 500,
											damping: 15,
										}}
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 hover:underline hover:underline-offset-2 hover:cursor-pointer dark:text-neutral-400 text-neutral-600">
										github
										<FaGithub className="h-5 w-5 text-black dark:text-white shadow-lg backdrop-blur-3xl" />
									</motion.a>
								)}
							</div>
							<p className="mb-4 text-gray-600 dark:text-neutral-400 text-justify">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="rounded-md px-2.5 py-1 text-sm font-medium 
											text-purple-900 dark:text-purple-100
											bg-gradient-to-r from-neutral-100 via-pink-50/50 to-purple-50/50 
											dark:from-neutral-900 dark:via-pink-900/10 dark:to-purple-900/10
											border border-purple-900/80 dark:border-purple-100/50">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>

			{selectedProject !== null && (
				<GalleryModal
					isOpen={true}
					onClose={() => setSelectedProject(null)}
					images={
						PROJECTS[selectedProject].gallery || [
							PROJECTS[selectedProject].image,
						]
					}
					selectedImage={selectedImage}
					onImageSelect={setSelectedImage}
				/>
			)}
		</Section>
	);
};

export default Projects;
