const express = require('express')
const router = express.Router()
const{allDogs} = require("../controllers/AllDogs")



router.get("/all", async(req, res) =>{
const{By, Temperament, order, name, Page} = req.query
    try {
        const alldogs = await allDogs(By,Temperament,order, name, Page)
        res.status(200).json(alldogs)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
})




module.exports = router