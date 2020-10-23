const contact = require('./index')
const express = require("express")
const bodyParser = require("body-parser")
require('dotenv').config();
const app = express()

app.use(bodyParser.json())

app.post("/",contact);

app.listen(process.env.PORT || 3000)