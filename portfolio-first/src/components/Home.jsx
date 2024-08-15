import React, { useEffect, useState } from "react";

const Home = () => {
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  const changeColor = () => {
    const colorClasses = ["text-palette1", "text-palette2", "text-palette3"]; // Tailwind classes
    const colorClassesBG = ["bg-[#292524]", "bg-[#273f44]", "bg-[#1e1e1e]"]; // Tailwind classes
    const randomColor =
      colorClasses[Math.floor(Math.random() * colorClasses.length)];
    const randomBgColor =
      colorClassesBG[Math.floor(Math.random() * colorClassesBG.length)];
    setTextColor(randomColor);
    setBgColor(randomBgColor);
  };

  useEffect(() => {
    changeColor(); // Change color on first render
  }, []);

  return (
    <div
      name="home"
      className={`w-auto md:w-auto lg:w-auto lg:h-auto md:h-auto sm:h-auto ${bgColor} overflow-hidden`}
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full font-mono text-white">
        {/* Header */}
        <div>
          <div className=" flex justify-between items-center pt-10 pb-10  gap-10 ">
            <div>
              <a
                className={`${textColor} font-extrabold lg:text-3xl md:text-xl sm:text-xl`}
              >
                Mohat Shil
              </a>
            </div>
            <div className="lg:text-xl md:text-xl sm:text-xl sm:flex-row sm:items-center">
              <a
                className="mx-10"
                href="https://www.linkedin.com/in/mohat-shil/"
                target="_blank"
              >
                Linkedn
              </a>
              <a href="https://github.com/shilCode" target="_blank">
                GitHub
              </a>
              <div></div>
            </div>
          </div>
        <hr/>
        {/* Software Developer in Test */}
        <div >
        <h2 className='  font-mono pt-5 lg:text-2xl md:text-2xl sm:text-xl font-bold'>Software Development Engineer in Test 📱🕸️🖥️</h2>
          <div className=' font-mono pt-5 pb-10 '>
            <ul className='pb-2'> 👋🏼 I’m Mohat Shil, a SDET with 5+ years of experience in multiple MNCs. </ul>
            <ul className='pb-2'> 🎓 Graduated in 2021 with a Computer Engineering Bachelors degree.</ul>
            <ul className='pb-2'>  🗡  As a passionate Test Automation Enthusiast, I specialize in cutting-edge technologies and testing frameworks.</ul>
            <ul className='pb-2'> 🔍 Explore my latest projects and contributions on my <a href='https://github.com/shilCode' className=' underline' target="_blank">GitHub</a>.</ul>
            <ul className='pb-2'> 📚 I'm currently learning about DevOps and Cloud Computing.</ul>
            <ul> 🎯 My goal is to learn, understand how things actually work - E2E and make systems as efficient as feasible.</ul>
          </div>
        </div>
        </div>

        {/* Experience */}
        <hr />
        <div>
          <h2 className="  font-mono pt-5 pb-4 lg:text-2xl sm:text-xl font-bold">
            Work Experience 👾
          </h2>
          <div>
            <div className=" flex pb-10 ">
              <div className=" w-1/2">
                <a href="https://global.abb/group/en" target="_blank">
                  ABB Business Services
                </a>
                <div className="ms-10 ">
                  <ul>QA Automation Engineer</ul>
                  <ul>October 2023 - Present</ul>
                  <ul>Krakow, Poland</ul>
                </div>
              </div>

              <div className=" w-1/2">
                <a href="https://www.epam.com/" target="_blank">
                  EPAM Systems
                </a>
                <div className="ms-10 ">
                  <ul>Senior Software Engineer in Test</ul>
                  <ul>May 2022 - September 2023</ul>
                  <ul>Krakow, Poland</ul>
                </div>
              </div>
            </div>
            <div className="pb-10 flex ">
              <div className=" w-1/2">
                <a href="https://www.keywordsstudios.com/en/" target="_blank">
                  Keywords Studios
                </a>
                <div className="ms-10 ">
                  <ul>QA Test Lead</ul>
                  <ul>July 2021 - April 2022</ul>
                  <ul>Katowice, Poland</ul>
                </div>
              </div>

              <div className="w-1/2">
                <a href="https://www.testroniclabs.com/" target="_blank">
                  Testronic
                </a>
                <div className="ms-10 ">
                  <ul>QA Associate Test Lead - Games</ul>
                  <ul>October 2018 - June 2021</ul>
                  <ul>Warsaw, Poland</ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <hr />
        {/* Tech Stack */}
        <div className="pb-10">
          <h2 className="  font-mono pt-5 pb-4 lg:text-2xl sm:text-xl font-bold">
            Technology Stack ⚙️
          </h2>
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div>
                🧪 E2E Testing:
                <div className="ms-10 ">
                  <a href="https://playwright.dev/" target="_blank">
                    Playwright
                  </a>
                  <br />
                  <a href="https://www.cypress.io/" target="_blank">
                    Cypress
                  </a>
                  <br />
                  <a href="https://pptr.dev/" target="_blank">
                    Puppeteer
                  </a>
                  <br />
                  <a href="https://webdriver.io/" target="_blank">
                    WebdriverIO
                  </a>
                  <br />
                  <a href="https://www.protractortest.org/#/" target="_blank">
                    Protractor
                  </a>
                  <br />
                  <a href="https://jestjs.io/" target="_blank">
                    Jest
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="flex w-1/2 ">
              <div>
                ⚓ Tools:
                <br />
                <a
                  className="ms-10 "
                  href="https://git-scm.com/"
                  target="_blank"
                >
                  Git
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://www.postman.com/"
                  target="_blank"
                >
                  Postman
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://jmeter.apache.org/"
                  target="_blank"
                >
                  Jmeter
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://www.docker.com/"
                  target="_blank"
                >
                  Docker
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://kubernetes.io/"
                  target="_blank"
                >
                  Kubernetes
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://www.jenkins.io/"
                  target="_blank"
                >
                  Jenkins
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://azure.microsoft.com/en-us/products/devops"
                  target="_blank"
                >
                  ADO Pipelines
                </a>
              </div>
            </div>
            <div className="w-1/2">
              👨‍🏫 Programming Languages:
              <div className="ms-10  ">
                <a href="https://javascript.info/" target="_blank">
                  JavaScript
                </a>
                <br />
                <a href="https://typescriptlang.org/" target="_blank">
                  TypeScript
                </a>
                <br />
              </div>{" "}
              <br />
            </div>
          </div>

          <hr />
        </div>

        {/* footer */}
        <div className=" bg-none font-mono pt-5">
          <a
            href="mailto:2850542@gmail.com"
            target="_blank"
            className={`${textColor} font-extrabold  text-xl`}
          >
            ✉️ 2850542@gmail.com
          </a>
        </div>
        <br />
      </div>
    </div>
  );
};
export default Home;
