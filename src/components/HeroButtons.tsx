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
				className="relative inline-flex h-12  overflow-hidden rounded-full p-[1px] text-sm font-medium text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-3xl">
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
				className="inline-flex items-center justify-center shadow-[inset_0_0_0_2px_#616467] px-6 py-3 text-sm font-medium rounded-full bg-transparent  dark:text-neutral-200 text-pink-300 hover:text-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900">
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
