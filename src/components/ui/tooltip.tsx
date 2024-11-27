import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<AnimatePresence>
		<TooltipPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				"relative z-50 overflow-hidden rounded-md px-[1px] py-[1px] text-sm text-white",
				className
			)}
			asChild
			{...props}>
			<motion.div
				initial={{ opacity: 0, y: 20, scale: 0.6 }}
				animate={{
					opacity: 1,
					y: 0,
					scale: 1,
					transition: {
						type: "spring",
						stiffness: 260,
						damping: 10,
					},
				}}
				exit={{ opacity: 0, y: 20, scale: 0.6 }}
				className="relative inline-flex h-8 overflow-hidden rounded-md p-[1px] focus:outline-none">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
					{props.children}
				</span>
			</motion.div>
		</TooltipPrimitive.Content>
	</AnimatePresence>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
