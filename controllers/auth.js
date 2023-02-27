const controls = require('../utils/controls')
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')


const router = express.Router()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/login' , (req,res) => {
    res.send('login')
    // console.log(req.body)
})
const users = []
router.post('/register',urlencodedParser, (req,res) => {


    const user = req.body
    const data  = {
        firstname : user.firstname,
        lastname: user.lastname,
        email : user.email,
        password : user.password,
        category: user.category
    }
    console.log(data)
    fs.writeFile('data/users.json',JSON.stringify(data),(err)=>{
        if (err) console.log(err)
    })
    res.status(200).send('success')
})

module.exports = router