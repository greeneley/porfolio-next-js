"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Experiences(props: { params: { locale: string } }) {
	return (
		<>
			<div className="w-full p-4 min-h-screen">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-4xl mx-auto">
					{experiences.map((exp, companyIndex) => (
						<motion.div
							key={companyIndex}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: companyIndex * 0.1 }}>
							<Card className="mb-8 overflow-hidden border-1 border-gray-200 shadow hover:shadow-lg">
								<CardHeader className="bg-white dark:bg-gray-800 pb-2">
									<div className="flex items-center space-x-4">
										<img src={exp.logo} alt={`${exp.company} logo`} className="w-16 h-16 rounded-full" />
										<div>
											<CardTitle className="text-2xl text-gray-800 dark:text-white">{exp.company}</CardTitle>
											<p className="text-sm text-gray-500 dark:text-gray-400">
												{exp.position} | {exp.duration}
											</p>
										</div>
									</div>
								</CardHeader>
								<CardContent className="pt-4">
									{exp.projects.map((project, projectIndex) => (
										<div key={projectIndex} className="mb-6 last:mb-0">
											<h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
											<p className="text-sm mb-3 text-gray-600 dark:text-gray-300">{project.description}</p>
											<h4 className="font-medium mb-2 text-sm text-justify text-gray-700 dark:text-gray-200">
												Responsibilities:
											</h4>
											<ul className="list-disc list-inside mb-3 text-sm text-gray-600 dark:text-gray-300">
												{project.responsibilities.map((resp, rIndex) => (
													<li key={rIndex} className="mb-1 text-justify">
														{resp}
													</li>
												))}
											</ul>
											<h4 className="font-medium mb-2 text-sm text-gray-700 dark:text-gray-200">Technologies:</h4>
											<div className="flex flex-wrap gap-2 mb-4">
												{project.technologies.split(", ").map((tech, tIndex) => (
													<Badge
														key={tIndex}
														variant="secondary"
														className="text-xs bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
														{tech}
													</Badge>
												))}
											</div>
											{projectIndex < exp.projects.length - 1 && <Separator className="my-4" />}
										</div>
									))}
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
}

const experiences = [
	{
		logo: "/assets/images/company/fpt-logo.png",
		company: "FPT Software Da Nang",
		position: "Fullstack developer",
		duration: "09/2023 – Present",
		projects: [
			{
				name: "LG CNS Low Code",
				description: "Participate in developing two applications for LG customer: HR Core and Onboarding",
				responsibilities: [
					"Analyze requirements and build the screen",
					"Implement functionalities such as schedule a batch email, upload large excel file, build tree diagram, …",
					"Generate reports from SQL database by using OzReport",
					"Build multi-tenant API",
					"Review code and support member teams: tech knowledge, review code, manage branch, train new colleague, …"
				],
				technologies:
					"HTML/CSS, Javascript, jQuery, JSP, Java, Spring boot, MySQL, Git, Jira, SAP, Excel, Gradle, BizActor, OzReport"
			}
		]
	},
	{
		logo: "/assets/images/company/mgm-logo.png",
		company: "mgm technology partners",
		position: "Fullstack developer",
		duration: "09/2022 – 08/2023",
		projects: [
			{
				name: "A12 Low Code Engines",
				description:
					"Develop a low-code model-oriented platform that helps developers and BA to develop, model, and create web applications rapidly without handling a lot of code",
				responsibilities: [
					"Develop and contribute to 4 modules: Overview Engine, Tree Engine, Widgets Engine and Content Engine.",
					"Develop an internal UI library (A12 Widgets)",
					"Build a Content Management System (CMS) and text-editor framework",
					"Specify the requirement and propose a solution design for a new feature or bug",
					"Write unit test and end-to-end test to ensure the quality code",
					"Review code and share knowledge across the team"
				],
				technologies:
					"HTML/CSS, Javascript, Typescript, Reactjs, Redux, Redux Saga, styledcomponent, Cypress, Jest, Jira, Intellij, Jenkin, SonarQube, Immer, Lexical JS, Redux Devtools, Gradle, LernaJs"
			}
		]
	},
	{
		logo: "/assets/images/company/smartdev-logo.png",
		company: "Smartdev",
		position: "Frontend developer",
		duration: "06/2022 – 08/2022",
		projects: [
			{
				name: "Smartdev platform",
				description:
					"Develop a Resource Management System (RMS) to manage project and human resource based on Antd UI library",
				responsibilities: [
					"Develop responsive UI/UX for web base on the design",
					"Implement features",
					"API Integration",
					"Work closely with backend team to integrate API, discuss about some solutions",
					"Train and support fresher about applying redux"
				],
				technologies:
					"HTML/CSS, Antd UI, Javascript, Reactjs, Tailwindcss, Redux, Redux Saga, Jira, SourceTree, Swagger"
			}
		]
	},
	{
		logo: "/assets/images/company/viettel-logo.png",
		company: "Viettel Business Solution",
		position: "Software Engineer",
		duration: "02/2020 – 10/2021",
		projects: [
			{
				name: "Viettel Smart Traffic Light",
				description: "Develop a Smart Traffic Light Control System connected to Camera",
				responsibilities: [
					"Research and document software system recommendations, include a function list, user case, legal regulations, plan implementation",
					"Be principle responsible for the overall architecture’s design and development: C4 model, functional model",
					"Collaborate with the UI/UX team",
					"Make a project plan and delegate responsibilities to a 3-member team as lead role",
					"Build the front-end interface of the software"
				],
				technologies:
					"HTML/CSS, Bootstrap, Javascript, Reactjs, Python, Django, gRPC, Transport simulation: SUMO, VISSIM, AIMSUN, Transport Simulation"
			},
			{
				name: "Viettel Highway Monitoring System",
				description: "Research and develop traffic monitoring on highways",
				responsibilities: [
					"Optimize and integrate image processing function to recognize license plates, count traffic, detect violations",
					"Build a prototype version"
				],
				technologies: "Python, YOLO, TensorFlow, HTML/CSS, jQuery, Bootstrap, Reactjs"
			},
			{
				name: "Viettel Maps",
				description: "Develop functionalities in a Viettel application map",
				responsibilities: [
					"The congestion prediction",
					"Enhance the search engine by implementing a spell checker using Natural Language Processing",
					"Crawl data from Google maps to update the Viettel Maps database"
				],
				technologies: "Python, Java, Selenium, Keras, nltk, TensorFlow, flask"
			}
		]
	},
	{
		logo: "/assets/images/company/Logo_Masaryk_University.svg.png",
		company: "Masaryk University, Brno, Czech Republic",
		position: "Internship AI",
		duration: "04/2019 – 08/2019",
		projects: [
			{
				name: "Data visualization in a learning process",
				description:
					"Research and development of animation software by R (programming language) in order to evaluate and analyze the results after using various classification algorithms and detecting the anomalies in Machine Learning",
				responsibilities: [
					"Apply 20 classifier algorithms and 4 outlier detection method for 33 dataset and evaluate the result",
					"Build the motion chart to show the above result"
				],
				technologies: "HTML/CSS, Javascript, Chart.js, Google Chart Tools"
			}
		]
	}
];
