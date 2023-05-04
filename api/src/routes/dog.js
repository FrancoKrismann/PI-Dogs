const express = require('express')
const router = express.Router()
const {postDog} = require("../controllers/Post_Dog")
const{searchById} = require("../controllers/SearchID_Name")


router.post("/create", postDog)

router.get("/:id", async(req, res) => {
    const {id} = req.params
    try {
        const getId = await searchById(id)
        res.status(200).json(getId)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})




module.exports = router