import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
	return (
		<div
			id="experience"
			className="widescreen:section-min-height tallscreen:section-min-height border-b border-neutral-300 dark:border-neutral-900 pb-4">
			<h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
				Experience
			</h2>
			<div>
				{EXPERIENCES.map((experience, index) => (
					<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4">
							<p className="mb-2 text-sm text-gray-500 dark:text-neutral-400">
								{experience.year}
							</p>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 font-semibold text-gray-900 dark:text-white">
								{experience.role} -{" "}
								<span className="text-sm text-purple-800 dark:text-purple-100">
									{experience.company}
								</span>
							</h6>
							<p className="mb-4 text-gray-600 dark:text-neutral-400 text-justify">
								{experience.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{experience.technologies.map((tech, index) => (
									<span
										key={index}
										className="rounded bg-neutral-200 dark:bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
										{tech}
									</span>
								))}
							</div>
							{experience.reference && (
								<motion.button
									onClick={() => window.open(experience.reference, "_blank")}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									transition={{
										type: "spring",
										stiffness: 500,
										damping: 15,
									}}
									className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] text-sm font-medium">
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#393BB2_0%,#E2CBFF_50%,#393BB2_100%)]" />
									<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-3 py-1 text-xs font-medium text-gray-900 dark:text-white backdrop-blur-3xl">
										<span className="relative flex items-center z-10">
											<svg
												className="w-4 h-4 mr-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
												/>
											</svg>
											Reference
										</span>
									</span>
								</motion.button>
							)}
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
