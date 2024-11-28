import { Helmet } from "react-helmet";

interface MetaTagsProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
}

const MetaTags = ({
	title = "Damian Michałowski - Frontend Developer",
	description = "Frontend Developer specializing in React, Tailwind CSS, and JavaScript. Building modern, user-friendly web applications with pixel-perfect design. Portfolio of projects and technologies I've worked with - Damian Michałowski's portfolio.",
	image = "https://portfoliodamianmichalowski.vercel.app/assets/projects/portfolio.png",
	url = "https://portfoliodamianmichalowski.vercel.app",
}: MetaTagsProps) => {
	return (
		<Helmet>
			{/* Basic meta tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="author" content="Damian Michałowski" />
			<meta httpEquiv="content-language" content="en" />
			<meta name="robots" content="index, follow" />
			<meta
				name="keywords"
				content="frontend developer, react, typescript, javascript, tailwind css, web development, portfolio, damian michałowski, poland"
			/>
			<meta name="geo.region" content="PL" />
			<meta name="geo.placename" content="Poland" />

			{/* Open Graph meta tags for social sharing */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:secure_url" content={image} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="627" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:alt" content={`${title} - Portfolio Preview`} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="en_PL" />
			<meta property="og:site_name" content="Damian Michałowski Portfolio" />

			{/* Twitter Card meta tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			{/* Additional meta tags */}
			<meta name="theme-color" content="#000000" />
			<link rel="canonical" href={url} />
		</Helmet>
	);
};

export default MetaTags;
