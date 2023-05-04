const { Router } = require('express');
const dogs = require("./dogs")
const dog = require("./dog")
const temperRoute = require("./temperament")



//----------------------------------------------------------------------------//
const cors = require("cors")
const express = require("express")
const router = Router();


router.use(express.json())
router.use(cors())
//--------------------------------------------------------------------------//
router.use("/dogs",dogs)
router.use("/dog", dog)
router.use("/temperament", temperRoute)

//-----------------------------------------------------------------------------------//
module.exports = router;
