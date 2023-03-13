const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');


//routes
const AuthController = require('./controllers/auth')
const JobsController = require('./controllers/jobs')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

//routes
app.use('/auth', AuthController)
app.use('/jobs',JobsController)

app.get('/', (req,res)=> {
    res.send({
        appName : 'Tunawork',
        appType : 'REST API'
    })
})

  
  app.listen(3500, ()=>
      console.log('App Runing on port 3500!')
  )

