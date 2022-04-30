const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "35977efea4f744",
    pass: "1d3b64bf185d6e"
  }
});

module.exports = transport;



