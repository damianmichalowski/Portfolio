import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

interface DialogContactFormProps {
	isOpen: boolean;
	onClose: () => void;
}

export function DialogContactForm({ isOpen, onClose }: DialogContactFormProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Get in touch</DialogTitle>
				</DialogHeader>
				<ContactForm />
			</DialogContent>
		</Dialog>
	);
}
