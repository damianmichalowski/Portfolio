import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface GalleryModalProps {
	isOpen: boolean;
	onClose: () => void;
	images: string[];
	selectedImage: string;
	onImageSelect: (image: string) => void;
}

export const GalleryModal = ({
	isOpen,
	onClose,
	images,
	selectedImage,
	onImageSelect,
}: GalleryModalProps) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			// Find current image index
			const currentIndex = images.indexOf(selectedImage);
			let nextIndex;

			if (direction === "left") {
				nextIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;
			} else {
				nextIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
			}

			// Get the thumbnail element and scroll it into view
			const thumbnailElements = scrollContainerRef.current.children;
			const nextThumbnail = thumbnailElements[nextIndex] as HTMLElement;

			if (nextThumbnail) {
				nextThumbnail.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center",
				});
			}

			onImageSelect(images[nextIndex]);
		}
	};

	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
				onClick={onClose}>
				<div className="container mx-auto h-full p-4 flex items-center justify-center">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6 w-full max-w-7xl max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}>
						<div className="flex justify-end">
							<button
								onClick={onClose}
								className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
								<X className="h-6 w-6 text-neutral-500" />
							</button>
						</div>

						{/* Main Image with enhanced animation */}
						<div className="mb-6">
							<motion.img
								key={selectedImage}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								src={selectedImage}
								alt="Selected"
								className="w-full sm:h-[500px] h-[300px] object-contain rounded-lg"
								onClick={(e) => e.stopPropagation()}
							/>
						</div>

						{/* Thumbnail Row Container */}
						<div className="relative">
							{/* Left Scroll Button */}
							{images.length > 1 && (
								<motion.button
									initial={{ opacity: 0, y: "-50%" }}
									animate={{ opacity: 1, y: "-50%" }}
									exit={{ opacity: 0, y: "-50%" }}
									whileTap={{ scale: 0.9, y: "-50%" }}
									onClick={() => scroll("left")}
									className="absolute left-0 top-1/2 z-10 bg-neutral-200/80 dark:bg-neutral-700/80 rounded-full p-2 shadow-lg backdrop-blur-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 active:bg-neutral-400 dark:active:bg-neutral-500 transition-colors">
									<ChevronLeft className="h-6 w-6 text-neutral-800 dark:text-white" />
								</motion.button>
							)}

							{/* Thumbnails Container with staggered animation */}
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
											}`}
											onClick={() => onImageSelect(image)}>
											<img
												src={image}
												alt={`Thumbnail ${index + 1}`}
												className="w-48 h-32 object-cover"
												style={{ aspectRatio: "3/2" }}
											/>
										</motion.div>
									))
								) : (
									<div className="flex items-center justify-center w-full h-32 text-neutral-500">
										No additional images available
									</div>
								)}
							</div>

							{/* Right Scroll Button */}
							{images.length > 1 && (
								<motion.button
									initial={{ opacity: 0, y: "-50%" }}
									animate={{ opacity: 1, y: "-50%" }}
									exit={{ opacity: 0, y: "-50%" }}
									whileTap={{ scale: 0.9, y: "-50%" }}
									onClick={() => scroll("right")}
									className="absolute right-0 top-1/2 z-10 bg-neutral-200/80 dark:bg-neutral-700/80 rounded-full p-2 shadow-lg backdrop-blur-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 active:bg-neutral-400 dark:active:bg-neutral-500 transition-colors">
									<ChevronRight className="h-6 w-6 text-neutral-800 dark:text-white" />
								</motion.button>
							)}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
