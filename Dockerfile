FROM node:10

WORKDIR /usr/scr/app

COPY package*.json ./

#RUN npm install

COPY . .

EXPOSE 3004

#RUN npm run build

CMD ["npm", "start"]