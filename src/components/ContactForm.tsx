import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";

interface FormErrors {
	user_name?: string;
	user_lastname?: string;
	user_email?: string;
	user_phone?: string;
	user_message?: string;
}

export function ContactForm({
	onClose,
	removeBackground = false,
}: {
	onClose?: () => void;
	removeBackground?: boolean;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState<FormErrors>({});
	const form = useRef<HTMLFormElement>(null);
	const { toast } = useToast();

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};
		let isFormValid = true;

		if (!form.current?.user_name.value) {
			newErrors.user_name = "First name is required";
			isFormValid = false;
		}

		if (!form.current?.user_lastname.value) {
			newErrors.user_lastname = "Last name is required";
			isFormValid = false;
		}

		if (!form.current?.user_email.value) {
			newErrors.user_email = "Email is required";
			isFormValid = false;
		} else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
			newErrors.user_email = "Email is invalid";
			isFormValid = false;
		}

		if (!form.current?.user_phone.value) {
			newErrors.user_phone = "Phone number is required";
			isFormValid = false;
		}

		if (!form.current?.user_message.value) {
			newErrors.user_message = "Message is required";
			isFormValid = false;
		}

		setErrors(newErrors);
		return isFormValid;
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsLoading(true);

		if (form.current) {
			emailjs
				.sendForm(
					import.meta.env.VITE_SERVICE_ID!,
					import.meta.env.VITE_TEMPLATE_ID!,
					form.current,
					{
						publicKey: import.meta.env.VITE_PUBLIC_KEY!,
					}
				)
				.then(
					() => {
						console.log("SUCCESS!");
						const button = document.querySelector('button[type="submit"]');
						if (button) {
							const rect = button.getBoundingClientRect();
							const x = rect.left + rect.width / 2;
							const y = rect.top + rect.height / 2;
							confetti({
								origin: {
									x: x / window.innerWidth,
									y: y / window.innerHeight,
								},
								spread: 70,
								scalar: 1.2,
								particleCount: 100,
								startVelocity: 30,
							});
						}
						toast({
							title: "Thank You for Reaching Out!",
							description:
								"Your message has been successfully sent. I'll get back to you as soon as possible. Have a great day!",
						});
						onClose?.();
						form.current?.reset();
						setIsLoading(false);
					},
					(error) => {
						console.log("FAILED...", error.text);
						toast({
							title: "Message Delivery Failed",
							description:
								"Unfortunately, we couldn't send your message. Please try again later.",
						});
						setIsLoading(false);
					}
				);
		}
	};

	return (
		<div
			className={cn(
				"max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8",
				!removeBackground &&
					"shadow-input bg-gray-100/80 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800"
			)}>
			<form ref={form} onSubmit={sendEmail}>
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
					<LabelInputContainer>
						<Label htmlFor="firstname" className="text-gray-700 dark:text-neutral-300">
							First name
						</Label>
						<Input
							id="firstname"
							name="user_name"
							placeholder="Will"
							type="text"
							className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100"
						/>
						{errors.user_name && (
							<span className="text-red-500 text-sm">{errors.user_name}</span>
						)}
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="lastname" className="text-gray-700 dark:text-neutral-300">
							Last name
						</Label>
						<Input
							id="lastname"
							name="user_lastname"
							placeholder="Smith"
							type="text"
							className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100"
						/>
						{errors.user_lastname && (
							<span className="text-red-500 text-sm">{errors.user_lastname}</span>
						)}
					</LabelInputContainer>
				</div>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="email" className="text-gray-700 dark:text-neutral-300">
						Email Address
					</Label>
					<Input
						id="email"
						name="user_email"
						placeholder="example@gmail.com"
						type="email"
						className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100"
					/>
					{errors.user_email && (
						<span className="text-red-500 text-sm">{errors.user_email}</span>
					)}
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="phone" className="text-gray-700 dark:text-neutral-300">
						Phone Number
					</Label>
					<Input
						id="phone"
						name="user_phone"
						placeholder="123-456-7890"
						type="text"
						className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100"
					/>
					{errors.user_phone && (
						<span className="text-red-500 text-sm">{errors.user_phone}</span>
					)}
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="message" className="text-gray-700 dark:text-neutral-300">
						Message
					</Label>
					<Textarea
						id="message"
						name="user_message"
						placeholder="Your message here..."
						className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-gray-900 dark:text-neutral-100 min-h-[120px] focus-visible:ring-neutral-300 dark:focus-visible:ring-neutral-600"
					/>
					{errors.user_message && (
						<span className="text-red-500 text-sm">{errors.user_message}</span>
					)}
				</LabelInputContainer>

				<Button
					type="submit"
					disabled={isLoading}
					className="w-full relative inline-flex h-12 overflow-hidden rounded-md p-[1px] text-sm font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white dark:bg-slate-950 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white shadow-lg backdrop-blur-3xl">
						<span className="relative flex items-center z-10">
							{isLoading ? "Sending..." : "Submit"}
							{isLoading && <Loader2 className="ml-2 animate-spin" />}
						</span>
					</span>
				</Button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
