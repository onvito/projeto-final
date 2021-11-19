import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import FilmesServices from '../../services/pages/FilmesService'


const Filmes = () => {

    const [Filmes, setFilmes] = useState([])

    useEffect(() => {
        const Filmes = FilmesServices.getAll()
        setFilmes(Filmes)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            FilmesServices.delete(i)
            setFilmes(FilmesServices.getAll())
        }
    }
    

    return (
        <>
            <Box title="Filmes">
                <Link to="/Filmes/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Data de Lançamento</th>
                            <th>Gênero</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {Filmes.map((filme, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/filmes/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>{i}</td>
                                <td>{filme.nome}</td>
                                <td>{filme.data}</td>
                                <td>{filme.genero}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Filmes
