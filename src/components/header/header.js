import React from "react";
import './header.css';
import Navigation from './navigation';
import BreadcrumbBar from './breadcrumb';

const Header = (props) => {
    return <div>
        <div className="headerContainer">
            <Navigation />
        </div>
        <BreadcrumbBar />
    </div>;
}

export default Header