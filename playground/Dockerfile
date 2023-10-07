FROM node

WORKDIR /usr/src/app

COPY . .

COPY --chown=node:node . .
# - Differences between ci and install:
# - install may update the package-lock.json
# - install may install a different version of a dependency if you have ^ or ~ in the version of the dependency.
# - ci will delete the node_modules folder before installing anything
# - ci will follow the package-lock.json and does not alter any files
RUN npm ci --only=production
CMD DEBUG=playground:* npm start