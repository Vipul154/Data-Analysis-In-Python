import React from 'react';
import "../Styles/feature.scss";
import {analytics} from "../Data/dummy";
import {Graph_01, Graph_02} from "./graphs";

const Graph02Container = () => {
    return (
        <div className="app__graph02container">
            <div className="graph02container__maincontainer">
                <div className="left__section">
                    <div className="graph02img">
                        <Graph_02/>
                    </div>
                </div>

                <div className="right__section">
                    <div className="right__text">
                        <h1>Graph 02</h1>
                        <h2>Top 5 Directors on Netflix</h2>
                        <p>From the data, it is derived that the top 5 Directors on Netflix are Ravi Chilaka, jan Suter, Jay Karas, Marcus Raboy, Jay Chapman.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Graph02Container;
