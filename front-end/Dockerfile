FROM node:21-alpine

WORKDIR /app

COPY package*.json .

COPY tailwind.config.js .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD [ "npx", "serve", "-s", "-l", "5173", "./dist" ]