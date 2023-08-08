const express = require('express')
const route = express.Router()
const User = require('../models/userSchema')
route.post('/register', async (req, res) => {

    const user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).send('Already Registered')
    }
    const newUser = await User.create(req.body)

    return res.status(201).json({
        message: "sucess"
    })

})



module.exports = route