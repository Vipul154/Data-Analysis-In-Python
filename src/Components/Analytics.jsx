import React from 'react';
import "../Styles/analytics.scss";
import {analytics} from "../Data/dummy";
import {Graph_01} from "./graphs";

const Analytics = () => {
    return (
        <div className="app_analytic">
            <div className="analytics__container">

                <div className="left__analytics">
                    <div className="left__text">
                        <h1>Graph 01</h1>
                        <h2>Distribution of Content Ratings on Netflix</h2>
                        <p>This pie chart indicates that majority of content on Netflix is of the rating TV-MA which means it is intended to be be viewed by mature, adult audiences and may be unsuitable for children under 17</p>
                        <p>Top Categories are : </p>
                        <div className="left__analytics__container">
                            {
                                analytics.map((analytic, index) => (
                                    <div className="analytic__container" key={index}>
                                        <div className="analytics__icon">
                                            {analytic.desc}
                                        </div>
                                        <p>
                                            {analytic.name}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>


                <div className="right__analytics">
                    <div className="graph01img">
                        <Graph_01/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Analytics;
