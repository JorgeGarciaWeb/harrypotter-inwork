const router = require("express").Router()

const characersService = require('./../services/characters.service')

//ALL CHARACTERS
router.get('/movie-characters/list', (req, res, next) => {

    characersService
      .getAllCharacters()
      .then(response => res.render('characters/characters-list',{ characters: response.data }))
      .catch(error => next(new Error(error)))
  })

//MORE CHARACTERS DETAILS
router.get('/movie-characters/:id', (req, res, next) => {
   
  
    characersService
        .getOneCharacter(req.params.id)
        .then(response => {
            const character = response.data
            res.render(  console.log(response.data)) 
        })
        .catch(error => next(new Error(error)))
})


module.exports = router