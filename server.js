const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(express.static("public")) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
  const email = req.body.email;
  const message = {
    to: email,
    from: 'wvh@Deakin.edu.au',
    subject: 'DEV@Deakin Newsletter',
    text: 'Welcome to Deakin newsletter',
  };
  require('dotenv').config();
  const sendGridMail = require('@sendgrid/mail');
  sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

  sendGridMail.send(message).then(() => {
    console.log('Email was successfully sent');
  });
  res.send("Email was successfully sent");
  console.log(email);
});

app.listen(8080, function (request, response) {
  console.log('server is running');
});
