"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { DOCUMENTS } from "../constants";
import { DialogContactForm } from "./DialogContactForm";
import { useState } from "react";

export default function HeroButtons() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<div className="flex gap-4 mt-8">
			<motion.a
				href={DOCUMENTS.resume}
				download="Damian_Michałowski_Resume.pdf"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 15,
				}}
				className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] text-sm font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#393BB2_0%,#E2CBFF_50%,#393BB2_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white shadow-lg backdrop-blur-3xl">
					<span className="relative flex items-center z-10">
						<Download className="mr-2 h-5 w-5" />
						Download CV
					</span>
				</span>
			</motion.a>
			<motion.button
				onClick={() => setIsDialogOpen(true)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 15,
				}}
				className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-transparent border-2 border-gray-300 dark:border-neutral-700 text-gray-600 dark:text-neutral-300 hover:border-pink-400    hover:text-pink-400  dark:hover:border-pink-200 dark:hover:text-pink-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
				<Mail className="mr-2 h-5 w-5" />
				Contact Me
			</motion.button>
			<DialogContactForm
				isOpen={isDialogOpen}
				onClose={() => setIsDialogOpen(false)}
			/>
		</div>
	);
}
