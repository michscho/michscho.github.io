const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mailer = require('./mailer');

const app = express();

// Setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms',
  ),
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// Post RSVP Email
app.post('/rsvp', (req, res) => {
  const { email = '', name = '', message = '', events = [] } = req.body;

  mailer({ email, name, text: message, events })
    .then(() => {
      console.log(`Sent the message "${message}" from <${name}> ${email}.`);
      res.redirect('/#success');
    })
    .catch((error) => {
      console.log(
        `Failed to send the message "${message}" from <${name}> ${email} with the error ${error &&
          error.message}`,
      );
      res.redirect('/#error');
    });
});

module.exports = app;
