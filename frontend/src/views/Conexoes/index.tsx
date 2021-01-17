import { useEffect, useState } from 'react';
import ConexoesList from '../../Componets/ConexoesList';
import './styles.css';

const ments = [
    {   
        id: 1,
        nome: 'Pedro Alvares',
        area: ['Geopolitica', 'Recursos Humanos'],
        telefone: '(XX) xxxxx-xxxx',
        email: 'pedroAl@caracele.com',
        pontos: 40
    },
    {
        id: 2,
        nome: 'Diogo Alencar',
        area: ['TIC', 'Saúde'],
        telefone: '(XX) xxxxx-xxxx',
        email: 'pedroAl@caracele.com',
        pontos: 55
    },
    {
        id: 2,
        nome: 'João Pereira',
        area: ['Ciências humanas', 'Recursos Humanos'],
        telefone: '(XX) xxxxx-xxxx',
        email: 'pedroAl@caracele.com',
        pontos: 50
    }
]

export default function Conexoes() {
    const [mentores, setMentores] = useState([]);
    
    useEffect(() => {
        // requisição a api e listar os mentores com suas informações
        // setar o estado de mentores como uma lista preenchida com o resultado da requisição a api
    }, [])

    return (
        <>
            <div className="user-container">
                <div className="user-mentores">
                    <h4 className="title-user">
                        Conexões
                    </h4>
                </div>
                
                <div className="user-content">
                    {ments.map(m => <ConexoesList nome={m.nome} area={m.area} telefone={m.telefone} email={m.email} pontos={m.pontos}/>)}
                </div>
            </div>
        </>
    );
}