import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import JogosService from '../../services/pages/JogosService'

const Jogos = () => {

    const [Jogos, setjogos] = useState([])

    useEffect(() => {
        const Jogos = JogosService.getAll()
        setjogos(Jogos)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            JogosService.delete(i)
            setjogos(JogosService.getAll())
        }
    }

    return (
        <>
            <Box title="Jogos">
                <Link to="/Jogos/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Nome</th>
                            <th>Data de Lançamento</th>
                            <th>Gênero</th>
                            <th>Sinopse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Jogos.map((jogo, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/Jogos/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                
                                <td>{jogo.nome}</td>
                                <td>{jogo.data}</td>
                                <td>{jogo.matricula}</td>
                                <td>{jogo.sinopse}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Jogos
