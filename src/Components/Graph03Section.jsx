import React from 'react';
import "../Styles/Graph03Section.scss";
import {analytics} from "../Data/dummy";
import {Graph_02, Graph_03} from "./graphs";

const Graph03Section = () => {
    return (
        <div className="app_analytic3">
            <div className="analytics__container">

                <div className="left__analytics">
                    <div className="left__text">
                        <h1>Graph 03</h1>
                        <h2>Top 5 Actors on Netflix</h2>
                        <p>From the data, it is derived that the top 5 Actors on Netflix are Anupan Kher, Rupa Bhimani, Takahiro Sakurai, Julie Tejwani, Om Puri.</p>
                    </div>
                </div>


                <div className="right__analytics">
                    <div className="graph02img">
                        <div className="space">
                            <Graph_03/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Graph03Section;
