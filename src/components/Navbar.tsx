import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA } from "../constants";
import { ModeToggle } from "./mode-toggle";

const springTransition = {
	type: "spring" as const,
	stiffness: 500,
	damping: 18,
};

const Navbar: React.FC = () => {
	return (
		<div id="hero" className="mb-20 flex items-center justify-end py-6">
			<div className="mt-8 flex items-center justify-center gap-4 text-2xl">
				<ModeToggle />
				<motion.a
					href={SOCIAL_MEDIA.linkedin}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95 }}
					transition={springTransition}
					className="text-black dark:text-neutral-300">
					<FaLinkedin />
				</motion.a>
				<motion.a
					href={SOCIAL_MEDIA.github}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95 }}
					transition={springTransition}
					className="text-black dark:text-neutral-300">
					<FaGithub />
				</motion.a>
			</div>
		</div>
	);
};

export default Navbar;
