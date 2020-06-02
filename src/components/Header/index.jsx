import React, { useState } from 'react';
import { Link } from 'gatsby'

import {
    Navbar,
    Container,
    ToggleNavbar,
    Nav
} from './styled';

const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const toggleOpen = () => setIsToggleOpen(!isToggleOpen);

    return (
        <Navbar>
            <Container>
                <p style={{ color: "white", margin: 0 }}>Teste</p>
                <ToggleNavbar onClick={toggleOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </ToggleNavbar>
                <Nav>
                    <ul>
                        <li><Link to="/">O que fazemos</Link></li>
                        <li><Link to="/">Trabalhos</Link></li>
                        <li><Link to="/">Cliente</Link></li>
                        <li><Link to="/">Trabalhos</Link></li>
                        <li><Link to="/">Comece seu projeto</Link></li>
                    </ul>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;