const express = require('express');
// const path = require('path');
// var cors = require('cors');
const router = express.Router();
var nodemailer = require('nodemailer');
// const creds = require('/config/mail');
var bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// add this line before nodemailer.createTransport()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     host: 'smtp.gmail.com',
//     port:587,
//     secure: false,
//         auth: {
//         user: 'abhayk7075@gmail.com',
//         pass: 'bsnl7777'
//     }
// });
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'abhayk7075@gmail.com',
        clientId: "728209277595-pjm8qpa0n8thr4lj90tf73fs6ddl1ulv.apps.googleusercontent.com",
        clientSecret: "fs25-8etJn9ZvK3DWGxp4Qo1",
        refreshToken: "1/StH29MqybKVY-T1CTewI8UbEiRuzcRJrJKnyCNY2tZI",
        accessToken: "ya29.GluAB37qdnWGgRTpyZ2bddCkCgb4xINIKFvyD-LxZK1nrizQkM_CvDIAfg0H2xJCS_F7oV8oXoNwwZ9NTHv1el39_IkhtZ9L6FKHCXapZTyKeBclZKlfrSp8OM9H"
    },
});
// refreshToken: process.env.GMAIL_REFRESH_TOKEN,
// accessToken: process.env.GMAIL_ACCESS_TOKEN,

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', async (req, res) => {
    // console.log(req.body);
    var name = req.body.technologies.label;
    var email = req.body.businessemail;
    var quantity = req.body.quantity;
    var content = `Techie name: ${name} \n Techie email: ${email} \n Experiance: ${quantity} Years `;
  
    var mail = {
      from: name,
      to: email,  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    await transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
});

// An api endpoint that returns a short list of items
// app.get('/api/getList', (req,res) => {
//     var list = ["item1", "item2", "item3"];
//     res.json(list);
//     console.log('Sent list of items');
// });

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/public/index.html'));
// });

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);