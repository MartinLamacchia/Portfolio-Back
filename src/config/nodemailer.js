const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAILCLIENT,
    pass: process.env.PASSWORDCLIENT,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Email enviado con exito!!!");
  })
  .catch((error) => console.log("Error al enviar el mail", error));

module.exports = transporter;
