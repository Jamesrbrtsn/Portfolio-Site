import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import AboutMe from '../abouts/AboutMe.js';
import AboutSite from '../abouts/AboutSite.js';
import Socials from '../Socials';
import NotFound404 from '../NotFound404';
import Projects from '../Projects';
import './Home.css';
import LandingPage from '../LandingPage.js';

export default function Home(props) {
    let match = useRouteMatch();
    
    return (
        <div id={props.id}>
            <div>
                <h1>James Robertson</h1>
                <nav >
                    <ul >
                        <li>
                            <Link to={`${match.url}/about/me`}>About Me</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/projects`}>Projects</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/socials`}>Contact</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/about/site`}>About this Site</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/404`}>404 Link</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path={`${match.url}/about/site`}>
                    <AboutSite />
                </Route>
                <Route  exact path={`${match.url}/about/me`}>
                    <AboutMe />
                </Route>
                <Route  exact path={`${match.url}/projects`}>
                    <Projects />
                </Route>
                <Route exact path={`${match.url}/socials`}>
                    <Socials />
                </Route>
                <Route exact path={`${match.url}/`}>
                    <LandingPage />
                </Route>
                <Route path={`${match.url}*`}>
                    <NotFound404 />
                </Route>
            </Switch>
        </div>
    )
}