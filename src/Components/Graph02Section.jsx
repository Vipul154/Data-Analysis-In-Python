import React from 'react';
import "../Styles/Graph02Section.scss";
import {analytics} from "../Data/dummy";
import {Graph_02} from "./graphs";

const Graph02Section = () => {
    return (
        <div className="app_analytic2">
            <div className="analytics__container">

                <div className="left__analytics">
                    <div className="left__text">
                        <h1>Graph 02</h1>
                        <h2>Top 5 Directors on Netflix</h2>
                        <p>From the data, it is derived that the top 5 Directors on Netflix are Ravi Chilaka, jan Suter, Jay Karas, Marcus Raboy, Jay Chapman.</p>
                    </div>
                </div>


                <div className="right__analytics">
                    <div className="graph02img">
                        <div className="space">
                            <Graph_02/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Graph02Section;
