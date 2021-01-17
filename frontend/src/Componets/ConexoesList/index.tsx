import './styles.css';

type Props = {
    nome: String;
    area: String[];
    telefone: String;
    email: String,
    pontos: number
}

export default function ConexoesList({ nome, area, telefone, email, pontos }: Props) {

    return (
        <div className="elemento-lista">
            <div className="descricao">
                <h2>{nome}</h2>
            </div>
            <div className="areas-user">
                {area.map(a => <span className="area">{a}</span>)}
            </div>
            <div className="contatos">
                <span>{telefone}</span>
                <span>{email}</span>
            </div>
            <div className="pontos-user">
                <span>{pontos} pts</span>
            </div>
            
        </div>
    )
}