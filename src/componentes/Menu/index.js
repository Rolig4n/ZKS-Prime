import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './componentes/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="ZKS Prime logo"></img>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Video novo
            </ButtonLink>
        </nav>
    );
}

export default Menu; //sussa