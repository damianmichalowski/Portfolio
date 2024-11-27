import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import { IMAGES } from "../constants";
const variants = (delay: number) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const Hero = () => {
	return (
		<div
			className="widescreen:section-min-height tallscreen:section-min-height border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2 mb-16 lg:mb-0">
					<div className="flex flex-col items-start lg:items-start ">
						<motion.h1
							variants={variants(0)}
							initial="hidden"
							animate="visible"
							className="pb-16 text-6xl font-thin tracking-tight lg-mt-16 lg:text-8xl">
							Damian Michałowski
						</motion.h1>
						<motion.span
							variants={variants(0.2)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent ">
							Frontend Developer
						</motion.span>
						<motion.p
							variants={variants(0.4)}
							initial="hidden"
							animate="visible"
							className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
							{HERO_CONTENT}
						</motion.p>
						<motion.div
							variants={variants(0.6)}
							initial="hidden"
							animate="visible">
							<HeroButtons />
						</motion.div>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<div className="flex justify-center">
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.8 }}
							className="rounded-full w-3/4"
							src={IMAGES.hero}
							alt="Damian Michałowski"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
