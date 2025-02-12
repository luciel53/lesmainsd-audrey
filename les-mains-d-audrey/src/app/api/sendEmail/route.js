
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, subject, message } =
    await req.json();

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
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);


  const mailOptions = {
    from: "contact@lesmainsdaudrey44.com",
    to: "contact@lesmainsdaudrey44.com",
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage: ${message}\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "L\'email a bien été envoyé." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l\'envoi de l\'email", error);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l\'envoi de l\'email" }),
      { status: 500 }
    );
  }
}
