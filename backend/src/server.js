const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')

const app = express()

mongoose.connect('mongodb://localhost:27017/omnistack9', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors({origin:true, credentials: true}))
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3333)

//MongoDB Atlas Teste (3.0)
//mongodb+srv://userteste:userteste@omnistack9-ujsmi.mongodb.net/omnistackteste?retryWrites=true&w=majority