import React, { Component } from "react";
import ReactGA from "react-ga4";

export class AboutAnimesh extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => { },
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      skills: <Skills />,
      experience: <Experience />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.send({
      hitType: "pageview",
      page: `/${screen}`,
      title: "Custom Title",
    });

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about animesh"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="animesh' education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="experience"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "experience"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="animesh' experience"
            src="./themes/Yaru/status/experience.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="animesh' skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="animesh' projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="animesh's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutAnimesh;

export const displayAboutAnimesh = () => {
  return <AboutAnimesh />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img
          className="w-full"
          src="./images/logos/about.png"
          alt="Animesh Raj Logo"
        />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          my name is <span className="font-bold">Animesh Raj</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">
            Software Engineer, Full-Stack Web and Mobile Developer
          </span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list mb-8">
        <li className=" list-pc">
          "I am a{" "}
          <span className=" font-medium">
            recently graduated Engineering Student
          </span>{" "}
          with a Bachelor's in Electronics and Communication Engineering.
          Currently, I am immersed in the world of Full Stack Engineering at
          TCS, where I design robust solutions for Full Stack Web Applications,
          addressing critical business needs. However, my gaze is fixed on the
          horizon—I am actively{" "}
          <span className="font-bold">
            seeking full-time full stack engineer roles
          </span>{" "}
          where I can leverage my skills and passion to make a substantial
          impact. (Hit me up)"
          <a className="text-underline" href="mailto:animesh080808@gmail.com">
            <u>@animesh080808@gmail.com</u>
          </a>{" "}
          :) )
        </li>
        <li className=" mt-3 list-building">
          {" "}
          I take pleasure in developing outstanding software solutions that
          tackle practical issues.
        </li>
        <li className=" mt-3 list-time">
          {" "}
          When I'm not immersed in coding my next project, I indulge in my
          passion for delving into electronics and computer science literature
          while dedicating my time to creating tech-related courses for my
          platform
        </li>
        <li className=" mt-3 list-star">
          {" "}
          Furthermore, I harbor a keen interest in the captivating realms of
          data science and machine learning.
        </li>
      </ul>
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1 mb-8">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            University Institute of Technology, The University of Burdwan{" "}
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2019 - 2023</div>
          <div className=" text-sm md:text-base">
            Electronics and Communication Engineering
          </div>
          <div className=" text-sm md:text-base text-gray-300">
            Bachelor in Engineering
          </div>

          <div className="text-sm text-gray-300 font-bold mt-1">
            CGPA &nbsp; 7.96/10
          </div>
        </li>
        <li className="list-disc mt-5">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Jawahar Vidhya Mandir Shyamali , Ranchi
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2016 - 2018</div>
          <div className=" text-sm md:text-base">
            Physics, Chemistry, Maths and Computer Science{" "}
          </div>
          <div className=" text-sm md:text-base text-gray-300">
            AISSCE - Class 12{" "}
          </div>

          <div className="text-sm text-gray-300 font-bold mt-1">
            Percentage &nbsp; 74.2%
          </div>
        </li>
      </ul>
    </>
  );
}

function Experience() {
  const experienceList = [
    {
      name: "Tata Consultancy Services",
      date: "July 2023 - Present",
      role: "Full Stack Engineer",
      stack: [
        "React.js",
        "Node.js",
        "Typescript",
        "Java",
        "Spring Boot",
        "Hibernate",
        "MongoDB",
        "SQL",
      ],
      description: [
        "Actively involved in designing and implementing full stack web applications to address complex business challenges.",
        "Utilized a diverse technology stack including React.js, Node.js, Typescript, Java, Spring Boot, Hibernate, MongoDB, and SQL.",
        "Developed comprehensive solutions tailored to specific client requirements.",
        "Played a key role in creating RESTful APIs, frontend interfaces, and backend microservices.",
        "Provided end-to-end solutions in various business domains, such as the food industry.",
        "Demonstrated expertise in integrating multiple technologies to deliver scalable and efficient solutions.",
      ],
    },
    {
      name: "Optimum Wellness",
      date: "April 2022 - July 2022",
      role: "Full Stack Engineer",
      stack: ["Next.js", "React.js", "Node.js", "MongoDB"],
      description: [
        "Led the development of a dynamic website using Next.js, React.js, Node.js, and MongoDB, optimizing performance, SEO, and ensuring a responsive frontend.",
        "Managed and integrated secure payment processing, implementing payment gateways to deliver a user-friendly and secure transaction experience.",
        "Designed and executed a microservice architecture for efficient email communication, ensuring timely user interactions.",
        "Utilized MongoDB for data storage, managing data models and operations to ensure data integrity and high performance.",
        "Collaborated with the design team to create a user-friendly and visually appealing interface for the website.",
      ],
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Experience
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {experienceList.map((experience, index) => (
        <div key={index} className="flex w-full flex-col px-4 ">
          <div className=" border border-gray-50 border-opacity-10 rounded flex w-full flex-col p-4 ">
            <div className="text-xl md:text-2xl font-medium">
              {experience.name}
            </div>
            <div className="text-sm text-gray-400 mt-0.5">
              {experience.date}
            </div>
            <div className="text-sm md:text-base">{experience.role}</div>
            <div className="text-sm md:text-base text-gray-300">
              {experience.stack.join(", ")}
            </div>
            <ul className="text-sm md:text-base ml-4 mt-1">
              {experience.description.map((desc, descIndex) => (
                <li key={descIndex} className="list-disc mt-1">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          Proficient in various programming languages and frameworks.
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Specialize in{" "}
            <strong className="text-ubt-gedit-orange">
              front-end web development, including React.js, Next.js, JavaScript
              and TypeScript.
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Specialize in{" "}
            <strong className="text-ubt-gedit-orange">
              back-end development, encompassing Node.js, Express.js, GraphQL,
              RESTful APIs, and WebSockets.
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Specialize in{" "}
            <strong className="text-ubt-gedit-orange">
              database management, working with MongoDB, MySQL, PostgreSQL,
              SQLite, and Redis.
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Proficient in{" "}
            <strong className="text-ubt-gedit-orange">
              DevOps and deployment practices, utilizing Git, CI/CD (Jenkins),
              containerization (Docker), orchestration (Kubernetes), and cloud
              platforms (AWS and Digital Ocean).
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Experienced in{" "}
            <strong className="text-ubt-gedit-orange">
              front-end tooling, using Visual Studio Code, Webpack, Babel,
              ESLint, style preprocessors (SCSS), frontend build tools (Gulp),
              and testing frameworks (Jest and Cypress).
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Proficient in{" "}
            <strong className="text-ubt-gedit-orange">
              backend tooling, including Postman and API documentation
              (Swagger).
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Experienced in{" "}
            <strong className="text-ubt-gedit-orange">
              mobile app development using React Native and Flutter.
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Skilled in{" "}
            <strong className="text-ubt-gedit-orange">
              design and collaboration, with expertise in Figma and Git version
              control.
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Well-versed in{" "}
            <strong className="text-ubt-gedit-orange">
              security and authentication practices, including JWT for
              authentication and authorization and adherence to security best
              practices such as SSL/TLS.
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Possess additional skills in{" "}
            <strong className="text-ubt-gedit-orange">
              UI/UX design, content creation, video editing, and DevOps.
            </strong>
          </div>
        </li>

        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages , Tools & Runtime Environment
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks , Libraries & Databases
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"
              alt="animesh typeScript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000"
              alt="animesh javascript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white"
              alt="animesh c"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
              alt="animesh c++"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white"
              alt="animesh Java"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="animesh python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"
              alt="animesh dart"
            />
            <a
              href="https://www.google.com/search?q=is+html+a+language%3F"
              target="_blank"
              rel="noreferrer"
            >
              <img
                title="yes it's a language!"
                className="m-1"
                src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
                alt="animesh HTML"
              />
            </a>
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white"
              alt="animesh CSS"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff"
              alt="animesh SASS"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="animesh git"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=%23ffffff"
              alt="animesh figma"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=ffffff"
              alt="animesh nodejs"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
              alt="animesh next"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
              alt="animesh react"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB"
              alt="animesh react"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
              alt="animesh flutter"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              alt="animesh tailwind css"
            />

            <img
              className="m-1"
              src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
              alt="animesh redux"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=Spring&logoColor=white"
              alt="animesh SpringBoot"
            />

            <img
              className="m-1"
              src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white"
              alt="animesh redux"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/MySQL-00000F?style=flat&logo=mysql&logoColor=white"
              alt="animesh redux"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white"
              alt="animesh redux"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/SQLite-07405E?style=flat&logo=sqlite&logoColor=white"
              alt="animesh redux"
            />
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4 mb-8">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And of course,</span>{" "}
          <img
            className=" inline ml-1 "
            src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff"
            alt="animesh linux"
          />{" "}
          <span>!</span>
        </li>
      </ul>
    </>
  );
}

function Projects() {
  const project_list = [
    {
      name: "itsarraj.me",
      date: "March 2022",
      link: "https://github.com/itsarraj/itsarraj.me",
      description: [
        "Portfolio: Ubuntu 20.04 Theme, Built with Next.js and Tailwind CSS",
        "Designed the website to emulate the Ubuntu 20.04 theme, showcasing creativity in web design.",
        "Integrated a contact form using EmailJS for streamlined user communication.",
        "Offered detailed guidance for local setup with support for both npm and Yarn.",
        "Fostered open-source collaboration to improve project functionality.",
      ],
      domains: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "CircuitCrafter",
      date: "June 2022",
      link: "https://github.com/itsarraj/circuitcrafter",
      description: [
        ,
        "Ecommerce Platform: Crafted using React, Redux , Express, and Tailwind CSS.",
        "Implemented secure user authentication and user profile management, enhancing the shopping experience.",
        "Integrated a reliable payment gateway powered by PayPal to ensure secure transactions.",
        "Designed an appealing home page with product listings and pagination, providing a user-friendly interface.",
        "Supported both frontend and backend development and set up environment variables for easy local testing.",
        "Images are temporarily stored in memory before being uploaded to the cloud, allowing for efficient and flexible image management.",
        "Demonstrated proficiency in a tech stack that includes MongoDB, Cloudinary, and Express.",
      ],
      domains: [
        "React",
        "Redux",
        "Express",
        "Tailwind CSS",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "PayPal's Client SDK",
        "Cloudinary",
      ],
    },
  ];

  const tag_colors = {
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    html5: "pink-600",
    sass: "pink-400",
    tensorflow: "yellow-600",
    django: "green-600",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => {
        const projectNameFromLink = project.link.split("/");
        const projectName = projectNameFromLink[projectNameFromLink.length - 1];
        return (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base md:text-lg mr-2">
                    {project.name.toLowerCase()}
                  </div>
                  <iframe
                    src={`https://ghbtns.com/github-btn.html?user=itsarraj&repo=${projectName}&type=star&count=true`}
                    frameBorder="0"
                    scrolling="0"
                    width="150"
                    height="20"
                    title={project.name.toLowerCase() + "-star"}
                  ></iframe>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                    const borderColorClass = `border-${tag_colors[domain]}`;
                    const textColorClass = `text-${tag_colors[domain]}`;

                    return (
                      <span
                        key={index}
                        className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}
                      >
                        {domain}
                      </span>
                    );
                  })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/Animesh-Raj-Resume.pdf"
      title="animesh raj resume"
      frameBorder="0"
    ></iframe>
  );
}
