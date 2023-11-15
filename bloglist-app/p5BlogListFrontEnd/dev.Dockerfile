FROM node:16

WORKDIR /usr/src/app

COPY . .

# use npm install instead of npm ci since we are going to be in development mode
RUN npm install

# npm start is the command to start the application in development mode
CMD ["npm", "start"]

# docker build -f dev.Dockerfile --tag bloglist-frontend-dev .
# docker run --name bloglist-frontend-dev-cont -p 3000:3000 --rm -v /${PWD}:/usr/src/app/ -e REACT_APP_BACKEND_URL=http://localhost:3003 bloglist-frontend-dev