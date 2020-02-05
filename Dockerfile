FROM node:10

COPY Deploy .
COPY articles/ docs/articles/
COPY templates/ docs/templates
COPY readme.md docs/

RUN npm install
RUN npm run compile
RUN npm run start
EXPOSE 3000
CMD [ "node", "server.js" ]   