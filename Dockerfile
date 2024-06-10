FROM node:buster-slim

WORKDIR /usr/src/app

COPY . .

RUN npm i

RUN cd blog && npm i

RUN cd evilcorp && npm i

EXPOSE 3000
EXPOSE 3001

CMD ["npm", "run", "start-all"]
