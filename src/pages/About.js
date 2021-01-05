import React, { useState, useEffect } from 'react'
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';
import { VerticalProjects } from '../components/ProjectsLine';
import { VerticalTime } from '../components/VerticalTimeline';
import './about.css'

const About = () => {
  const [size, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize);
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // }
  }, [])

  return (
    <div className="page">

      {
        size < 500
          ? <>
            <MobileNav />
          </>
          : size < 1023
            ? <>
              <MobileNav />
            </>
            : <>
              <div className="nav">
                <Nav />
              </div>
            </>
      }
      <div className="verticalTime">
      <a id="timeline" href="/#"> </a>
        <h1 className="aboutHeader">Timeline</h1>
        <p className="aboutFewWords">When I was 12 years old I delivered newspapers and so on.. but I'm not going to list here all the small things that I have done.</p>
        <VerticalTime />
        <hr color="white"></hr>
        <a id="projects"href="/#"> </a>
      </div>
      <div className="verticalTime">
        <h1 className="aboutHeader">Projects</h1>
        <p className="aboutFewWords">Below I have listed some of my projects and courses that I have done. You can find more information about a project by clicking a link that gets you to my GitHub page.</p>
        <p className="aboutFewWords"></p>
        <VerticalProjects />
        <hr color="white"></hr>
      </div>

      <div className="skills">
      <a id="skills" href="/#"> </a>
        <h1>Skills</h1>
        <h3>In descending order, depending on how much I have used:</h3>
      Native Finnish, Fluent English, React, Node, GitHub, unit testing, REST, Redux, MongoDB, SQL, Excel TypeScript, CSS, Azure, Python, C, Scala

      </div>
    </div>
  );
}

export default About