import nodemailer from "nodemailer";

export const sendMail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT || 587, // Use port 587 as default
    secure: false, // Set to true if using port 465
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const emailOptions = {
    from: "Cinema support<support@cinema.com>",
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

  await transporter.sendMail(emailOptions);
};
