import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div ref={ref}>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 0.5 }}
				className="border-b border-neutral-900 pb-20">
				<h2 className="my-10 text-center text-4xl">Get in Touch</h2>
				<div className="text-center tracking-tighter">
					<ContactForm />
				</div>
			</motion.div>
		</div>
	);
});

export default Contact;
