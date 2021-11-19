class SeriesService {
    
    getAll() {
        const series = localStorage.getItem('series')
        return series ? JSON.parse(series) : []
    }

    get(id) {
        const series = this.getAll()
        return series[id]
    }

    create(dados) {
        const series = this.getAll()
        series.push(dados)

        localStorage.setItem('series', JSON.stringify(series))
    }

    update(dados, id) {
        const series = this.getAll()
        series.splice(id, 1, dados)
        localStorage.setItem('series', JSON.stringify(series))
    }

    delete(id) {
        const series = this.getAll()
        series.splice(id, 1)
        localStorage.setItem('series', JSON.stringify(series))
    }
}

export default new SeriesService()