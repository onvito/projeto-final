import mensagens from "./mensagens"

const PersonagensValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
   aparicao: {
    required: mensagens.required,
    minLength: {value: 1, message: mensagens.minLength}
   },

   criadores: {
    required: mensagens.required,
    maxLength: {value: 50, message: mensagens.maxLength}
   }
}

export default PersonagensValidator