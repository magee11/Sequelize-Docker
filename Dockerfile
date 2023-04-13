FROM node:16

WORKDIR /usr/src/mysql-node

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 8080

CMD [ "npm" , "start" ]