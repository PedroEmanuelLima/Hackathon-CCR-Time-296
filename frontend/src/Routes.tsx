import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './views/Home';
import BuscarMentor from './views/BuscarMentor';
import Vagas from './views/Vagas';
import Mentores from './views/Mentor';
import Testes from './views/Testes';
import Navbar from './Componets/Navbar';
import Perfil from './views/Perfil';
import Conexoes from './views/Conexoes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route path="/buscarMentor">
                    <BuscarMentor />
                </Route>
                
                <Route path="/vagas">
                    <Vagas />
                </Route>
                
                <Route path="/mentores">
                    <Mentores />
                </Route>
                
                <Route path="/testes">
                    <Testes />
                </Route>
                
                <Route path="/perfil">
                    <Perfil />
                </Route>                
                
                <Route path="/conexoes">
                    <Conexoes />
                </Route>                
            </Switch>
        </BrowserRouter>
    )
}