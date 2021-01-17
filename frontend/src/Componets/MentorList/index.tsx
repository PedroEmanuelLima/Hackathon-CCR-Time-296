import './styles.css';

type Props = {
    nome: String;
    empresa: String
    area: String[];
    telefone: String;
    email: String
}

export default function MentorList({ nome, empresa, area, telefone, email }: Props) {

    return (
        <div className="elemento-lista">
            <div className="descricao">
                <h2>{nome}</h2>
                <span className="empresa-mentor">
                    {empresa}
                </span>
            </div>
            <div className="areas-mentor">
                {area.map(a => <span className="area">{a}</span>)}
            </div>
            <div className="contatos">
                <span>{telefone}</span>
                <span>{email}</span>
            </div>
            <div className="btn-conectar">
                <a href="#">Conectar</a>
            </div>
        </div>
    )
}