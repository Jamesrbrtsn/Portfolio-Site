import React from 'react';
import {
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import './Projects.css'

function Projects() {

    return (
        <div>
            <div>
                <h2>Projects</h2>
                <div id="project-grid">
                    <div id="project" >
                        <Link to={`/seasonal-critters`}>
                            <div>
                                <h4 id="project-title">
                                    Seasonal Critters
                                </h4>
                                <h5 id="project-date">
                                    May 2020 (Work in Progress)
                                </h5>
                                <p id="project-description">
                                    My first React.js project to explore React.js. Based off a previous Javascript/HTML/CSS web project using the upgrades avaliable from organizing and building the project with React.js instead of basic Javascript and HTML. It is an organizational tool to organize information from a video game I play and make it more clear what critters are avaliable given the time and hemisphere states of the game</p>
                            </div>
                        </Link>
                    </div>
                    <div id="project" >
                        <Link to={`/calculator`}>
                            <div>
                                <h4 id="project-title">
                                    Personal Calculator 
                                </h4>
                                <h5 id="project-date">
                                    June 2020 (Work in Progress)
                                </h5>
                                <p id="project-description">
                                    A project to explore React Keyboard Events, JavaScript Expression Evaluator, ARIA Accessibility Standards, and W3C Accessibility Standards through a calculator. This calcualtor lets me quikcly run calculations with much better user input than other calculators on my computer.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Switch>
                    <Route exact path={`/calculator`}></Route>
                    <Route exact path={`/seasonal-critters`}></Route>
                </Switch>
            </div>
        </div>
    )
}
  
export default Projects;