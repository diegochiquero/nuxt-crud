#Use an official Node-alpine runtime as a parent image
FROM node:12-alpine

# Create app directory to hold the application inside de image. /usr viene de “User System Resources”
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
