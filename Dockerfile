from ubuntu:18.04

RUN apt-get update -y

RUN apt-get install nodejs -y

RUN apt-get install npm -y

WORKDIR /usr/src/app

RUN mkdir teste

RUN mkdir logs

COPY package.json .

RUN npm i

COPY app.js .

EXPOSE 3000

CMD node app > logs/app.log