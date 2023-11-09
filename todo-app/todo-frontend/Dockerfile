#This is to test that when I run script command, it really saves all the output
FROM node:16 as test-stage
WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN script -c "CI=true npm test" testResults.txt 
#CMD npm run start

FROM node:16 as build-stage
ENV REACT_APP_BACKEND_URL=http://localhost:3458
WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build
COPY --from=test-stage /usr/src/app/testResults.txt /usr/src/app/build

# This is a new stage, everything before this is gone, except the files we want to COPY
FROM nginx:1.20-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html



#docker build . -t todo-frontend
# docker run -p 8000:80 todo-frontend

#REACT_APP_BACKEND_URL=http://localhost:3458 npm run start