import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus, FaRegTrashAlt, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import QuadrinhosService from '../../services/pages/QuadrinhosService'

const Quadrinhos = (props) => {

    const [Quadrinhos, setQuadrinhos] = useState([])

    useEffect(() => {
        const Quadrinhos = QuadrinhosService.getAll()
        setQuadrinhos(Quadrinhos)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            QuadrinhosService.delete(i)
            setQuadrinhos(QuadrinhosService.getAll())
        }
    }

    return (
        <>
            <Box title="Quadrinhos">
                <Link to="/Quadrinhos/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Nome</th>
                            <th>Edição</th>
                            <th>Data de Lançamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Quadrinhos.map((Quadrinhos, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/Quadrinhos/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                
                                <td>{Quadrinhos.nome}</td>
                                <td>{Quadrinhos.edicao}</td>
                                <td>{Quadrinhos.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Quadrinhos
