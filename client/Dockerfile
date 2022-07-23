FROM node:18.6.0-alpine3.15

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /app && mv ./node_modules ./app

WORKDIR /app

COPY . /app

EXPOSE 3000

ENTRYPOINT ["npm", "start"]