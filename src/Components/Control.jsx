import React from 'react';
import "../Styles/control.scss";
import {controls} from "../Data/dummy";

const Control = () => {
    return (
        <div className="feature__controls">
            <div className="control__container">
                <div className="control__text">
                    <h1>Control in one place</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ut.</p>
                    <button>Start it buddy</button>
                </div>
                <div className="control__content">
                    {controls.map((control, index) => (
                        <div className="control" key={index}>
                            <div className="control__icon">
                                <control.icon/>
                            </div>
                            <div className="control__text__content">
                                <p>
                                    {control.name}
                                </p>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, modi.</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Control;