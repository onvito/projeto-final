import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">MARVEL COMICS</Navbar.Brand>
                <Nav className="me-auto">
                       
                    <Link className="nav-link" to="/Filmes">Filmes</Link>
                    <Link className="nav-link" to="/jogos">Jogos</Link>
                    <Link className="nav-link" to="/personagens">Personagens</Link>
                    <Link className="nav-link" to="/quadrinhos">Quadrinhos</Link>
                    <Link className="nav-link" to="/series">Series</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu
