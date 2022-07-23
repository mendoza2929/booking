FROM node:18.6.0-alpine3.15

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /admin && mv ./node_modules ./admin

WORKDIR /admin

COPY . /admin

EXPOSE 3000

ENTRYPOINT ["npm", "start"]