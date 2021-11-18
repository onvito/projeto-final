import mensagens from "./mensagens"

const FilmesValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },

    data: {
        required: mensagens.required,
        minLength: {value: 1, message: mensagens.maxLength + ': 1'},
    }
    
}

export default FilmesValidator