import React from "react";
import './header.css';
import { Breadcrumb } from 'react-bootstrap';

const BreadcrumbBar = (props) => {
    return <Breadcrumb>
            <Breadcrumb.Item href="#">Warranty Component Administration</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Plan</Breadcrumb.Item>
        </Breadcrumb>;
}

export default BreadcrumbBar