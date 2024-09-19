import { getTranslations } from "next-intl/server";
import { MdPlace } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "About",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function Experiences(props: { params: { locale: string } }) {
  return (
    <>
      <section className="px-2 text-base">
        <div className="panel">
          <div className="header">
            <div className="bg-gray-100 flex items-center p-4">
              <img
                src="/assets/images/company/fpt-logo.png"
                alt="logo-cvl"
                width="90"
                height="90"
              />
              <div className="mx-5">
                <h4 className="size-sm">FPT Software Da Nang</h4>
                <div className="w-fit flex justify-start md:justify-center items-center flex-wrap gap-2">
                  <div>Fullstack developer</div>
                  <div className="flex justify-center items-center">
                    <FaCalendarAlt className="mr-3" />
                    <span className="time">09/2023 – Present</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content p-4 ">
            <p>
              <strong>Project:&nbsp;</strong>
              <span>LG CNS Low Code</span>
            </p>
            <ul className="list-inside list-disc">
              <li>Analyze requirements and build the screen</li>
              <li>
                Implement functionalities including sending email, generating
                PDF templates, uploading large excel file…
              </li>
              <li>Train team member about resolving conflict in Git</li>
            </ul>
            <p>
              <strong>Technologies:</strong>
              <br />
              HTML/CSS, Javascript, jQuery, JSP, Java, Spring boot, MySQL, Git,
              Jira, SAP, Excel, Gradle, BizActor
            </p>
            {/*<hr />*/}
            {/*<div className="grid grid-cols-6">*/}
            {/*  <div>*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/html-logo.png"*/}
            {/*      alt="html"*/}
            {/*      title="html"*/}
            {/*      width="90"*/}
            {/*      height="90"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/css-logo.svg"*/}
            {/*      alt="css"*/}
            {/*      title="css"*/}
            {/*      width="90"*/}
            {/*      height="90"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/javascript-logo.png"*/}
            {/*      alt="javascript"*/}
            {/*      title="javascript"*/}
            {/*      width="90"*/}
            {/*      height="90"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="col-span-3">*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/jquery-logo.png"*/}
            {/*      alt="jquery"*/}
            {/*      title="jquery"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/java-logo.svg"*/}
            {/*      alt="java"*/}
            {/*      title="java"*/}
            {/*      width="90"*/}
            {/*      height="90"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="col-span-3">*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/spring-boot-logo.png"*/}
            {/*      alt="spring-boot"*/}
            {/*      title="spring-boot"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="col-span-2">*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/mysql-logo.png"*/}
            {/*      alt="mysql"*/}
            {/*      title="mysql"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="col-span-2">*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/sap-logo.png"*/}
            {/*      alt="sap"*/}
            {/*      title="sap"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="col-span-1">*/}
            {/*    <img*/}
            {/*      src="/assets/images/technologies/gradle-logo.png"*/}
            {/*      alt="gradle"*/}
            {/*      title="gradle"*/}
            {/*      width="90"*/}
            {/*      height="90"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="panel">
          <div className="header">
            <div className="bg-gray-100 flex items-center p-4">
              <img
                src="/assets/images/company/mgm-logo.png"
                alt="logo-mgm"
                width="90"
                height="90"
              />
              <div className="mx-5">
                <h4 className="size-sm">mgm technology partners</h4>
                <div className="w-fit flex justify-start md:justify-center items-center flex-wrap gap-2">
                  <div>Fullstack developer</div>
                  <div className="flex justify-center items-center">
                    <FaCalendarAlt className="mr-3" />
                    <span className="time">09/2022 – 08/2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content p-4">
            <p>
              <strong>Project:&nbsp;</strong>
              <span>A12 Low Code Engines</span>
            </p>
            <p>
              Develop a low-code model-oriented platform that helps developers
              and BA to develop, model, and create web applications rapidly
              without handling a lot of code
            </p>
            <ul className="list-inside list-disc">
              <li>
                Develop and contribute to 4 modules: Overview Engine, Tree
                Engine, Widgets Engine and Content Engine.
              </li>
              <li>Develop an internal UI library (A12 Widgets)</li>
              <li>
                Build a Content Management System (CMS) and text-editor
                framework
              </li>
              <li>
                Specify the requirement and propose a solution design for a new
                feature or bug
              </li>
              <li>
                Write unit test and end-to-end test to ensure the quality code
              </li>
              <li>Review code and share knowledge across the team </li>
            </ul>
            <p>
              <strong>Technologies:</strong>
              <br />
              HTML/CSS, Javascript, Typescript, Reactjs, Redux, Redux Saga,
              styledcomponent, Cypress, Jest, Jira, Intellij, Jenkin, SonarQube,
              Immer, Lexical JS, Redux Devtools, Gradle, LernaJs
            </p>
          </div>
        </div>
        <div className="panel">
          <div className="header">
            <div className="bg-gray-100 flex items-center p-4">
              <img
                src="/assets/images/company/smartdev-logo.png"
                alt="logo-smartdev"
                width="90"
                height="90"
              />
              <div className="mx-5">
                <h4 className="size-sm">Smartdev</h4>
                <div className="w-fit flex justify-start md:justify-center items-center flex-wrap gap-2">
                  <div>Frontend developer</div>
                  <div className="flex justify-center items-center">
                    <FaCalendarAlt className="mr-3" />
                    <span className="time">06/2022 – 08/2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content p-4">
            <p>
              <strong>Project:&nbsp;</strong>
              <span>Smartdev platform</span>
            </p>
            <p>
              Develop a Resource Management System (RMS) to manage project and
              human resource based on Antd UI library
            </p>
            <p>
              Develop a Resource Management System (RMS) to manage project and
              human resource based on Antd UI library
            </p>
            <ul className="list-inside list-disc">
              <li>Develop responsive UI/UX for web base on the design</li>
              <li>Implement features</li>
              <li>API Integration</li>
              <li>
                Work closely with backend team to integrate API, discuss about
                some solutions
              </li>
              <li>Train and support fresher about applying redux </li>
            </ul>
            <p>
              <strong>Technologies:</strong>
              <br />
              HTML/CSS, Antd UI, Javascript, Reactjs, Tailwindcss, Redux, Redux
              Saga, Jira, SourceTree, Swagger
            </p>
          </div>
        </div>
        <div className="panel">
          <div className="header">
            <div className="bg-gray-100 flex items-center p-4">
              <img
                src="/assets/images/company/viettel-logo.png"
                alt="logo-viettel"
                width="90"
                height="90"
              />
              <div className="mx-5">
                <h4 className="size-sm">Viettel Business Solution</h4>
                <div className="w-fit flex justify-start md:justify-center items-center flex-wrap gap-2">
                  <div>Software Engineer</div>
                  <div className="flex justify-center items-center">
                    <FaCalendarAlt className="mr-3" />
                    <span className="time">02/2020 – 10/2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content p-4">
            <p>
              <strong>Project:&nbsp;</strong>
              <span>Viettel Smart Traffic Light</span>
            </p>
            <p>
              Develop a Smart Traffic Light Control System connected to Camera
            </p>
            <ul className="list-inside list-disc">
              <li>
                Research and document software system recommendations, include a
                function list, user case, legal regulations, plan implementation
              </li>
              <li>
                Be principle responsible for the overall architecture’s design
                and development: C4 model, functional model
              </li>
              <li>Collaborate with the UI/UX team</li>
              <li>
                Make a project plan and delegate responsibilities to a 3-member
                team as lead role
              </li>
              <li>Build the front-end interface of the software</li>
            </ul>
            <p>
              <strong>Technologies:</strong>
              <br />
              HTML/CSS, Bootstrap, Javascript, Reactjs, Python, Django, gRPC,
              Transport simulation: SUMO, VISSIM, AIMSUN, Transport Simulation
            </p>
          </div>
          <hr />
          <div className="content p-4">
            <p>
              <strong>Project:&nbsp;</strong>
              <span>Viettel Highway Monitoring System</span>
            </p>
            <p>Research and develop traffic monitoring on highways</p>
            <ul className="list-inside list-disc">
              <li>
                Optimize and integrate image processing function to recognize
                license plates, count traffic, detect violations
              </li>
              <li>Build a MVP version</li>
            </ul>
            <p>
              <strong>Technologies:</strong>
              <br />
              Python, YOLO, TensorFlow, HTML/CSS, jQuery, Bootstrap, Reactjs
            </p>
          </div>
          <hr />
          <div className="content p-4">
            <p>
              <strong>Project:&nbsp;</strong>
              <span>Viettel Maps</span>
            </p>
            <p>
              Develop functionalities in a Viettel application map: + The
              congestion prediction + Enhance the search engine by implementing
              a spell checker using Natural Language Processing + Crawl data
              from Google maps to update the Viettel Maps database
            </p>
            <ul className="list-inside list-disc">
              <li>Analyze requirements and research the solution</li>
              <li>Coding base on requirement</li>
              <li>Crawl data</li>
            </ul>
            <p>
              <strong>Technologies:</strong>
              <br />
              Python, Java, Selenium, Keras, nltk, TensorFlow, flask
            </p>
          </div>
        </div>
        <div className="panel">
          <div className="header">
            <div className="bg-gray-100 flex items-center p-4">
              <img
                src="/assets/images/company/Logo_Masaryk_University.svg.png"
                alt="logo-masaryk"
                width="90"
                height="90"
              />
              <div className="mx-5">
                <h4 className="size-sm">
                  Masaryk University, Brno, Czech Republic
                </h4>
                <div className="w-fit flex justify-start md:justify-center items-center flex-wrap gap-2">
                  <div>Internship AI</div>
                  <div className="flex justify-center items-center">
                    <FaCalendarAlt className="mr-3" />
                    <span className="time">04/2019 – 08/2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content p-4">
            <p>
              <strong>Project:&nbsp;</strong>
              <span>Data visualization in a learning process</span>
            </p>
            <p>
              Research and development of animation software by R (programming
              language) in order to evaluate and analyze the results after using
              various classification algorithms and detecting the anomalies in
              Machine Learning
            </p>
            <ul className="list-inside list-disc">
              <li>
                Apply 20 classifier algorithms and 4 outlier detection method
                for 33 dataset and evaluate the result
              </li>
              <li>Build the motion chart to show the above result</li>
            </ul>
            <p>
              <strong>Technologies:</strong>
              <br />
              HTML/CSS, Javascript, Chart.js, Google Chart Tools
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
