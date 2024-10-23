require('dotenv').config();
const mailjet = require('node-mailjet').apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

const sendEmail = async (to, subject, body) => {
  try {
    const result = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'talal250.ta@gmail.com',
            Name: 'manshore'
          },
          To: [
            {
              Email: to
            }
          ],
          Subject: subject,
          TextPart: body
        }
      ]
    });
    console.log('Email sent successfully!');
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error sending email' };
  }
};

module.exports = { sendEmail };
