const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');


//application/x-wwww-form-unlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
const User = require('./models/User');
mongoose.connect('mongodb+srv://chansushin:Admin1234@chan.emvnj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected..'))
  .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!~~안녕하세요~ '))


app.post('/register', (req, res) => {



  const user = new User(req.body)

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true  
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))