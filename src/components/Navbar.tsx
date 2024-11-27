import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA } from "../constants";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
	return (
		<div id="hero" className="mb-20 flex items-center justify-end py-6">
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<ModeToggle />
				<motion.a
					href={SOCIAL_MEDIA.linkedin}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 18,
					}}>
					<FaLinkedin />
				</motion.a>
				<motion.a
					href={SOCIAL_MEDIA.github}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95 }}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 18,
					}}>
					<FaGithub />
				</motion.a>
			</div>
		</div>
	);
};

export default Navbar;
