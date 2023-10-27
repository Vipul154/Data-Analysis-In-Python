import React from 'react';
import "../Styles/footer.scss";
import {routes} from "../Data/dummy";
import {Pandaslogo} from "../Images";
import {FaFacebook} from "react-icons/fa";
import {BsInstagram, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <div className="app__footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="logo">
                        <p>Hello again Howdy!</p>
                    </div>
                    <div className="footer__cta">
                        <p>Ready to get Started Vipul</p>
                        <button>Get Started!</button>
                    </div>
                </div>
                <div className="footer__middle">
                    <div className="left__middle">
                        <p>Subscribe to Vipul Maheshwari</p>
                        <div className="input__container">
                            <input type="text" placeholder="Email Address here!!"/>
                            <button>Go Buddy!</button>
                        </div>
                    </div>
                    <div className="right__middle">
                        <ul className="middle__routes">
                            {routes.map((route, index) => (
                                <li className="route" key={index}>
                                    {route.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="left__bottom">
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policies</li>
                        </ul>
                    </div>
                    <div className="right__bottom">
                        <ul>
                            <li>
                                <FaFacebook/>
                            </li>
                            <li>
                                <BsTwitter/>
                            </li>
                            <li>
                                <BsInstagram/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;