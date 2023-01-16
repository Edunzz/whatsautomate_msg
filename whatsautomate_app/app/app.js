// frontend
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));

// whatsapp api node js
const { Client } = require('whatsapp-web.js');
const client = new Client({
  puppeteer: {
    args: ['--no-sandbox'],
  }
});
client.initialize();

// variables
client_status = "disabled";

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/qr_login', (req, res) => {
  client.on('qr', qr => {
    res.send(qr);
    console.log(qr);
  });
});

app.post('/send', (req, res) => {
  const text_message = req.body.text_message
  const input_file = req.body.input_file
  const list_numbers = req.body.list_numbers

  console.log('Text message:', text_message)
  console.log('Input file:', input_file)
  for (const value of list_numbers.split(",")) {
    console.log(value);
    client.sendMessage("51"+value+"@c.us", text_message);
  }
  res.sendStatus(200)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

client.on('ready', () => {
  console.log('Client is ready!');
  client_status = "enabled";
});

app.get('/status', (req, res) => {
  res.json({
    status: client_status,
    number_server: 1
  });
})

//client.on('message', message => {
//  console.log(message.from);
//  console.log(message.body);
//  client.sendMessage(message.from, message.body);
//});