import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
}

const MetaTags = ({
	title = "Damian Michałowski - Frontend Developer",
	description = "Frontend Developer specializing in React, Tailwind CSS, and JavaScript. Building modern, user-friendly web applications with pixel-perfect design. Explore Damian Michałowski's portfolio.",
	image = "/portfolioMeta.png",
	url = "https://portfoliodamianmichalowski.vercel.app",
}: MetaTagsProps) => {
	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="author" content="Damian Michałowski" />
			<meta name="keywords" content="frontend developer, react, javascript, tailwind css, web development, portfolio" />

			{/* Open Graph Meta Tags */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Damian Michałowski Portfolio" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter Card Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:creator" content="@DamianMichałowski" />

			{/* Additional Meta Tags */}
			<link rel="canonical" href={url} />
			<meta name="theme-color" content="hsl(var(--background))" />
		</Helmet>
	);
};

export default MetaTags;
