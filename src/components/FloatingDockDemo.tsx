import { useState, useEffect, RefObject } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
	IconPhone,
	IconHome,
	IconStack2,
	IconCode,
	IconInfoSquare,
	IconPresentation,
} from "@tabler/icons-react";

interface FloatingDockProps {
	homeRef: RefObject<HTMLDivElement>;
	aboutRef: RefObject<HTMLDivElement>;
	technologiesRef: RefObject<HTMLDivElement>;
	experienceRef: RefObject<HTMLDivElement>;
	projectsRef: RefObject<HTMLDivElement>;
	contactRef: RefObject<HTMLDivElement>;
}

export function FloatingDockDemo({
	homeRef,
	aboutRef,
	technologiesRef,
	experienceRef,
	projectsRef,
	contactRef,
}: FloatingDockProps) {
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

	const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
		if (ref.current) {
			// Special case for home/hero section
			if (ref === homeRef) {
				window.scrollTo({ top: 0, behavior: "smooth" });
				return;
			}

			const yOffset = -80; // Adjust this value based on your navbar height
			const y =
				ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	const links = [
		{
			title: "Hero",
			icon: (
				<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			onClick: () => scrollToRef(homeRef),
		},
		{
			title: "About",
			icon: (
				<IconInfoSquare className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			onClick: () => scrollToRef(aboutRef),
		},
		{
			title: "Technologies",
			icon: (
				<IconStack2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			onClick: () => scrollToRef(technologiesRef),
		},
		{
			title: "Experience",
			icon: (
				<IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			onClick: () => scrollToRef(experienceRef),
		},
		{
			title: "Projects",
			icon: (
				<IconPresentation className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			onClick: () => scrollToRef(projectsRef),
		},
		{
			title: "Contact",
			icon: (
				<IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			onClick: () => scrollToRef(contactRef),
		},
	];
	return (
		<div
			className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 ${
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
