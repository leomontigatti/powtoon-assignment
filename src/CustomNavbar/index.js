import React from 'react'
import { Image, Container, Navbar } from 'react-bootstrap'
import './Navbar.css'

function CustomNavbar (props) {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home" onClick={props.scrollToTop}>
                    <Image alt="" src="https://cdn-icons-png.flaticon.com/512/3874/3874080.png" width="30" height="30" className="d-inline-block align-top" />
                    {' '} <span className="h4">Movie Time</span>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="sortText">
                        Sort By
                    </Navbar.Text>
                    <Navbar.Text>
                        {props.children}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { CustomNavbar }