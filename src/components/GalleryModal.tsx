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
	const [showLeftScroll, setShowLeftScroll] = useState(false);
	const [showRightScroll, setShowRightScroll] = useState(false);

	const checkScrollButtons = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				scrollContainerRef.current;
			setShowLeftScroll(scrollLeft > 0);
			setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
		}
	};

	// Initial check for scroll buttons
	useEffect(() => {
		checkScrollButtons();
		// Add resize listener to recheck when window size changes
		window.addEventListener("resize", checkScrollButtons);
		return () => window.removeEventListener("resize", checkScrollButtons);
	}, [images]);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = 200;
			scrollContainerRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
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
						className="bg-white dark:bg-neutral-900 rounded-xl p-6 w-full max-w-7xl max-h-[90vh] overflow-y-auto"
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
							{showLeftScroll && images.length > 1 && (
								<motion.button
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onClick={() => scroll("left")}
									className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-neutral-800/80 rounded-full p-2 shadow-lg backdrop-blur-sm">
									<ChevronLeft className="h-6 w-6 text-neutral-700 dark:text-neutral-200" />
								</motion.button>
							)}

							{/* Thumbnails Container with staggered animation */}
							<div
								ref={scrollContainerRef}
								onScroll={checkScrollButtons}
								className="flex gap-4 overflow-x-auto scrollbar-hide px-12 py-2 scroll-smooth bg-white dark:bg-neutral-900">
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
												transition: { duration: 0.2 }
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
							{showRightScroll && images.length > 1 && (
								<motion.button
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onClick={() => scroll("right")}
									className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-neutral-800/80 rounded-full p-2 shadow-lg backdrop-blur-sm">
									<ChevronRight className="h-6 w-6 text-neutral-700 dark:text-neutral-200" />
								</motion.button>
							)}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
