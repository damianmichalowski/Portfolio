import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import confetti from "canvas-confetti";

interface DialogContactFormProps {
	isOpen: boolean;
	onClose: () => void;
}

export function DialogContactForm({ isOpen, onClose }: DialogContactFormProps) {
	const handleFormSubmit = () => {
		confetti({
			particleCount: 100,
			spread: 70,
			scalar: 1.2,
			origin: { y: 0.6 },
		});
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 w-[90%] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className="text-gray-900 dark:text-white">Get in touch</DialogTitle>
				</DialogHeader>
				<ContactForm onClose={handleFormSubmit} removeBackground={true} />
			</DialogContent>
		</Dialog>
	);
}
