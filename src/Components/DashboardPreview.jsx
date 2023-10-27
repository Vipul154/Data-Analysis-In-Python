import React from 'react';
import "../Styles/dashboardpreview.scss";

import {Pandaslogo, Numpylogo, Plotlylogo} from "../Images/index.js";
const DashboardPreview = () => {
    return (
        <div className="app__dashboard">
            <h2>Technologies Used:</h2>
            <div className="img__container">
                <div className="img__box">
                    <img src={Plotlylogo} alt="" draggable={false}/>
                </div>
                <div className="img__box">
                    <img src={Pandaslogo} alt="" draggable={false}/>
                </div>
                <div className="img__box">
                    <img src={Numpylogo} alt="" draggable={false}/>
                </div>
            </div>
        </div>
    );
}
export default DashboardPreview;