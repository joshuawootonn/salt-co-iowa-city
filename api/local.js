const contact = require('./api/contact')
const express = require("express")
const bodyParser = require("body-parser")
require('dotenv').config();
const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.post("/",contact);

app.listen(process.env.PORT || 3000)