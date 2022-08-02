const router = require("express").Router()

const characersService = require('./../services/characters.service')

//ALL CHARACTERS
router.get('/movie-characters/list', (req, res) => {

    characersService
      .getAllCharacters()
      .then(response => res.render('characters/characters-list',{ characters: response.data }))
      .catch(err => console.log(err))
  })

//CREATE CHARACTERS
router.get('/movie-characters/create', (req, res) => {
    res.render('characters/create-form')
})

router.post('/movie-characters/create', (req, res) =>{
    
    const {name, actor, house} = req.body

    const characterData = { name, actor, house }

    characersService
    .saveCharacter(characterData)
    .then(response => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
})

module.exports = router