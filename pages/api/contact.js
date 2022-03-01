/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
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
      from: 'canadian.arma@gmail.com',
      to: `${process.env.REACT_APP_MY_EMAIL}`,
      subject: `Message From ${req.body.firstName} ${req.body.lastName}`,
      text: req.body.messageContent + " | Sent from: " + req.body.emailAddress,
      html: `<div>${req.body.messageContent}</div><p>Sent from:
      ${req.body.emailAddress}</p>`
    }

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
              alert("The message was sent successfully! Thank you :)")
          }
      });
  });

    res.status(200)
};