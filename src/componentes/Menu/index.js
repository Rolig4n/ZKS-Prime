import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
//import ButtonLink from './componentes/ButtonLink';
import Button from '../../componentes/Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="ZKS Prime logo"></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Video novo
            </Button>
        </nav>
    );
}

export default Menu; //sussa
