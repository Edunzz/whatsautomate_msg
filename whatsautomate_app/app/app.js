// frontend
const express = require('express');
const app = express();
const path = require('path');

// whatsapp api node js
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client({
	puppeteer: {
		args: ['--no-sandbox'],
	}
});

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/autorizar', (req, res) => {
  client.initialize();
  client.on('qr', qr => {
      qrcode.generate(qr, {small: true});
  });
});

app.get('/sent', (req, res) => {
  console.log('se esta enviando un mensaje');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	console.log(message.from);
  console.log(message.body);
  client.sendMessage(message.from, message.body);
});