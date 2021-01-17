// import { Link } from 'react-router-dom';

import './styles.css';

export default function Navbar() {
    
    return(
        <nav className="main-navbar">
            <a href="/" className="link-text">Inicio</a>
            <a href="/" className="link-text">Vagas</a>
            <a href="/" className="link-text">Mentor</a>
            <a href="/" className="link-text">Candidato</a>
            <a href="/" className="link-text">Testes</a>
        </nav>
    );
}