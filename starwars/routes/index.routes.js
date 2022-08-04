const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("index")
})

//CHARACTERS ROUTES
router.use("/", require("./characters.routes"))


module.exports = router
