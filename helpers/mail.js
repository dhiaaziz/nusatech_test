require("dotenv").config();
const nodemailer = require('nodemailer');

// console.log(process.env.MAIL_USER);
// console.log(process.env.MAIL_PASS);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

const send = (email, subject, html) => {
  const options = {
    from: "APLIKASI NUSATECH by dhiaaziz",
    to: email,
    subject,
    html
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log(`Email terkirim ke ${email}`);
  })
}

module.exports = {
    send,
    transporter
};