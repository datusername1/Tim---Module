FROM node:10

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install

RUN npm install nodemon

COPY . .

EXPOSE 3004

RUN npm run build

CMD ["npm", "start"]