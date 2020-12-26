
class GotService {
    constructor(id=1) {
        this._baseURL = 'https://www.anapioficeandfire.com/api'
        this.res = ''
        this.id = id
    }
    async getResource(url) {
        const rs = await fetch(`${this._baseURL}${url}`)
        if(!rs.ok) {
            throw new Error(`Не получилось получить доступ к ${url}. ${rs.status}`)
        }
        return await rs.json()
    }
    async getCharacter(id=this.id) {
        const data = await this.getResource(`/characters/${id}`)
        return this._toFormatCharacter(data)
    }
    async getAllCharacters(page=1, size = 10) {
        const data = await this.getResource(`/characters?page=${page}&pageSize=${size}`)
        return data.map(item=>this._toFormatCharacter(item))
    }
    async getAllBooks(page=1, size = 2) {
        const data = await this.getResource(`/books?page=${page}&pageSize=${size}`)
        return data.map(item=>this._toFormatBook(item))
    }
    async getAllHouses(page=1, size = 30) {
        const data = await this.getResource(`/houses?page=${page}&pageSize=${size}`)
        return data.map(item=>this._toFormatHouse(item))
    }
    async getBook(id=this.id) {
        const data = await this.getResource(`/books/${id}`)
        return this._toFormatBook(data)
    }
    async getHouse(id=this.id) {
        const data = await this.getResource(`/houses/${id}`)
        return this._toFormatHouse(data)
    }
    _toFormatCharacter(char) {
        for (let i in char) {
            if (char[i] === '') {
                char[i] = 'Не задано'
            }
        }
        return {
            name: char.name,
            gender: char.gender,
            died: char.died,
            culture: char.culture,
            born: char.born
        }
    }
    _toFormatBook(item) {
        for (let i in item) {
            if (item[i] === '') {
                item[i] = 'Не задано'
            }
        }
        return {
            name: item.name,
            numberOfPage: item.numberOfPage,
            publisher: item.publisher,
            country: item.country,
        }
    }
    _toFormatHouse(item) {
        for (let i in item) {
            if (item[i] === '') {
                item[i] = 'Не задано'
            }
        }
        return {
            name: item.name,
            region: item.region,
            coatOfArms: item.coatOfArms,
        }
    }
}

export default GotService;
// person = new GotService(150);
// person.getCharacter()
// .then(rs=>console.log(rs))