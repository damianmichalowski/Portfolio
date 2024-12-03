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

interface NavLink {
	title: string;
	icon: JSX.Element;
	href: string;
}

const navLinks: NavLink[] = [
	{
		title: "Hero",
		icon: <IconHome className="h-full w-full text-gray-700 dark:text-neutral-300" />,
		href: "#hero",
	},
	{
		title: "About",
		icon: <IconInfoSquare className="h-full w-full text-gray-700 dark:text-neutral-300" />,
		href: "#about",
	},
	{
		title: "Technologies",
		icon: <IconStack2 className="h-full w-full text-gray-700 dark:text-neutral-300" />,
		href: "#technologies",
	},
	{
		title: "Experience",
		icon: <IconCode className="h-full w-full text-gray-700 dark:text-neutral-300" />,
		href: "#experience",
	},
	{
		title: "Projects",
		icon: <IconPresentation className="h-full w-full text-gray-700 dark:text-neutral-300" />,
		href: "#projects",
	},
	{
		title: "Contact",
		icon: <IconPhone className="h-full w-full text-gray-700 dark:text-neutral-300" />,
		href: "#contact",
	},
];

export const FloatingNav: React.FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = (): void => {
			const scrollTop = window.scrollY;
			setIsVisible(scrollTop > 0);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`transition-opacity duration-300 z-50 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}>
			<FloatingDock
				desktopClassName="fixed left-2 top-1/2 -translate-y-1/2 z-50"
				mobileClassName="fixed bottom-16 right-8 z-50"
				items={navLinks}
			/>
		</div>
	);
}; 