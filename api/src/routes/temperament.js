const express = require('express')
const router = express.Router()
const {alltemperament} = require("../controllers/Temperaments")
const { all } = require('axios')



router.get("/all", async(req, res) =>{
    try {
        const alltemp = await alltemperament()
        res.status(200).json(alltemp)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

module.exports = router