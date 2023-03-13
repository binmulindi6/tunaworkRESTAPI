const express = require('express')
const bodyParser = require('body-parser')
const file = require('../utils/controls')

const db = 'data/users.json'
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
        category: user.category,
        newsLetter : user.newsLetter
    }
    // console.log(data)
    file.save(db,data)
    // fs.writeFile(db,JSON.stringify(data),(err)=>{
    //     if (err) console.log(err)
    // })
    res.status(200).send('success')
})

// router.post('/login/checkmail',urlencodedParser, (req,res) => {
//     const user = req.body
//     file.read(db)
//     .then((users) => {
//         if(users.find((data) => {
//             return data.email === user.email
//         })){
//             res.status(200).send('succes')
//         }else{
//             res.status(200).send({message :'email incorrect'})
//         }
//     })
//     .catch((err)=>{
//         cres.status(500).send('error')
//     })
// })

router.post('/login',urlencodedParser, (req,res) => {
    const user = req.body
    // console.log(req.body)
    let dbUser
    file.read(db)
    .then((users) => {
        if(users.find((data) => {
            dbUser = data
            return data.email === user.email
        })){
            res.status(200).send(dbUser)
        }else{
            res.status(200).send({message :'email incorrect'})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
module.exports = router