import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Navbar.Brand href="/" className="body">{"Shop Bridge"}</Navbar.Brand>
            <Nav.Item>
                <Nav.Link href="/add">Add Product</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}

export default NavBar;