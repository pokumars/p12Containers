FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install 
USER node

CMD npm run dev
#docker build -t todo-app-backend . && docker run -p 3000:3000 todo-app-backend

#REDIS_URL=redis://localhost:3457 MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database PORT=3458 npm run dev

