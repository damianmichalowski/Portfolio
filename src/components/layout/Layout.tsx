import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "../FloatingNav";
import { Toaster } from "../ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Background from "./Background";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Analytics />
			<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-200 selection:text-purple-900 scroll-smooth">
				<Background />
				<FloatingNav />
				<div className="container mx-auto px-8 sm:px-20">{children}</div>
			</div>
			<Toaster />
		</ThemeProvider>
	);
};

export default Layout;
