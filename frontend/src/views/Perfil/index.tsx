import { useEffect, useState } from 'react';
import './styles.css';

type userType = {
    id: number,
    nome: String,
    cep: String,
    uf: String,
    areaInteresse: String[],
    mentor: String,
    ranking: number
}

const userInit: userType = {   
    id: 0,
    nome: '',
    cep: '',
    uf: '',
    areaInteresse: [],
    mentor: '',
    ranking: 0
}

const user: userType = {   
    id: 1,
    nome: 'Pedro I',
    cep: 'xxxxx-xxx',
    uf: 'xx',
    areaInteresse: ['Geopolitica', 'Recursos Humanos'],
    mentor: 'Pedro Alvares',
    ranking: 6
}

export default function Perfil() {
    const [usuario, setUsuario] = useState<userType>(userInit);
    
    useEffect(() => {
        // buscar as informações logada no computador e setar em usuario
        setUsuario(user);
    }, [])

    return (
        <>
            <div className="perfil-container">                
                <div className="perfil-content">
                    <span>Nome: {usuario.nome}</span>
                    <span>Endereço: {usuario.cep} - {usuario.uf}</span>
                    <span>Areas de interesse: {usuario.areaInteresse.map(a => <span>{a}</span>)}</span>
                    <span>Mentor Atual: {usuario.mentor}</span>
                    <span>Ranking: {usuario.ranking}</span>
                </div>
            </div>
        </>
    );
}