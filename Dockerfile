FROM node:12

WORKDIR /app

COPY ./app/package.json package-lock.json ./
RUN npm install

COPY ./app .

EXPOSE 3000

CMD ["npm", "start"]
