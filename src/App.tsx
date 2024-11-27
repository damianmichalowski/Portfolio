import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDockDemo } from "./components/FloatingDockDemo";

const App = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const technologiesRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-200 selection:text-purple-900">
				<div className="fixed top-0 -z-10 h-full w-full">
					<div className="relative h-full w-full bg-slate-950">
						<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
						<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
					</div>
				</div>

				<FloatingDockDemo
					homeRef={homeRef}
					aboutRef={aboutRef}
					technologiesRef={technologiesRef}
					experienceRef={experienceRef}
					projectsRef={projectsRef}
					contactRef={contactRef}
				/>

				<div className="container mx-auto px-8">
					<Navbar />
					<Hero ref={homeRef} />
					<About ref={aboutRef} />
					<Technologies ref={technologiesRef} />
					<Experience ref={experienceRef} />
					<Projects ref={projectsRef} />
					<Contact ref={contactRef} />
				</div>
			</div>
		</ThemeProvider>
	);
};

export default App;
