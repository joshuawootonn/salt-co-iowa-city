const bodyParser = require("body-parser")
const express = require("express")
const mailer = require('@sendgrid/mail')

require('dotenv').config();

mailer.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    from: 'jose56wonton@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    personalizations: [{
        "to":[
            {
                "email":"joshuawootonn@gmail.com"
            }
        ],
        "dynamic_template_data":{
           name: 'Iron Mna'
        }
    }],
    template_id: 'd-62acc838094c43888ca0020db35dadc7'
}





const app = express()
app.use(bodyParser.urlencoded())
const contactAddress = "hey@yourwebsite.com"

app.post("/contact", (req, res) => {
    return mailer
        .send(msg)
        .then(() => {
            console.log('Email sent')
            return res.json({ success: true });
        })
        .catch((error) => {
            console.error(error)
            return res.status(500).send(error)
        })
})
app.listen(3000)