import Footer from '../../Componets/footer';
import Navbar from '../../Componets/Navbar';
import './styles.css';

export default function Home() {

    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="home-content">
                    <span className="text-home">
                        Descubra sua <br/>
                        oportunidade aqui <br/>
                        Jovem.
                    </span>
                </div>
            </div>
            <Footer />
        </>
    );
}