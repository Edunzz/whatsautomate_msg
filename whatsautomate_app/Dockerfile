FROM landx/whatsapp-api-dashboard

WORKDIR /app
COPY ./app .
RUN npm install
RUN npm i whatsapp-web.js
RUN npm i qrcode-terminal
EXPOSE 3000
CMD ["npm", "start"]