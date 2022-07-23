FROM node:18.6.0-alpine3.15
# FROM node:16

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
# RUN npm install nodemon
RUN npm install && mkdir /api && mv ./node_modules ./api

WORKDIR /api

COPY . /api

EXPOSE 8800

ENTRYPOINT ["npm", "start"]