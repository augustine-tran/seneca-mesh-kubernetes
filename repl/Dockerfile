FROM node:10-alpine

RUN apk add --no-cache make gcc g++ python

RUN npm install -g yarn
COPY * /app/
RUN cd /app/ && yarn

CMD ["node", "/app/service-prod.js"]
