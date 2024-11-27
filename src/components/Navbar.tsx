import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA } from "../constants";
const Navbar = () => {
	return (
		<div className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				{/* <p className="text-3xl text-neutral-0 font-bold mx-2 w-10">Dm</p> */}
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
