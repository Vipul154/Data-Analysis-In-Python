import React from 'react';
import "../Styles/Graph05Section.scss";
import {analytics} from "../Data/dummy";
import {Graph_02, Graph_03, Graph_04, Graph_05} from "./graphs";

const Graph03Section = () => {
    return (
        <div className="app_analytic5">
            <div className="analytics__container">

                <div className="left__analytics">
                    <div className="left__text">
                        <h1>Graph 05</h1>
                        <h2>Sentiment of content on Netflix</h2>
                        <p>The overall positive content is always greater than the neutral and negative content.</p>
                    </div>
                </div>


                <div className="right__analytics">
                    <div className="graph02img">
                        <div className="space">
                            <Graph_05/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Graph03Section;
