const express = require('express')
const app = express()
const bodyParser = require('body-parser')


//routes
const AuthController = require('./controllers/auth')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

//routes
app.use('/auth', AuthController)

app.get('/', (req,res)=> {
    res.send({
        appName : 'Tunawork',
        appType : 'REST API'
    })
})

  
  app.listen(3500, ()=>
      console.log('App Runing on port 3500!')
  )

