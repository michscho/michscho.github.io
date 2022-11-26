const nodemailer = require('nodemailer');
const config = require('./config');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config,
  },
});

transporter.on('token', (token) => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
  console.log('Expires: %s', new Date(token.expires));
});
const send = ({ email, name, text, events }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: 'michael.schott@netlight.com',
    subject: `Neue Nachricht von ${from}`,
    text,
    html: `<p>${text}</p><p>${events}</p>`,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
  });
};

module.exports = send;
