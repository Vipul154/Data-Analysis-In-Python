import React from 'react';
import "../Styles/distribution.scss";
import {IoLogoGooglePlaystore} from "react-icons/io5";
import {BsApple} from "react-icons/bs";
import {Numpylogo} from "../Images";

const Distribution = () => {
    return (
        <div className="app__distribution">
            <div className="distribution__container">
                <div className="left__container">
                    <div className="distribution__text">
                        <h1>Hello there!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet architecto aut beatae commodi delectus dicta dignissimos doloribus eligendi error esse eveniet facilis iste laboriosam nemo obcaecati odio odit possimus, quas quo reiciendis repudiandae saepe unde veniam veritatis voluptas voluptate voluptatem. Dolorum error et exercitationem labore molestiae, nobis numquam quia.so</p>
                    </div>
                    <div className="distribution__buttons">
                        <button><IoLogoGooglePlaystore/> Click here!</button>
                        <button><BsApple/> Why you sad!</button>
                    </div>
                </div>
                <div className="right__container">
                    <img src={Numpylogo} alt="" draggable={false}/>
                </div>
            </div>
        </div>
    );
};
export default Distribution;