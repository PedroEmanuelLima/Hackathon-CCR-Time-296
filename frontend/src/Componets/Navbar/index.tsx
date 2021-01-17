import { Link } from 'react-router-dom';
import imageUrl from './Raster.png';
import './styles.css';

export default function Navbar() {
    
    return(
        <nav className="main-navbar">
            <div className="links">
                <Link to="/" className="link-text">Inicio</Link>
                <Link to="/vagas" className="link-text">Vagas</Link>
                <Link to="/mentores" className="link-text">Mentor</Link>
                <Link to="/" className="link-text">Candidato</Link>
                <Link to="/testes" className="link-text">Testes</Link>
            </div>
            
            <Link to="/perfil" className="link-perfil">
                <img src={imageUrl} alt="perfil"/>
            </Link>
        </nav>
    );
}