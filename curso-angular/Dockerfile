FROM node:16.14
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY angular.json ./
RUN npm install
COPY src src