const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
    const body = req.body;
    
    const response = await User.create({
        name: body.name
    })

    return res.status(201).json({
        message: "User succesfull created",
        data: response
    })
})

module.exports = router;

