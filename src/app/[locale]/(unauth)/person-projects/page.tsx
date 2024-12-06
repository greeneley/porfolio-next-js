import Link from "next/link";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata(props: { params: { locale: string } }) {
	const t = await getTranslations({
		locale: props.params.locale,
		namespace: "Personal Projects"
	});

	return {
		title: t("meta_title"),
		description: t("meta_description")
	};
}

const techColors: { [key: string]: string } = {
	NodeJs: "bg-red-500 text-white",
	ExpressJs: "bg-orange-600 text-white",
	"Authentication JWT": "bg-yellow-500 text-black",
	Java: "bg-blue-700 text-white",
	"Spring Boot": "bg-green-600 text-white",
	"Spring Security": "bg-green-700 text-white",
	JPA: "bg-blue-500 text-white",
	Hibernate: "bg-yellow-600 text-white",
	Mapstruct: "bg-orange-500 text-white",
	ReactJs: "bg-blue-400 text-black",
	Typescript: "bg-blue-600 text-white",
	zustand: "bg-purple-600 text-white",
	SCSS: "bg-pink-500 text-white",
	MySQL: "bg-blue-800 text-white",
	VueJs: "bg-green-500 text-white",
	NextJs: "bg-black text-white",
	Tailwind: "bg-teal-500 text-white",
	"React-Markdown": "bg-blue-300 text-black",
	Netlify: "bg-teal-600 text-white",
	HTML: "bg-orange-600 text-white",
	CSS: "bg-blue-500 text-white",
	Javascript: "bg-yellow-400 text-black",
	jQuery: "bg-blue-400 text-white"
};

type ProjectProps = {
	name: string;
	time: string;
	description: string;
	technologies: string[];
	link?: string; // Optional link property
};

const Project: React.FC<ProjectProps> = ({ name, time, description, technologies, link }) => (
	<div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
		<div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-start">
			<div>
				<h3 className="text-xl font-semibold text-[#4682b4]">{name}</h3>
				{link && (
					<Link href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
						{link}
					</Link>
				)}
			</div>
			<span className="mt-1 text-sm text-gray-500 sm:mt-0">{time}</span>
		</div>
		<p className="mb-4 text-gray-700">{description}</p>
		<div className="flex flex-wrap gap-2">
			{technologies.map((tech, index) => (
				<span
					key={index}
					className={`rounded-full px-2 py-1 text-sm ${techColors[tech] || "bg-gray-200 text-gray-700"}`}>
					{tech}
				</span>
			))}
		</div>
	</div>
);

export default function PersonalProjects() {
	const projects: ProjectProps[] = [
		{
			name: "Portfolio htdinh",
			link: "https://htdinh-portfolio.netlify.app/",
			time: "09/2024",
			description: "Build the personal portfolio",
			technologies: ["NextJs"]
		},
		{
			name: "Backend E-Commerce Platform",
			time: "05/2024 - 08/2024",
			description: "Build the core backend for an e-commerce website (Nodejs backend)",
			technologies: ["NodeJs", "ExpressJs", "Authentication JWT"]
		},
		{
			name: "Book Store",
			time: "02/2023 - Present",
			description: "A website for selling book (React Frontend + Java backend)",
			technologies: [
				"Java",
				"Spring Boot",
				"Spring Security",
				"JPA",
				"Hibernate",
				"Mapstruct",
				"ReactJs",
				"Typescript",
				"zustand",
				"SCSS",
				"MySQL",
				"Authentication JWT"
			]
		},
		{
			name: "Gold Price",
			time: "07/2024 - 08/2024",
			link: "https://frontend-latest-4yht.onrender.com/",
			description:
				"Offer users a comprehensive view of the gold market trends and fluctuations, aiding them in making informed decisions regarding gold investments and transactions",
			technologies: ["VueJs", "NodeJs"]
		},
		{
			name: "Personal Blog",
			link: "https://htdinh.netlify.app/",
			time: "06/2022 - 08/2022",
			description: "A personal blog where I usually post various subjects related to personal development",
			technologies: ["ReactJs", "NextJs", "Tailwind", "SCSS", "React-Markdown", "Netlify"]
		},
		{
			name: "Code music player",
			time: "02/2022 - 03/2022",
			description: "Make a music player with a simple user interface that can play music in the browser",
			technologies: ["HTML", "CSS", "Javascript", "jQuery"]
		}
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="mb-8 text-3xl font-bold text-gray-800">Personal Projects</h1>
			<div className="space-y-6">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</div>
	);
}
