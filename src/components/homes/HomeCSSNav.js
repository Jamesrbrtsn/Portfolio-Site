import React from 'react';
import Home from './Home.js';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './HomeCSSNav.css';
import Calculator from '../projects/calculator/Calculator';
import SeasonalCritters from '../projects/seasonal-critters/SeasonalCritters.js';

export default function HomeCSSNav(){

    return(
        <div>
            <div id="css-options">
                <div>
                    <Link to="/clean">Clean</Link>
                </div>
                <div>
                    <Link to="/flare">Flare</Link>
                </div>
                <div>
                    <Link to="/fun">Fun</Link>
                </div>
            </div>
            <div id="HomeCSSNav">
            <Switch>
                <Route path="/clean">
                    <Home id={"c1"}/>
                </Route>
                <Route path="/flare">
                    <Home id={"c2"}/>
                </Route>
                <Route path="/fun">
                    <Home id={"c3"}/>
                </Route>
                <Route path="/calculator">
                    <Calculator />
                </Route>
                <Route path="/seasonal-critters">
                    <div id="seasonal-critter-display">
                        <SeasonalCritters />
                    </div>
                </Route>
                <Route path={`*`}>
                    <Home id={"c1"}/>
                </Route>
                
            </Switch>
            </div>
        </div>
    )

}
  