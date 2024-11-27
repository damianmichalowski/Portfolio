/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
	AnimatePresence,
	MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

type FloatingDockItem = {
	title: string;
	icon: React.ReactNode;
	href?: string;
	onClick?: () => void;
};

export const FloatingDock = ({
	items,
	desktopClassName,
	mobileClassName,
}: {
	items: FloatingDockItem[];
	desktopClassName?: string;
	mobileClassName?: string;
}) => {
	return (
		<>
			<FloatingDockDesktop items={items} className={desktopClassName} />
			<FloatingDockMobile items={items} className={mobileClassName} />
		</>
	);
};

const FloatingDockMobile = ({
	items,
	className,
}: {
	items: FloatingDockItem[];
	className?: string;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<div className={cn("relative block md:hidden", className)}>
			<AnimatePresence>
				{open && (
					<motion.div
						layoutId="nav"
						className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
						{items.map((item, idx) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 10 }}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
									y: 10,
									transition: {
										delay: idx * 0.05,
									},
								}}
								transition={{ delay: (items.length - 1 - idx) * 0.05 }}>
								<a
									href={item.href}
									key={item.title}
									className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center">
									<div className="h-4 w-4">{item.icon}</div>
								</a>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<button
				onClick={() => setOpen(!open)}
				className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center">
				<IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
			</button>
		</div>
	);
};

const FloatingDockDesktop = ({
	items,
	className,
}: {
	items: FloatingDockItem[];
	className?: string;
}) => {
	let mouseY = useMotionValue(Infinity);
	return (
		<motion.div
			onMouseMove={(e) => mouseY.set(e.pageY)}
			onMouseLeave={() => mouseY.set(Infinity)}
			className={cn(
				"opacity-95 hidden md:flex flex-col gap-4 items-start rounded-2xl bg-gray-100 dark:bg-neutral-900 py-3 px-[10px] overflow-visible w-[58px]",
				className
			)}>
			{items.map((item) => (
				<IconContainer mouseY={mouseY} key={item.title} {...item} />
			))}
		</motion.div>
	);
};

function IconContainer({
	mouseY,
	title,
	icon,
	href,
	onClick,
}: {
	mouseY: MotionValue;
	title: string;
	icon: React.ReactNode;
	href?: string;
	onClick?: () => void;
}) {
	let ref = useRef<HTMLDivElement>(null);

	let distance = useTransform(mouseY, (val) => {
		let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
		let center = bounds.y + bounds.height / 2;
		let scrollY = window.scrollY;
		return Math.abs(val - scrollY - center);
	});

	let widthTransform = useTransform(distance, [0, 50, 100], [70, 50, 40]);
	let heightTransform = useTransform(distance, [0, 50, 100], [70, 50, 40]);
	let widthTransformIcon = useTransform(distance, [0, 50, 100], [35, 25, 20]);
	let heightTransformIcon = useTransform(distance, [0, 50, 100], [35, 25, 20]);

	let width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 250,
		damping: 15,
	});
	let height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 250,
		damping: 15,
	});

	let widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 250,
		damping: 15,
	});
	let heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 250,
		damping: 15,
	});

	const [hovered, setHovered] = useState(false);

	let xOffset = useTransform(distance, [100, 50, 0], ["0%", "3%", "6%"]);

	const containerContent = (
		<motion.div
			ref={ref}
			style={{
				width,
				height,
				originX: 0,
				x: xOffset,
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="aspect-square rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center relative group hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors">
			{hovered && (
				<div className="absolute left-full ml-2 px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 w-fit text-xs">
					{title}
				</div>
			)}
			<motion.div
				style={{
					width: widthIcon,
					height: heightIcon,
					originX: 0,
				}}
				className="flex items-center justify-center">
				{icon}
			</motion.div>
		</motion.div>
	);

	return (
		<div onClick={onClick} style={{ cursor: "pointer" }}>
			{href ? <a href={href}>{containerContent}</a> : containerContent}
		</div>
	);
}
