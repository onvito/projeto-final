import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
import Box from '../../components/Box'
import validador from '../../validators/JogosValidator'
import JogosService from '../../services/pages/JogosService'

const JogosForms = (props) => {

    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const jogos = JogosService.get(id)
            for (let campo in jogos) {
                setValue(campo, jogos[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? JogosService.update(dados, id) : JogosService.create(dados)
        props.history.push('/jogos')
    }    

    function handleChange(event) {
        const name = event.target.name
        const mascara = event.target.getAttribute('mask')

        let valor = unMask(event.target.value)
        valor = mask(valor, mascara)

        setValue(name, valor)
    }

    return (
        <>
            <Box title="Jogos">
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
                            <Form.Control type="text" {...register("data", validador.data)} 
                             mask="99/99/9999"
                             onChange={handleChange}/>
                            {errors.data && <span className="text-danger">{errors.data.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="matricula">
                        <Form.Label column sm={2}>Gênero: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("matricula", validador.matricula)} />
                            {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="sinopse">
                        <Form.Label column sm={2}>Sinopse: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("sinopse", validador.sinopse)} />
                            {errors.sinopse && <span className="text-danger">{errors.sinopse.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/jogos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default JogosForms
