import { Link, Route } from 'react-router-dom';
import './styles.css';

type Props = {
    titulo: String;
    cidade: String;
    vagaUrl: any
}

export default function VagaList({ titulo, vagaUrl, cidade }: Props) {

    return (
        <>
            <div className="elemento-lista">
                <h3>{titulo}</h3>
                <span>{cidade}</span>
                <a href={vagaUrl}>Saiba mais</a>
            </div>
        </>
    );
}