export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.REACT_APP_EMAIL_HANDLER,
        pass: process.env.REACT_APP_EMAIL_PASSWORD,
      },
      secure: true,
    })
    const mailData = {
      from: 'antoni.bartczak.mailer@gmail.com',
      to: `${process.env.REACT_APP_MY_EMAIL}`,
      subject: `Message From ${req.body.firstName} ${req.body.lastName}`,
      text: req.body.messageContent + " | Sent from: " + req.body.emailAddress,
      html: `<div>${req.body.messageContent}</div><p>Sent from:
      ${req.body.emailAddress}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
}

