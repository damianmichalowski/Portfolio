import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import Section from "./layout/Section";
import { fadeInLeft } from "@/animations/variants";

const Contact: React.FC = () => {
	return (
		<Section id="contact" className="pb-20" noBorder>
			<motion.div
				variants={fadeInLeft}
				initial="hidden"
				whileInView="visible">
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
