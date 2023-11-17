FROM node:16

WORKDIR /usr/src/app

COPY . .

# only for dev because of volume copying node_modules problem https://stackoverflow.com/a/72485169/9767705
RUN rm -rf node_modules
RUN npm install 
RUN npm rebuild bcrypt --build-from-source
USER node

CMD npm run watch

#docker build -t bloglist-backend-dev . --file dev.Dockerfile && docker run -p 3003:3003 --name bloglist-backend-dev-cont --env-file .env bloglist-backend-dev
#docker build -t bloglist-backend-dev . --file dev.Dockerfile

#If you have many environment variables and especially if they're meant to be secret, you can use an env-file:
#docker run -p 3003:3003 --name bloglist-backend-dev-cont --env-file .env bloglist-backend-dev

#PORT=3458 npm run dev

