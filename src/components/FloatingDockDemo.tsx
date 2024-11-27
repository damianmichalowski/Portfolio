import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
	IconPhone,
	IconHome,
	IconStack2,
	IconCode,
	IconInfoSquare,
	IconPresentation,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsVisible(scrollTop > 0);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const links = [
		{
			title: "Hero",
			icon: (
				<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#hero",
		},
		{
			title: "About",
			icon: (
				<IconInfoSquare className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#about",
		},
		{
			title: "Technologies",
			icon: (
				<IconStack2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#technologies",
		},
		{
			title: "Experience",
			icon: (
				<IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#experience",
		},
		{
			title: "Projects",
			icon: (
				<IconPresentation className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#projects",
		},
		{
			title: "Contact",
			icon: (
				<IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#contact",
		},
	];

	return (
		<div
			className={`fixed left-2 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 ${
				!isVisible ? "opacity-0" : "opacity-100"
			}`}>
			<FloatingDock
				desktopClassName="translate-x-0"
				mobileClassName="fixed bottom-8 right-8"
				items={links}
			/>
		</div>
	);
}
