import React from 'react';
import './app.scss';
import {STTop, Home, Navbar, DashboardPreview, Analytics, Feature, Distribution, Footer} from "./Components/index";
import {Graph_01, Graph_02, Graph_03, Graph_04, Graph_05, Graph01_content, MainContent} from '../src/Components/graphs/index.js';

import Graph02Section from "./Components/Graph02Section";
import Graph03Section from "./Components/Graph03Section";
import Graph04Section from "./Components/Graph04Section";
import Graph05Section from "./Components/Graph05Section";
const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Home/>
            <DashboardPreview/>
            <Analytics/>
            <Graph02Section/>
            <Graph03Section/>
            <Graph04Section/>
            <Graph05Section/>
            {/*<Distribution/>*/}
            {/*<Footer/>*/}
            {/*<STTop/>*/}

        </div>
    );
}
export default  App;