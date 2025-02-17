export const HERO_CONTENT = `Hi, I’m Damian – a Frontend Developer.
I specialize in building modern, user-friendly web applications using React, Tailwind CSS, and JavaScript. Passionate about pixel-perfect design and creating seamless user experiences.`;

export const ABOUT_TEXT = `I am a dedicated frontend developer with experience in crafting visually appealing and user-friendly web applications. I have contributed to impactful projects such as a Forex High-Frequency Trading Application and an Internal Banking System, where I designed intuitive UX layouts, developed reusable components, and implemented real-time features.

As an attentive and detail-oriented individual, I possess an unwavering commitment to perfection. With a keen eye for visual precision down to the pixel, I have harbored a lifelong passion for all things IT. My academic pursuits stand as proof of my desire to approach programming professionally, showcasing my ongoing commitment to learning.

Responsibility is ingrained in my work ethic, reflected in my diverse background in front-end development. While my journey began with graphic design and video production, my enduring fascination with programming has been constant. I am driven by a thirst for new knowledge, perpetually seeking opportunities to expand my skill set and deliver measurable business value.`;

export const EXPERIENCES = [
	{
		year: "February 2025 - Present",
		role: "Front-End Developer React",
		company: "Accenture",
		description: `Developing user-friendly web applications using modern technologies like React, JavaScript, TypeScript. My responsibilities include building responsive UI components, optimizing performance, and collaborating with backend developers, UX designers, and business analysts to deliver high-quality digital solutions. I follow best coding practices, ensure accessibility, and contribute to improving development processes. My work allows me to participate in large-scale projects, leverage cloud platforms, and stay up-to-date with the latest industry trends.`,
		technologies: ["React", "TypeScript", "JavaScript", "Tailwind"],
	},
	{
		year: "August 2022 - February 2025",
		role: "Front-End Developer",
		company: "SKILL AND CHILL",
		description: `Delivered high-quality visual aesthetics for the system.
    Fixed interface errors and glitches.
    Developed new components, screens, and integrated database queries.
    Implemented real-time group chat interface with chatbot integration.`,
		technologies: ["React", "JavaScript", "Sass", "CSS", "HTML"],
	},
	{
		year: "July 2023 - November 2023",
		role: "Front-End Developer",
		company: "SoftProdukt",
		description: `Designed an intuitive UX layout for the application. Developed reusable components and enhanced functionality with scripts. Integrated Django, HTMX, JavaScript, and Sass seamlessly.`,
		technologies: ["HTMX", "Sass", "CSS", "JavaScript", "HTML", "Django"],
		reference: "../assets/documents/reference_softProdukt.pdf",
	},
	{
		year: "July 2015 - August 2022",
		role: "Graphic designer / Video editor",
		company: "Freelancing",
		description: `Crafted logos and posters tailored to client specifications and preferences. Edited images utilizing Adobe Photoshop and Illustrator. Produced and edited music videos, concert clips, and event highlights using Adobe Premiere.`,
		technologies: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere"],
	},
];

export const PROJECTS = [
	{
		title: "Game2D",
		image: "../../assets/gallery/Isaac-1.png",
		description:
			"A 2D roguelike game developed in C++ using SFML, inspired by The Binding of Isaac: Rebirth. The project features randomly generated dungeon rooms, a player character navigating through them, and enemy encounters. The game includes collision detection, an FPS counter, and simple combat mechanics with projectile-based attacks. Enemies have basic AI behaviors, and defeating them unlocks room exits. The system supports obstacles, and different enemy types. The goal was to implement core gameplay mechanics while learning SFML and game development principles.",
		technologies: [
			"C++",
			"SFML"
		],
		link: "https://youtu.be/acCnUTM4C5Y",
		github: "https://github.com/damianmichalowski/Game2D",
		gallery: [
			"../../assets/gallery/Isaac-1.png",
			"../../assets/gallery/Isaac-2.png",
			"../../assets/gallery/Isaac-3.png",
			"../../assets/gallery/Isaac-4.png",
		],
	},
	{
		title: "Movies Browser",
		image: "../../assets/gallery/movies-browser-movies.png",
		description:
			"Movies Browser is a simple site that contains all your favorite movies. You can search for a movie or an actor on it.",
		technologies: [
			"React",
			"Redux",
			"JavaScript (ES6+)",
			"Styled Components",
			"CSS",
		],
		link: "https://marcin-malek.github.io/movies-browser/#/movies/page=1",
		github: "https://github.com/damianmichalowski/Movies-Browser",
		gallery: [
			"../../assets/gallery/movies-browser-movies.png",
			"../../assets/gallery/movies-browser-people.png",
			"../../assets/gallery/movies-browser-movie-card.png",
			"../../assets/gallery/movies-browser-movie-poster.png",
			"../../assets/gallery/movies-browser-movie-description.png",
			"../../assets/gallery/movies-browser-people-card.png",
			"../../assets/gallery/movies-browser-people-description.png",
		],
	},
	{
		title: "Portfolio Website",
		image: "../../assets/gallery/portfolio-hero_dark.png",
		description:
			"A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include dark/light theme switching, smooth animations using Framer Motion, a floating navigation dock, contact form integration with EmailJS, and interactive UI components. The site showcases my projects, skills, and professional experience with a clean, minimalist design.",
		technologies: ["React", "Typescript", "Tailwind"],
		link: "#hero",
		github: "https://github.com/damianmichalowski/Portfolio",
		gallery: [
			"../../assets/gallery/portfolio-hero_dark.png",
			"../../assets/gallery/portfolio-hero_light.png",
			"../../assets/gallery/portfolio-about_dark.png",
			"../../assets/gallery/portfolio-about_light.png",
			"../../assets/gallery/portfolio-technologies_dark.png",
			"../../assets/gallery/portfolio-technologies_light.png",
			"../../assets/gallery/portfolio-projects_dark.png",
			"../../assets/gallery/portfolio-projects_light.png",
			"../../assets/gallery/portfolio-contact_dark.png",
			"../../assets/gallery/portfolio-contact_light.png",
		],
	},
	{
		title: "Internal Banking System",
		image: "../../assets/gallery/bzone-1.png",
		description:
			"Contributed to Business Zone, a comprehensive procurement platform (P2P) at SKILL AND CHILL. The system features budget planning, supplier management, purchase order processing, document archiving, and HR resources. Implemented with multi-language support and advanced reporting capabilities.",
		technologies: ["React", "JavaScript", "Sass", "SQL", "CSS", "HTML"],
		link: "https://business-zone.eu/pl/",
	},
	{
		title: "Forex High-Frequency Trading Application",
		image: "../../assets/gallery/forex-1.png",
		description:
			"Developed at SoftProdukt, this application assists traders in market analysis and trading automation. Features include customizable trading settings, automated process management, comprehensive data analysis tools, and trading strategy optimization.",
		technologies: ["JavaScript", "HTMX", "Sass", "CSS", "Django"],
		link: "../assets/documents/reference_softProdukt.pdf",
	},
	{
		title: "Anime Vault",
		image: "../../assets/gallery/anime-vault-1.png",
		description:
			"An anime discovery platform featuring infinite scroll functionality and a search system. Users can explore a vast collection of anime titles, view details, and find new series through an intuitive interface powered by the Shikimori API.",
		technologies: ["NEXT.JS", "CSS", "Tailwind"],
		link: "https://anime-vault-black.vercel.app/",
		github: "https://github.com/damianmichalowski/Anime-Vault",
		gallery: [
			"../../assets/gallery/anime-vault-1.png",
			"../../assets/gallery/anime-vault-2.png",
			"../../assets/gallery/anime-vault-3.png",
			"../../assets/gallery/anime-vault-4.png",
		],
	},
	{
		title: "Rocket Hero",
		image: "../../assets/gallery/rocket-hero-1.png",
		description:
			"A space-themed landing page showcasing a fictional rocket company with sleek, modern aesthetics. Built to master Tailwind CSS fundamentals, featuring dynamic theme switching that respects system preferences, full-height responsive sections  - all implemented using Tailwind's utility-first approach.",
		technologies: ["Tailwind", "HTML"],
		link: "https://rocket-hero.onrender.com/",
		github: "https://github.com/damianmichalowski/Rocket-hero",
		gallery: [
			"../../assets/gallery/rocket-hero-1.png",
			"../../assets/gallery/rocket-hero-2.png",
			"../../assets/gallery/rocket-hero-3.png",
			"../../assets/gallery/rocket-hero-4.png",
		],
	},
	// {
	// 	title: "To do list",
	// 	image: "../../assets/gallery/todo-1.png",
	// 	description:
	// 		"A clean and intuitive task management application built with React and Tailwind CSS. Features include task creation, completion tracking, and browser-based storage for persistent data across sessions, all wrapped in a modern, responsive interface. 😉",
	// 	technologies: ["React", "Tailwind"],
	// 	link: "https://react-todo-list-2wsr.onrender.com/",
	// 	github: "https://github.com/damianmichalowski/react-todo-list",
	// 	gallery: [
	// 		"../../assets/gallery/todo-1.png",
	// 		"../../assets/gallery/todo-2.png",
	// 		"../../assets/gallery/todo-3.png",
	// 		"../../assets/gallery/todo-4.png",
	// 	],
	// },
];

export const SOCIAL_MEDIA = {
	linkedin: "https://www.linkedin.com/in/damian-michałowski-6b66a5243",
	github: "https://github.com/DamianMichalowski",
};

export const DOCUMENTS = {
	resume: "../assets/documents/Damian_Michałowski_Resume.pdf",
	referenceSoftProdukt: "../assets/documents/reference_softProdukt.pdf",
};

export const IMAGES = {
	about: "../assets/about.png",
	hero: "../assets/damianMichalowskiProfile.png",
};
