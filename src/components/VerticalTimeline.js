import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
// import ReactDOM from 'react-dom';

export const VerticalTime = () => {


  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/briefcase.png')} alt=""></img>}
        >
          <h3 className="vertical-timeline-element-title">Salesman</h3>
          <h4 className="vertical-timeline-element-subtitle">Rainmaker Business</h4>
          <p>
            I was successfully selling Telia's optical fiber (Avoin kuitu) in different neighbourhoods.
            The product costs around 2500€, so I really needed to create trust with my clients before we could sign a contract.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/briefcase.png')} alt=""></img>}
        >
          <h3 className="vertical-timeline-element-title">Substitute Teacher</h3>
          <h4 className="vertical-timeline-element-subtitle">City of Espoo</h4>
          <p>
            I substituted classroom teachers in a primary school. I held a few hundred lessons. It means that I was working almost as a full-time teacher, except that I usually had a different class.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - "
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/education.png')} alt=""></img>}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Aalto University</h4>
          <p>
            I'm studying automation technology and computer science, so most of my courses involve programming. I would say that now I have a solid understanding of programming  and desire to get better.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/volunteer.jpg')} alt=""></img>}
        >
          <h3 className="vertical-timeline-element-title">Event Organizer</h3>
          <a target="_blank" rel="noopener noreferrer" href="https://as.fi/"><h4 className="vertical-timeline-element-subtitle">AS-Guild</h4></a>
          <p>
            I was part of a team that planned and organized (fun) (web) events for the members of Automation and Systems Technology Guild.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/volunteer.jpg')} alt=""></img>}
        >
          <h3 className="vertical-timeline-element-title">Treasurer</h3>
          <a target="_blank" rel="noopener noreferrer" href="https://www.pelmu.fi/yhdistys.php"><h4 className="vertical-timeline-element-subtitle">Pelmu RY</h4></a>
          <p>

            Pelmu is the Otaniemi Music Association, where I often go to play. This year I also will manage it's cash flow and create it's budget.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - ?"
          iconStyle={{ background: '#e3cdb3', color: '#fff' }}
          icon={<img className="vertical-timeline-element-icon" src={require('../images/briefcase.png')} alt=""></img>}
        >
          <h3 className="vertical-timeline-element-title">Developer (I wish)</h3>
          <h4 className="vertical-timeline-element-subtitle">Espoo / Helsinki</h4>
          <p>
            I would like to work for a company where I could learn more about web / software development. I'm interested in all kinds of developing for example frontend, backend, testing and designing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}
