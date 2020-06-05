import React from 'react';
import './AboutMe.css';
import {
    Link,
    useRouteMatch
  } from "react-router-dom";

function AboutMe() {

    let path = useRouteMatch();
    let redirect = path.url.replace("/about/me","");

    return (
        <div>
            <br></br>
            <h2>About Me</h2>
            <p>I am a software engineering student graduated as of May 2020 from Western University. Online I commonly go by Jamesrbrtsn, or Jrbrtsn</p>
            <p>I enjoy challenging myself and constantly strive to get better and learn more. Overall I am looking for a work experience that can complement this aim.</p>
            <p>I am looking for strong opportunities to build my professional experience in software development and software engineering outside of the classroom. I want to get exposure to real companies and corporations and practice my skillsets while learning new skills. I am looking for a team that values teamwork, comradery, and is genuinely proud of its work. Outside of software, I enjoy taking up leadership opportunities and volunteering for events such as hackathons or fundraising events. I am also heavily interested in Web Development and UX design</p>
            <br>
            </br>
            <p>Connect with me on social media!</p>
            <Link to={`${redirect}/socials`}>Socials</Link>
        </div>
    )
}
  
export default AboutMe;