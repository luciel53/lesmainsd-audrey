const nodemailer = require("nodemailer");

module.exports.handler = async function (event) {
  const { name, email, phone, subject, message } = JSON.parse(event.body);

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "mail1.netim.hosting",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "contact@lesmainsdaudrey44.com",
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage: ${message}\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "L'email a bien été envoyé." }),
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "L'email n'a pas pu être envoyé.",
        details: error.message,
      }),
    };
  }
};
