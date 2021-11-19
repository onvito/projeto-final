import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import SeriesService from '../../services/pages/SeriesService'

const Series = () => {

    const [Series, setSeries] = useState([])

    useEffect(() => {
        const Series = SeriesService.getAll()
        setSeries(Series)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            SeriesService.delete(i)
            setSeries(SeriesService.getAll())
        }
    }

    return (
        <>
            <Box title="Series">
                <Link to="/Series/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nº</th>
                            <th>Nome</th>
                            <th>Data de Lançamento</th>
                            <th>Gênero</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {Series.map((serie, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/series/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>{i}</td>
                                <td>{serie.nome}</td>
                                <td>{serie.data}</td>
                                <td>{serie.genero}</td>
                              
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Series
