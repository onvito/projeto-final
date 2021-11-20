import mensagens from "./mensagens"

const QuadrinhosValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
  
}

export default QuadrinhosValidator