import { getTranslations } from "next-intl/server";
import { MdPlace } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Experiences",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function Experiences(props: { params: { locale: string } }) {
  return (
    <>
      <section className="px-2">
        {experiences.map((experience, index) => (
          <div key={index} className="panel">
            <div className="header">
              <div className="bg-gray-100 flex items-center p-4">
                <img
                  src={experience.logo}
                  alt={`logo-${experience.company}`}
                  width="90"
                  height="90"
                />
                <div className="mx-5">
                  <h4 className="size-sm">{experience.company}</h4>
                  <div className="w-fit flex justify-start md:justify-center items-center flex-wrap gap-2">
                    <div>{experience.position}</div>
                    <div className="flex justify-center items-center">
                      <FaCalendarAlt className="mr-3" />
                      <span className="time">{experience.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content p-4">
              <p>
                <strong>Project:&nbsp;</strong>
                <span>{experience.project}</span>
              </p>
              <p className="text-justify">{experience.description}</p>
              <ul className="pl-5 list-disc">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-justify">
                    {responsibility}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Technologies:</strong>
                <br />
                {experience.technologies}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

const experiences = [
  {
    logo: "/assets/images/company/fpt-logo.png",
    company: "FPT Software Da Nang",
    position: "Fullstack developer",
    duration: "09/2023 – Present",
    project: "LG CNS Low Code",
    description: "Participate in developing two applications for LG customer",
    responsibilities: [
      "Analyze requirements and build the screen",
      "Implement functionalities including sending email, generating PDF templates, uploading large excel file…",
      "Train team member about resolving conflict in Git",
    ],
    technologies:
      "HTML/CSS, Javascript, jQuery, JSP, Java, Spring boot, MySQL, Git, Jira, SAP, Excel, Gradle, BizActor",
  },
  {
    logo: "/assets/images/company/mgm-logo.png",
    company: "mgm technology partners",
    position: "Fullstack developer",
    duration: "09/2022 – 08/2023",
    project: "A12 Low Code Engines",
    description:
      "Develop a low-code model-oriented platform that helps developers and BA to develop, model, and create web applications rapidly without handling a lot of code",
    responsibilities: [
      "Develop and contribute to 4 modules: Overview Engine, Tree Engine, Widgets Engine and Content Engine.",
      "Develop an internal UI library (A12 Widgets)",
      "Build a Content Management System (CMS) and text-editor framework",
      "Specify the requirement and propose a solution design for a new feature or bug",
      "Write unit test and end-to-end test to ensure the quality code",
      "Review code and share knowledge across the team",
    ],
    technologies:
      "HTML/CSS, Javascript, Typescript, Reactjs, Redux, Redux Saga, styledcomponent, Cypress, Jest, Jira, Intellij, Jenkin, SonarQube, Immer, Lexical JS, Redux Devtools, Gradle, LernaJs",
  },
  {
    logo: "/assets/images/company/smartdev-logo.png",
    company: "Smartdev",
    position: "Frontend developer",
    duration: "06/2022 – 08/2022",
    project: "Smartdev platform",
    description:
      "Develop a Resource Management System (RMS) to manage project and human resource based on Antd UI library",
    responsibilities: [
      "Develop responsive UI/UX for web base on the design",
      "Implement features",
      "API Integration",
      "Work closely with backend team to integrate API, discuss about some solutions",
      "Train and support fresher about applying redux",
    ],
    technologies:
      "HTML/CSS, Antd UI, Javascript, Reactjs, Tailwindcss, Redux, Redux Saga, Jira, SourceTree, Swagger",
  },
  {
    logo: "/assets/images/company/viettel-logo.png",
    company: "Viettel Business Solution",
    position: "Software Engineer",
    duration: "02/2020 – 10/2021",
    project: "Viettel Smart Traffic Light",
    description:
      "Develop a Smart Traffic Light Control System connected to Camera",
    responsibilities: [
      "Research and document software system recommendations, include a function list, user case, legal regulations, plan implementation",
      "Be principle responsible for the overall architecture’s design and development: C4 model, functional model",
      "Collaborate with the UI/UX team",
      "Make a project plan and delegate responsibilities to a 3-member team as lead role",
      "Build the front-end interface of the software",
    ],
    technologies:
      "HTML/CSS, Bootstrap, Javascript, Reactjs, Python, Django, gRPC, Transport simulation: SUMO, VISSIM, AIMSUN, Transport Simulation",
  },
  {
    logo: "/assets/images/company/Logo_Masaryk_University.svg.png",
    company: "Masaryk University, Brno, Czech Republic",
    position: "Internship AI",
    duration: "04/2019 – 08/2019",
    project: "Data visualization in a learning process",
    description:
      "Research and development of animation software by R (programming language) in order to evaluate and analyze the results after using various classification algorithms and detecting the anomalies in Machine Learning",
    responsibilities: [
      "Apply 20 classifier algorithms and 4 outlier detection method for 33 dataset and evaluate the result",
      "Build the motion chart to show the above result",
    ],
    technologies: "HTML/CSS, Javascript, Chart.js, Google Chart Tools",
  },
];
