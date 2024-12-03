import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Layout from "./components/layout/Layout";

const App = () => {
	return (
		<Layout>
			<Navbar />
			<Hero />
			<About />
			<Technologies />
			<Experience />
			<Projects />
			<Contact />
		</Layout>
	);
};

export default App;
