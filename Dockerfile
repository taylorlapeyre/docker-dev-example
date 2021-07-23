FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 8181
EXPOSE 18181

CMD [ "npm", "run", "dev" ]
