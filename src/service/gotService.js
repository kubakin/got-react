
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
        return this.getResource(`/characters?page=${page}&pageSize=${size}`)
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
}

export default GotService;
// person = new GotService(150);
// person.getCharacter()
// .then(rs=>console.log(rs))