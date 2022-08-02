const router = require("express").Router()

//CHARACTERS ROUTES
router.use("/", require("./characters.routes"))


module.exports = router
