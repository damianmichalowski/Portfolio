import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDockDemo } from "./components/FloatingDockDemo";
import { Toaster } from "./components/ui/toaster";

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-200 selection:text-purple-900 scroll-smooth">
				<div className="fixed top-0 -z-10 h-full w-full">
					<div className="relative h-full w-full bg-slate-950">
						<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
						<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
					</div>
				</div>

				<FloatingDockDemo />

				<div className="container mx-auto px-8">
					<Navbar />
					<Hero />
					<About />
					<Technologies />
					<Experience />
					<Projects />
					<Contact />
				</div>
			</div>
			<Toaster />
		</ThemeProvider>
	);
};

export default App;
