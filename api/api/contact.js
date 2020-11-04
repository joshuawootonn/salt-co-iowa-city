const mailer = require("@sendgrid/mail");
require("dotenv").config();
mailer.setApiKey(process.env.SENDGRID_API_KEY);

const createMessage = ({ to, subject, name, message, email }) => ({
  from: "jose56wonton@gmail.com", // Change to your verified sender
  subject,
  personalizations: [
    {
      to: [
        {
          email: to,
        },
      ],
      dynamic_template_data: {
        name,
        email,
        message,
        subject,
      },
    },
  ],
  template_id: "d-62acc838094c43888ca0020db35dadc7",
});

module.exports = (req, res) => {
  console.log(req.body);
  mailer
    .send(createMessage(req.body))
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => {
      console.error(error);
      return res.status(500).send(error);
    });
};
