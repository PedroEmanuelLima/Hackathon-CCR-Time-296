import { useEffect, useState } from 'react';
import MentorList from '../../Componets/MentorList';
import './styles.css';

const ments = [
    {   
        id: 1,
        nome: 'Pedro Alvares',
        empresa: 'Caravelas',
        area: ['Geopolitica', 'Recursos Humanos'],
        telefone: '(XX) xxxxx-xxxx',
        email: 'pedroAl@caracele.com'
    },
    {
        id: 2,
        nome: 'Pedro Alvares',
        empresa: 'Caravelas',
        area: ['Geopolitica', 'Recursos Humanos'],
        telefone: '(XX) xxxxx-xxxx',
        email: 'pedroAl@caracele.com'
    }
]

export default function Mentores() {
    const [mentores, setMentores] = useState([]);
    
    useEffect(() => {
        // requisição a api e listar os mentores com suas informações
        // setar o estado de mentores como uma lista preenchida com o resultado da requisição a api
    }, [])

    return (
        <>
            <div className="mentor-container">
                <div className="header-mentores">
                    <h1 className="title-mentores">
                        Mentores
                    </h1>
                </div>
                
                <div className="mentores-content">
                    {ments.map(m => <MentorList key={m.id} nome={m.nome} empresa={m.empresa} area={m.area} telefone={m.telefone} email={m.email} />)}
                </div>
            </div>
        </>
    );
}