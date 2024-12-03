import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import BlurImage from "./ui/BlurImage";

interface GalleryModalProps {
	isOpen: boolean;
	onClose: () => void;
	images: string[];
	selectedImage: string;
	onImageSelect: (image: string) => void;
}

const modalVariants: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const contentVariants: Variants = {
	initial: { scale: 0.9, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
	exit: { scale: 0.9, opacity: 0 },
};

const imageVariants: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

const buttonVariants: Variants = {
	initial: { opacity: 0, y: "-50%" },
	animate: { opacity: 1, y: "-50%" },
	exit: { opacity: 0, y: "-50%" },
	tap: { scale: 0.9, y: "-50%" },
};

export const GalleryModal: React.FC<GalleryModalProps> = ({
	isOpen,
	onClose,
	images,
	selectedImage,
	onImageSelect,
}) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right"): void => {
		if (!scrollContainerRef.current) return;

		const currentIndex = images.indexOf(selectedImage);
		const nextIndex =
			direction === "left"
				? currentIndex <= 0
					? images.length - 1
					: currentIndex - 1
				: currentIndex >= images.length - 1
				? 0
				: currentIndex + 1;

		const thumbnailElements = scrollContainerRef.current.children;
		const nextThumbnail = thumbnailElements[nextIndex] as HTMLElement;

		nextThumbnail?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});

		onImageSelect(images[nextIndex]);
	};

	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				variants={modalVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
				onClick={onClose}>
				<div className="container mx-auto h-full p-4 flex items-center justify-center">
					<motion.div
						variants={contentVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6 w-full max-w-7xl max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}>
						<div className="flex justify-end">
							<button
								onClick={onClose}
								className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
								<X className="h-6 w-6 text-neutral-500" />
							</button>
						</div>

						<div className="mb-6">
							<BlurImage
								key={selectedImage}
								src={selectedImage}
								alt="Selected"
								className="w-full sm:h-[500px] h-[300px] object-contain rounded-lg"
							/>
						</div>

						<div className="relative">
							{images.length > 1 && (
								<>
									<motion.button
										variants={buttonVariants}
										initial="initial"
										animate="animate"
										exit="exit"
										whileTap="tap"
										onClick={() => scroll("left")}
										className="absolute left-0 top-1/2 z-10 bg-neutral-200/80 dark:bg-neutral-700/80 rounded-full p-2 shadow-lg backdrop-blur-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 active:bg-neutral-400 dark:active:bg-neutral-500 transition-colors">
										<ChevronLeft className="h-6 w-6 text-neutral-800 dark:text-white" />
									</motion.button>

									<motion.button
										variants={buttonVariants}
										initial="initial"
										animate="animate"
										exit="exit"
										whileTap="tap"
										onClick={() => scroll("right")}
										className="absolute right-0 top-1/2 z-10 bg-neutral-200/80 dark:bg-neutral-700/80 rounded-full p-2 shadow-lg backdrop-blur-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 active:bg-neutral-400 dark:active:bg-neutral-500 transition-colors">
										<ChevronRight className="h-6 w-6 text-neutral-800 dark:text-white" />
									</motion.button>
								</>
							)}

							<div
								ref={scrollContainerRef}
								className="flex gap-4 overflow-x-auto scrollbar-hide px-12 py-2 scroll-smooth bg-neutral-100 dark:bg-neutral-900">
								{images.length > 1 ? (
									images.map((image, index) => (
										<motion.div
											key={image}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.3,
												delay: index * 0.1,
											}}
											whileHover={{
												scale: 1.05,
												transition: { duration: 0.2 },
											}}
											className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden ${
												selectedImage === image
													? "[outline:2px_solid_theme(colors.purple.500)] outline-offset-2"
													: ""
											}`}>
											<BlurImage
												src={image}
												alt={`Thumbnail ${index + 1}`}
												className="w-48 h-32 object-cover"
												onClick={() => onImageSelect(image)}
											/>
										</motion.div>
									))
								) : (
									<div className="flex items-center justify-center w-full h-32 text-neutral-500">
										No additional images available
									</div>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
