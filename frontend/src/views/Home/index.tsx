import { Link } from 'react-router-dom';
import Footer from '../../Componets/footer';
import './styles.css';

export default function Home() {

    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <span className="text-home">
                        Descubra sua <br/>
                        oportunidade aqui <br/>
                        Jovem.
                    </span>
                    <Link className="btn-mentor" to="/buscarMentor">Encontre Mentor</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}