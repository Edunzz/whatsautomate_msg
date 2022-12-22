FROM node:latest

# Create app directory
WORKDIR /usr/src/app

RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose the app's port
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]