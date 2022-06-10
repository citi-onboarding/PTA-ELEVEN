import React from "react";
import { NavbarContainer } from './styles';


export const Navbar: React.FC = () => {
    return (
        <NavbarContainer id="navbar">
            <ul> 
                <li><a href="#navbar">ELEVEN</a></li>
                <li><a href="#momentos">Momentos</a></li>
                <li><a href="#performances">Performances</a></li>
                <li><a href="#quemsomos">Quem somos</a></li>
            </ul>
            {/* <section id="home"></section> */}
        </NavbarContainer>
    );
}