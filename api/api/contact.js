const mailer = require("@sendgrid/mail");
require("dotenv").config();
mailer.setApiKey(process.env.SENDGRID_API_KEY);

const createMessage = ({to, subject, name, message, email}) => ({
  from: process.env.FROM_EMAIL,
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

const handler = (request, response) => {
  console.info("Method: ", request.method);
  console.info("Body: ", request.body);
  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }
  if (request.method === "GET") {
    return response.end("<html><body><p>Hi :)</p></body></html>");
  }
  if (request.method === "POST") {
    const sendGridRequestBody = createMessage(request.body);
    console.info("SendGrid Request Body: ", sendGridRequestBody);
    mailer
        .send(sendGridRequestBody)
        .then(() => response.status(200).json({success: true}))
        .catch((error) => {
          console.error(error);
          return response.status(500).send(error);
        });
  }
};

module.exports = handler;
