const nodemailer = require("nodemailer");

const Emails = async (req, res) => {
    
  const { name, email, message } = req.body;
  const password = process.env.PASSWORD;
  console.log(name, email, message)
  try {
    if (!name || !email || !message) {
      return res.status(500).send("Ingrese todos los datos");
    } else {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "javizaldu9@gmail.com",
          pass: password,
        },
      });
      const mailOptions = {
        from: "javizaldu9@gmail.com",
        to: "javizaldu9@gmail.com",
        subject: "Nuevo contacto desde portfolio",
        text: `
                    Nombre: ${name}
                    Email: ${email}
                    Mensaje: ${message}
                    `,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return res.status(400).send("Error al enviar correo");
        } else {
          return res.status(200).send("Correo enviado");
        }
      });
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = Emails;