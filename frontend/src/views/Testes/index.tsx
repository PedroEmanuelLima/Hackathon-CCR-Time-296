import { useEffect, useState } from 'react';
import './styles.css';

export default function Testes() {
    const [testes, setTestes] = useState([]);

    useEffect(() => {
        //requisição de testes na api
        //setar testes com a resposta da api
    }, [])
    return (
        <div className="teste-container">
            <div>
                <h1 className="title">
                    Testes de Competencia
                </h1>
            </div>
            
            <div className="teste-content">
                { testes.length > 0 && <span>listar testes(desenvolver componente)</span> }
                { testes.length <= 0 && <span className="list-span">Sem testes no momento</span>}
            </div>
        </div>
    )
}