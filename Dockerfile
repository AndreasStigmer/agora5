FROM node:latest
WORKDIR /var/app/agora_app
COPY ./package*.json /var/app/agora_app
RUN npm install

COPY . /var/app/agora_app
ENV port 80
EXPOSE 3000
CMD ["npm","run", "dev"]

