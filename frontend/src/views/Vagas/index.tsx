import './styles.css';
import { toast } from 'react-toastify';

import FilterUrl from './Raster.png';
import { useEffect, useState } from 'react';
import VagaList from '../../Componets/VagaLista';
import { fetchvagas } from '../../api';

type vagas = {
    vaga_id: number;
    titulo: String;
    cidade: String;
    vagaUrl: any;
}

export default function Vagas() {
    const [vagas, setVagas] = useState<vagas[]>([]);
    const [cidade, setCidade] =useState('');

    useEffect(() => {
        fetchvagas()
            .then(response => setVagas(response.data))
            .catch(err => toast.warning('Erro ao listar produtos'));
    }, []);

    return (
        <>
            <div className="vagas-container">
                <div className="header-vagas">
                    <img className="img-filtros" src={FilterUrl} alt="filtros"/>
                    <select className="filtros" id="cidade" onClick={e => console.log(e)}>
                        <option value="">
                            Filtros
                        </option>
                        {vagas.map(v => <option value={v.vaga_id}>{v.cidade}</option>)}
                    </select>
                    <h1 className="title-vagas">
                        Vagas disponiveis
                    </h1>
                </div>
                
                <div className="vagas-content">
                    {/* Implementar lógica de filtrar ***** */}
                    { vagas.map(v => <VagaList key={v.vaga_id} titulo={v.titulo} vagaUrl={v.vagaUrl} cidade={v.cidade} />) }
                </div>
            </div>
        </>
    );
}