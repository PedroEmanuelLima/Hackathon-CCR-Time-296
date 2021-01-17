import { Link } from 'react-router-dom';
import Footer from '../../Componets/footer';
import './styles.css';

export default function BuscarMentor() {
    return(
        <>
            <div className="buscar-container">
                <div className="buscar-content">
                    <form action="" >
                        <div>
                            <div className="inputs-busca">
                                <label htmlFor="area">Area que possui interesses</label>
                                <input type="text" id="area" />
                            </div>
                            <div className="inputs-busca">
                                <label htmlFor="localizacao">Localização desejada</label>
                                <input type="text" id="localizacao" />
                            </div>
                        </div>
                        
                       <div className="btn">
                            <Link to="/mentores" className="btn-buscar">Buscar</Link>
                       </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}