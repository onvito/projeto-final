import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import SeriesService from '../../services/pages/SeriesService'
import apiFilmes from "../../services/apiMarvel"

const Series = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {

        apiFilmes.get("/v1/public/series").then((resultado) => {
            setSeries(resultado.data.results);
        });
        const series = SeriesService.getAll()
        setSeries(series)
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
                            <th>Ações</th>                        
                            <th>Nome</th>
                            <th>Data de Lançamento</th>
                            <th>Gênero</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {series.map((serie, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/series/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                
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
