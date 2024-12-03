import { Variants } from "framer-motion";

export const fadeInLeft: Variants = {
	hidden: { 
		opacity: 0, 
		x: -100 
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { 
			duration: 0.5 
		}
	}
};

export const fadeInRight: Variants = {
	hidden: { 
		opacity: 0, 
		x: 100 
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { 
			duration: 0.5 
		}
	}
};

export const buttonHover: Variants = {
	initial: { scale: 1 },
	hover: { 
		scale: 1.05,
		transition: {
			type: "spring",
			stiffness: 500,
			damping: 15,
		}
	},
	tap: { scale: 0.95 }
};