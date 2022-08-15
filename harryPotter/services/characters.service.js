const axios = require('axios')

class CharactersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://hp-api.herokuapp.com/api'
        })
    }

    getAllCharacters() {
        return this.api.get('/characters')
    }

    getOneCharacter(characterId) {
        return this.api.get(`/characters/${characterId}`)
    }

    saveCharacter(characterInfo) {
        return this.api.post(`/characters`, characterInfo)
    }

    editCharacter(characterId, characterInfo) {
        return this.api.put(`/characters/${characterId}`, characterInfo)
    }

    deleteCharacter(characterId) {
        return this.api.delete(`/characters/${characterId}`)
    }
}

module.exports = new CharactersService()