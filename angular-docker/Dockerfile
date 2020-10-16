FROM  node:12-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 1111

CMD ["npm", "start"]