const express = require('express')
const bodyParser = require('body-parser')
const file = require('../utils/controls')

const db = 'data/jobs.json'
const router = express.Router()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/create', urlencodedParser, (req,res)=> {
    console.log(req.body)
    const job = res.body
    const data = {
        headline : job.headline,
        skills : job.skills,
        scope: job.scope,
        budget: job.budget,
        title: job.title,
        description: job.description,
        files: job.files

    }
})

module.exports = router