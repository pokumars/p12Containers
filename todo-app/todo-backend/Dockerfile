FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 
USER node

CMD npm start
#docker build -t todo-app-backend . && docker run -p 3000:3000 todo-app-backend