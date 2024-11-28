import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, Variants } from "framer-motion";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const iconVariant = (duration: number): Variants => ({
	initial: { x: 0 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const TooltipWithMotion = ({
	children,
	text,
	duration,
}: {
	children: React.ReactNode;
	text: string;
	duration: number;
}) => (
	<Tooltip>
		<TooltipTrigger>
			<motion.div
				variants={iconVariant(duration)}
				initial="initial"
				animate="animate"
				className="rounded-2xl border-4 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-transparent p-4">
				{children}
			</motion.div>
		</TooltipTrigger>
		<motion.div
			variants={iconVariant(duration)}
			initial="initial"
			animate="animate"
			className="absolute">
			<TooltipContent>
				<p>{text}</p>
			</TooltipContent>
		</motion.div>
	</Tooltip>
);

const Technologies = () => {
	return (
		<div
			id="technologies"
			className="border-b border-neutral-300 dark:border-neutral-800 pb-40">
			<h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
				Technologies
			</h2>
			<div className="relative">
				<TooltipProvider delayDuration={100}>
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 60 }}
						transition={{ duration: 1.5 }}
						className="w-full flex flex-wrap items-center justify-center gap-8 sm:gap-4 mx-auto">
						<TooltipWithMotion text="React" duration={2.6}>
							<FaReact className="text-7xl text-sky-500" />
						</TooltipWithMotion>

						<TooltipWithMotion text="Typescript" duration={2.8}>
							<SiTypescript className="text-7xl text-blue-400" />
						</TooltipWithMotion>

						<TooltipWithMotion text="Tailwindcss" duration={2.6}>
							<RiTailwindCssFill className="text-7xl text-sky-500" />
						</TooltipWithMotion>

						<TooltipWithMotion text="Javascript" duration={2.7}>
							<FaJs className="text-7xl text-yellow-300" />
						</TooltipWithMotion>

						<TooltipWithMotion text="Sass" duration={2.9}>
							<FaSass className="text-7xl text-pink-500" />
						</TooltipWithMotion>

						<TooltipWithMotion text="Css" duration={3.0}>
							<FaCss3 className="text-7xl text-blue-500" />
						</TooltipWithMotion>

						<TooltipWithMotion text="Html" duration={3.1}>
							<FaHtml5 className="text-7xl text-orange-600" />
						</TooltipWithMotion>

						<TooltipWithMotion text="Nodejs" duration={3.2}>
							<FaNodeJs className="text-7xl text-green-500" />
						</TooltipWithMotion>

						<TooltipWithMotion text="Postgresql" duration={3.3}>
							<BiLogoPostgresql className="text-7xl text-sky-700" />
						</TooltipWithMotion>
					</motion.div>
				</TooltipProvider>
			</div>
		</div>
	);
};

export default Technologies;
