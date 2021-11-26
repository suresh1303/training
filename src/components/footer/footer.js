import React from "react";
import './footer.css';

const Footer = (props) => {
    return <div className="footerContainer">
        <div className="container">
            <div className="row">
                <div className="col  col-md-3 col-12">
                    <ul>
                        <li>
                            <a href="/program">Programs</a>
                        </li>
                        <li>
                            <a href="/certificate">Certificates</a>
                        </li>
                        <li>
                            <a href="#!">Claims</a>
                        </li>
                        <li>
                            <a href="#!"> Users</a>
                        </li>
                        <li>
                            <a href="#!"> Payments</a>
                        </li>
                    </ul>
                </div>
                <div className="col  col-md-3 col-12">
                    <ul >
                        <li>
                            <a href="#!"> Terms of Use</a>
                        </li>
                        <li>
                            <a href="#!"> Legal Notice</a>
                        </li>
                        <li>
                            <a href="#!">Privacy</a>
                        </li>
                    </ul>
                </div>
                <div className="col  col-md-3 col-12">
                    <ul >
                        <li>
                            <a href="#!">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col"></div>
            </div>
            <div className="row footerRow">© 2021 American International Group, Inc. All rights reserved.</div>

        </div>
    </div>;
}

export default Footer