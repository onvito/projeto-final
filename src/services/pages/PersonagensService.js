class PersonagensService {

    getAll() {
        const personagens = localStorage.getItem('personagens')
        return personagens ? JSON.parse(personagens) : []
    }

    get(id) {
        const personagens = this.getAll()
        return personagens[id]
    }

    create(dados) {
        const personagens = this.getAll()
        personagens.push(dados)

        localStorage.setItem('personagens', JSON.stringify(personagens))
    }

    update(dados, id) {
        const personagens = this.getAll()
        personagens.splice(id, 1, dados)
        localStorage.setItem('personagens', JSON.stringify(personagens))
    }

    delete(id) {
        const personagens = this.getAll()
        personagens.splice(id, 1)
        localStorage.setItem('personagens', JSON.stringify(personagens))
    }
}

export default new PersonagensService()