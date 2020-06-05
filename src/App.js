import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import HomeCSSNav from './components/homes/HomeCSSNav.js';

function App() {
  return (
    <Router>
    <div>
        <HomeCSSNav/>
    </div>
    </Router>
  );
}

export default App;
