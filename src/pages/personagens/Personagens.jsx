import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import PersonagensServices from '../../services/pages/PersonagensService'

const Personagens = () => {

    const [Personagens, setPersonagens] = useState([])

    useEffect(() => {
        const Personagens = PersonagensServices.getAll()
        setPersonagens(Personagens)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            PersonagensServices.delete(i)
            setPersonagens(PersonagensServices.getAll())
        }
    }

    return (
        <>
            <Box title="Personagens">
                <Link to="/Personagens/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Nome</th>
                            <th>Data de Criação </th>
                            <th>1 º Aparição</th>
                            <th>Criadores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Personagens.map((personagem, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/Personagens/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                
                                <td>{personagem.nome}</td>
                                <td>{personagem.data}</td>
                                <td>{personagem.aparicao}</td>
                                <td>{personagem.criadores}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Personagens
