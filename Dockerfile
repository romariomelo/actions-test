FROM node:19-alpine

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm install && \
    npm run build

RUN chown -R node:node .

USER node

EXPOSE 3000

CMD npm run typeorm migration:run -- -d ./datasource.ts && npm run test:ci