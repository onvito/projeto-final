import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import validador from '../../validators/FilmesValidator'
import FilmesService from '../../services/pages/FilmesService'

const FilmesForms = (props) => {

    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const filmes = FilmesService.get(id)
            for (let campo in filmes) {
                setValue(campo, filmes[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? FilmesService.update(dados, id) : FilmesService.create(dados)
        props.history.push('/filmes')
    }    

    return (
        <>
            <Box title="Filmes">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="data">
                        <Form.Label column sm={2}>Data de Lançamento: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("data", validador.data)} />
                            {errors.data && <span className="text-danger">{errors.data.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="genero">
                        <Form.Label column sm={2}>Gênero: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("genero", validador.genero)} />
                            {errors.genero && <span className="text-danger">{errors.genero.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/filmes"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FilmesForms
