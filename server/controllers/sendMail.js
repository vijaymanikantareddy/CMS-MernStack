nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // Connect with smtp server
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    // secure: false,
    auth: {
      user: "clyde.willms@ethereal.email",
      pass: "nK5j7bTngEfYHQ5abQ",
    },
  });

  let info = await transporter.sendMail({
    from:  '"Vijay " <svmreddy7799@gmail.com>',
    to: "svmreddy7799@gmail.com",
    subject: "Hello Noid mailer Checking",
    text: "Checking nodemailer",
    html: "<h1>Hello</h1>"
  })
  console.log("Message sent: %s", info.messageId)

  res.send("I sent a mail");
};

module.exports = sendMail;
