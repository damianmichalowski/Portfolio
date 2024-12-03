import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import Section from "./layout/Section";

const Contact = () => {
	return (
		<Section id="contact" className="pb-20" noBorder>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 0.5 }}>
				<h2 className="my-20 text-center text-4xl text-gray-900 dark:text-white">
					Get in Touch
				</h2>
				<div className="text-center tracking-tighter">
					<ContactForm />
				</div>
			</motion.div>
		</Section>
	);
};

export default Contact;
