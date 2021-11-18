import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Quadrinhos from './pages/quadrinhos/Quadrinhos'
import QuadrinhosForms from './pages/quadrinhos/QuadrinhosForms'
import Filmes from './pages/filmes/Filmes'
import FilmesForms from './pages/filmes/FilmesForms'
import JogosForms from './pages/jogos/JogosForms'


const Rotas = () => {
    return (
        <Container className="mt-3">
            <Routes>
                <Route exact path="/" component={<Quadrinhos/>} />
                <Route exact path="/Quadrinhos" component={Quadrinhos} />
                <Route exact path="/Quadrinhos/create" component={QuadrinhosForms} />
                <Route exact path="/Quadrinhos/:id" component={QuadrinhosForms} />
                <Route exact path="/Filmes" component={Filmes} />
                <Route exact path="/Filmes/create" component={FilmesForms} />
                <Route exact path="/Filmes/:id" component={FilmesForms} />
                <Route exact path="/jogos/:id" component={JogosForms} />
            </Routes>
        </Container>
    )
}

export default Rotas
