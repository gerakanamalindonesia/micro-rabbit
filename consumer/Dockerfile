FROM node:16.9.0-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 5002
CMD [ "npm", "run", "start" ]