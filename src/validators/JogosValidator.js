import mensagens from "./mensagens"

const JogosValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },

    sinopse: {
        required: mensagens.required,
        minLength: {value: 20, message: mensagens.minLength },
       
    }
}

export default JogosValidator