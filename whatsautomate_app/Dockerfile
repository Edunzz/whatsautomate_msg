FROM landx/whatsapp-api-dashboard

WORKDIR /app
COPY ./app .
RUN npm install -g npm@9.2.0
RUN npm i whatsapp-web.js
RUN npm i qrcode-terminal
EXPOSE 3000
CMD ["npm", "start"]