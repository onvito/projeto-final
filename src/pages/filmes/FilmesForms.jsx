import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
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

    function handleChange(event) {
        const name = event.target.name
        const mascara = event.target.getAttribute('mask')

        let valor = unMask(event.target.value)
        valor = mask(valor, mascara)

        setValue(name, valor)
    }

    class FlavorForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: 'coco'};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('Seu sabor favorito é: ' + this.state.value);
          event.preventDefault();
        }
    
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
                            <Form.Control type="text" {...register("data", validador.data)} 
                            mask="99/99/9999"
                            onChange={handleChange}/>
                            {errors.data && <span className="text-danger">{errors.data.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="genero">
                        <Form.Label column sm={2}>Gênero: </Form.Label>
                        <Col sm={10}>  
                         <form onSubmit={this.handleSubmit}>
                            <label>
                            Escolha seu sabor favorito:
                            <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                                <option value="laranja">Laranja</option>
                                <option value="limao">Limão</option>
                                <option value="coco">Coco</option>
                                <option value="manga">Manga</option>
                            </select>
                            </label>
                            <input type="submit" value="Enviar" />
                        </form>   
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
