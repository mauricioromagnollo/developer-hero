FROM node:18-slim

WORKDIR /doe-backend/

COPY package.json package-lock.json /doe-backend/

COPY . .

RUN npm i --silent

USER node

EXPOSE 3000
