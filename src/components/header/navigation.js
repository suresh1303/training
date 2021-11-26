import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './header.css';
import logo from '../img/logo.png';
import navData from './navdata.json';


const Navigation = (props) => {

    return <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} alt="logo" />  </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-right" >
                    {navData.map((e,index) => (e.sublink === undefined &&
                        <Nav.Link key={index} href={e.mainlink.link} className={window.location.pathname === e.mainlink.link? "homeLink":""}>{e.mainlink.name}</Nav.Link>
                    ))}
                    {navData.map((e,index) => (e.sublink !== undefined &&
                        <NavDropdown key={index} title={e.mainlink.name} id="basic-nav-dropdown" className={window.location.pathname === e.mainlink.link? "homeLink":""} >
                            {e.sublink.map((f,index) => (f.name === ">" ? <NavDropdown.Divider key={index} /> : <NavDropdown.Item key={index} href={f.link}>{f.name}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>;
}

export default Navigation