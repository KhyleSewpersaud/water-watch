FROM node:21-alpine

WORKDIR /app

COPY package*.json .

COPY tailwind.config.js .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "build" ]