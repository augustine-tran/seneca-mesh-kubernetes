FROM node:10-alpine

RUN apk add --no-cache make gcc g++ python

COPY * /app/
RUN cd /app/ && yarn

CMD ["node", "/app/server.js"]
