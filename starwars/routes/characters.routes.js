const router = require("express").Router()

const { response } = require("express")
const characersService = require('./../services/characters.service')

//ALL CHARACTERS
router.get('/movie-characters/list', (req, res) => {

    characersService
      .getAllCharacters()
      .then(response => res.render('characters/characters-list',{ characters: response.data }))
      .catch(error => next(new Error(error)))
  })

//MORE CHARACTERS DETAILS
router.get('/movie-characters/:id', (req, res) => {
   
    const { id } = req.params

    characersService
        .getOneCharacter(characterId)
        .then(response => res.render('characters/characters-list/details', { characters: response.data }))
        .catch(error => next(new Error(error)))
})

router.post('/movie-characters/:id', (req, res) =>{
    
    const { id } = req.params

    const {name, actor, house} = req.body

    characersService
        .findByIdAndUpdate(id)
        .then(() => res.redirect('/movie-characters/list'))
        .catch(error => next(new Error(error)))
})

module.exports = router