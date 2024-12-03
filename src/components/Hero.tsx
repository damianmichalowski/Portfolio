import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import { IMAGES } from "../constants";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import Section from "./layout/Section";

const variants = (delay: number) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const Hero = () => {
	const { toast } = useToast();
	return (
		<Section id="hero" className="pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2 order-1 lg:order-2 mb-16 lg:mb-0">
					<div className="flex justify-center">
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0 }}
							className="rounded-full w-3/4 border border-neutral-200 dark:border-neutral-800"
							src={IMAGES.hero}
							alt="Damian Michałowski"
						/>
					</div>
				</div>
				<div className="w-full lg:w-1/2 order-2 lg:order-1">
					<div className="flex flex-col items-start lg:items-start ">
						<motion.h1
							variants={variants(0)}
							initial="hidden"
							animate="visible"
							className="pb-16 text-6xl font-thin tracking-tight lg-mt-16 lg:text-8xl text-black dark:text-white">
							Damian Michałowski
						</motion.h1>
						{/* testing toast */}
						{/* <Button onClick={() => toast({ title: "Hello", description: "Hello" })}>
							Toast
						</Button> */}
						<motion.span
							variants={variants(0.2)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-pink-300 dark:via-slate-500 dark:to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
							Frontend Developer
						</motion.span>
						<motion.p
							variants={variants(0.4)}
							initial="hidden"
							animate="visible"
							className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify text-gray-700 dark:text-neutral-300">
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
			</div>
		</Section>
	);
};

export default Hero;
