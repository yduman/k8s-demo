# get the Node v12 Image
FROM node:12-alpine

# set the current working directory to /app
WORKDIR /app

# copy the package.json and yarn.lock to install deps
COPY package.json yarn.lock ./

# install deps
RUN yarn install --silent

# copy sources without node_modules
COPY . .

# expose port 3000
EXPOSE 3000

# run this command when you start the container
CMD [ "yarn", "start" ]