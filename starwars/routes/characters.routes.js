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
router.get('/create', (req, res, next) =>{

    characersService
    .find()
    .then((characters) =>res.render('characters/create', {characters}))
    .catch(error => next(new Error(error)))

})

module.exports = router