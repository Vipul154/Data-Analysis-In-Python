import React from 'react';
import "../Styles/Graph04Section.scss";
import {analytics} from "../Data/dummy";
import {Graph_02, Graph_03, Graph_04} from "./graphs";

const Graph03Section = () => {
    return (
        <div className="app_analytic4">
            <div className="analytics__container">

                <div className="left__analytics">
                    <div className="left__text">
                        <h1>Graph 04</h1>
                        <h2>Trend of content produced over the years on Netflix</h2>
                        <p>The line graph shows that there has been a decline in the content produced for both movies and TV shows on Netflix since 2018.

                        </p>
                    </div>
                </div>


                <div className="right__analytics">
                    <div className="graph02img">
                        <div className="space">
                            <Graph_04/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Graph03Section;
