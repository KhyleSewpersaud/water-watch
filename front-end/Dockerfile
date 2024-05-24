FROM node:21-alpine

WORKDIR /app

COPY package*.json .

COPY tailwind.config.js .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=0 /app/front-end/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]