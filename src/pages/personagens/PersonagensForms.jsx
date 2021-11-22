import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Box from '../../components/Box'
import { mask, unMask } from 'remask'
import PersonagensService from '../../services/pages/PersonagensService'
import validador from '../../validators/PersonagensValidator'

const PersonagensForms = (props) => {


    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const Personagens = PersonagensService.get(id)
            for (let campo in Personagens) {
                setValue(campo, Personagens[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? PersonagensService.update(dados, id) : PersonagensService.create(dados) 
        props.history.push('/personagens')
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
            <Box title="Personagenss">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="data">
                        <Form.Label column sm={2}>Data de Criação: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("data")}  
                            mask="99/99/9999"
                            onChange={handleChange}/>
                        </Col>
                    </Form.Group>
                   
                    <Form.Group as={Row} className="mb-3" controlId="aparicao">
                        <Form.Label column sm={2}>1º Aparição: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("aparicao", validador.aparicao)} 
                            mask="99/99/9999"
                            onChange={handleChange}/>
                            {errors.aparicao && <span className="text-danger">{errors.aparicao.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="criadores">
                        <Form.Label column sm={2}>Criadores: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="criadores" {...register("criadores", validador.criadores)} />
                            {errors.criadores && <span className="text-danger">{errors.criadores.message}</span>}
                        </Col>
                    </Form.Group>
                   
                    
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/Personagens"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default PersonagensForms
