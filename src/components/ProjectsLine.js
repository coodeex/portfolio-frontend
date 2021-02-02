import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
// import ReactDOM from 'react-dom';

export const VerticalProjects = () => {


  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/code.jpg')} alt=""></img>}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/coodeex/cave_app"><h3 className="vertical-timeline-element-title">Home Brewery Accounting App</h3></a>
          <h4 className="vertical-timeline-element-subtitle">Entirely from scratch</h4>
          <p>
            This full stack application can be used to keep track of products used in beer making. In addition to that, app can also keep track of batches and calculate the price of one bottle. It uses token based login so that only admins can add products and batches.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/code.jpg')} alt=""></img>}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/coodeex/FullStack2020"><h3 className="vertical-timeline-element-title">FullStackOpen2020</h3></a>
          <p>
            This course is about modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/code.jpg')} alt=""></img>}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/coodeex/Arduino-Texas-Holdem-Robot"><h3 className="vertical-timeline-element-title">Arduino Texas Hold'em Robot</h3></a>
          <h4 className="vertical-timeline-element-subtitle">Teamwork!</h4>
          <p>
            The robot's job is to deal the cards to the players and on the table like in Texas Hold'em poker. It is designed, 3d-modeled and built entirely from scratch.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/code.jpg')} alt=""></img>}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/coodeex/Basic-Course-in-C-programming"><h3 className="vertical-timeline-element-title">C-Programming</h3></a>
          <p>
            Basic level C programming course. Most of the course was that weekly assignments had to be returned and there was also a small project.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/code.jpg')} alt=""></img>}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/coodeex/O1-Programming-Course"><h3 className="vertical-timeline-element-title">Scala Programming</h3></a>
          <p>
            Basic level Scala programming course. It consists of weekly assignments and there was also a small project.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/code.jpg')} alt=""></img>}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/coodeex/portfolio-frontend"><h3 className="vertical-timeline-element-title">This website</h3></a>
          <h4 className="vertical-timeline-element-subtitle">Entirely from scratch</h4>
          <p>
            This is pretty self-explanatory :D
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}
