FROM node:16

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm start is the command to start the application in development mode
CMD ["npm", "start"]

# docker build -f ./dev.Dockerfile -t hello-front-dev .

#on windows using git bash, this is the command to develop react with hot reloading.
#docker run --name hello-front-dev-cont -p 3000:3000 --rm -v /${PWD}:/usr/src/app/ -e WATCHPACK_POLLING=true hello-front-dev
#Polling uses a lot of CPU. you can look up how to possibly optimise this by putting a flag in your webpack config


#docker kill hello-front-dev-cont
