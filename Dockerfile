FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install expo-cli --global

COPY . .

EXPOSE 8091

CMD expo start
