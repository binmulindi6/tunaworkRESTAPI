const express = require('express')
const bodyParser = require('body-parser')
const file = require('../utils/controls')

const db = 'data/jobs.json'
const router = express.Router()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all', (req,res) => {
    file.read(db)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})
router.get('/:id', (req,res) => {
    const id  = req.params.id
    file.read(db)
        .then(data => {
            const job = data.find((item) => {
                return item.id === id
            })
            res.send(job)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

router.post('/create', urlencodedParser, (req,res)=> {
    // console.log(req.body)
    const job = req.body
    const data = {
        title: job.title,
        headline : job.headline,
        category : job.category,
        skills : job.skills,
        scope: job.scope,
        budget: job.budget,
        description: job.description,
        descriptionFile: job.descriptionFile,
        user: job.user
    }

    file.save(db,data)
    res.sendStatus(200)
})

module.exports = router