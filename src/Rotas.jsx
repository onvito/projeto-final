import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Quadrinhos from './pages/quadrinhos/Quadrinhos'
import QuadrinhosForms from './pages/quadrinhos/QuadrinhosForms'
import Filmes from './pages/filmes/Filmes'
import FilmesForms from './pages/filmes/FilmesForms'
import Jogos from './pages/jogos/Jogos'
import JogosForms from './pages/jogos/JogosForms'
import Personagens from './pages/personagens/Personagens'
import PersonagensForms from './pages/personagens/PersonagensForms'
import Introdução from './pages/introdução/Introdução'
import Series from './pages/series/Series'
import SeriesForms from './pages/series/SeriesForms'


const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={Introdução} />
                <Route exact path="/quadrinhos" component={Quadrinhos} />
                <Route exact path="/quadrinhos/create" component={QuadrinhosForms} />
                <Route exact path="/quadrinhos/:id" component={QuadrinhosForms} />
                <Route exact path="/filmes" component={Filmes } />
                <Route exact path="/filmes/create" component={FilmesForms} />
                <Route exact path="/filmes/:id" component={FilmesForms} />
                <Route exact path="/jogos" component={Jogos} />
                <Route exact path="/jogos/create" component={JogosForms} />
                <Route exact path="/jogos/:id" component={JogosForms} />
                <Route exact path="/personagens" component={Personagens} />
                <Route exact path="/personagens/create" component={PersonagensForms} />
                <Route exact path="/personagens/:id" component={PersonagensForms} />
                <Route exact path="/series" component={Series} />
                <Route exact path="/series/create" component={SeriesForms} />
                <Route exact path="/series/:id" component={SeriesForms} />
                
            </Switch>
        </Container>
    )
}

export default Rotas
