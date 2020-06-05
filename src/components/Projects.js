import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import NotFound404 from './NotFound404';
import Calculator from './projects/calculator/Calculator';

function Projects() {

    let path = useRouteMatch();

    return (
        <div>
            <div>
                <h2>Projects</h2>
                <div id="project-grid">
                    <div id="project" >
                        <Link to={`/calculator`}>
                            <div>
                                <h4 id="project-title">
                                    Calculator
                                </h4>
                                <p id="project-description">
                                    A project to explore React Keyboard Events, JavaScript Expression Evaluator, ARIA Accessibility Standards, and W3C Accessibility Standards
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Switch>
                    <Route exact path={`/calculator`}>
                        <Calculator />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
  
export default Projects;