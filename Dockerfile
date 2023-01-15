FROM node:lts-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

CMD [ "node", "dist/main.js" ]
