const Contact = require("../models/Contact");
const transporter = require("../config/nodemailer");

const newContact = async (req, res) => {
  const { email, name, phone, message } = req.body;

  try {
    // Guarda el mensaje en la base de datos
    const newMessage = await Contact.create({
      email,
      name,
      phone,
      message,
    });

    // Configurar el contenido del correo electronico para el administrador
    const clientEmailSend = {
      from: newMessage.name,
      to: process.env.EMAILCLIENT,
      subject: "Nuevo mensaje del formulario de contacto",
      text: `Nombre: ${newMessage.name}\nEmail: ${newMessage.email}\nMensaje: ${newMessage.message}`,
    };

    await transporter.sendMail(clientEmailSend, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo electronico:", error);
      } else {
        console.log("Correo electronico enviado:", info.response);
      }
    });

    // Configurar el contenido del correo electronico automatico para el cliente
    const adminEmailSend = {
      from: process.env.EMAILCLIENT,
      to: newMessage.email,
      subject: `Gracias por contactarme ${newMessage.name}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abel&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
        <style>
          body {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Abel', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
          }
      
          container {
            width: 100%;
            height: auto;
            margin: 0 auto;
            text-align: center;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
      
          main {
            padding: 20px 0;
          }
      
          main p {
            font-size: 1rem;
            line-height: 1.5;
            margin-bottom: 1rem;
          }
        </style>
      </head>
      <body>
        <container style="">
          <main>
            <p>Estimado/a ${name},</p>
            <p>
              Gracias por ponerte en contacto. He recibido tu mensaje y quiero
              agradecerte sinceramente por tomarte el tiempo de compartir tus
              inquietudes conmigo. Tu interés es de suma importancia.
            </p>
            <p>Me comprometo a ponerme en contacto contigo en breve.</p>
            <p>
              Muchas gracias por tu paciencia, si tienes alguna pregunta adicional, no dudes en responder a este correo
              electrónico.
            </p>
            <p>Atentamente,</p>
            <p>Martin</p>
          </main>
        </container>
      </body>
      </html>`,
    };

    await transporter.sendMail(adminEmailSend, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo electrónico:", error);
      } else {
        console.log("Correo electrónico enviado:", info.response);
      }
    });

    console.log("Correo Enviado");
    res.status(200).json({
      success: true,
      message:
        "¡Correo electrónico enviado con éxito! Por favor, espera en tu bandeja de entrada la respuesta del administrador. ¡Gracias por tu mensaje!",
      newMessage,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { newContact };
