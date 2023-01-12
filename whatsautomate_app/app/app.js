// frontend
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const qrcode = require('qrcode-terminal');

// whatsapp api node js
const { Client } = require('whatsapp-web.js');
const client = new Client({
  puppeteer: {
    args: ['--no-sandbox'],
  }
});

app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/qr_login', (req, res) => {
  client.initialize();
  client.on('qr', qr => {
    qrcode.generate(qr, { small: true }, qr_generado => {
      res.send(qr_generado);
      console.log('QR RECEIVED', qr_generado);
    });
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
});

//client.on('message', message => {
//  console.log(message.from);
//  console.log(message.body);
//  client.sendMessage(message.from, message.body);
//});