import React, { Component } from "react";
import { Container, FormControl, Nav, Navbar, Form, Button } from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Header extends Component {
    render() {

        return (
            <>
                <Navbar fixed="sticky" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-center"
                                alt="sova"
                            />
                          
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">HOME</Nav.Link>
                                <Nav.Link href="/about">API</Nav.Link>
                                <Nav.Link href="/contacts">CONTACTS</Nav.Link>
                                <Nav.Link href="/blog">BLOG</Nav.Link>
                            </Nav>

                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"
                                />
                                <Button class="btn btn-outline-danger" >Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        )
    }
}