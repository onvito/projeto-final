class FilmesService {
    
    getAll() {
        const filmes = localStorage.getItem('filmes')
        return filmes ? JSON.parse(filmes) : []
    }

    get(id) {
        const filmes = this.getAll()
        return filmes[id]
    }

    create(dados) {
        const filmes = this.getAll()
        filmes.push(dados)

        localStorage.setItem('filmes', JSON.stringify(filmes))
    }

    update(dados, id) {
        const filmes = this.getAll()
        filmes.splice(id, 1, dados)
        localStorage.setItem('filmes', JSON.stringify(filmes))
    }

    delete(id) {
        const filmes = this.getAll()
        filmes.splice(id, 1)
        localStorage.setItem('filmes', JSON.stringify(filmes))
    }
}

export default new FilmesService()