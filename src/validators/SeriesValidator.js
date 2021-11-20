import mensagens from "./mensagens"

const SeriesValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    genero: {
        required: mensagens.required,
        minLength: {value: 1, message: mensagens.maxLength },
        maxLength: {value: 1, message: mensagens.maxLength }
    },
}

export default SeriesValidator