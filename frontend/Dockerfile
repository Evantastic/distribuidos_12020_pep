FROM node:lts-alpine
WORKDIR /app
ENV CI true
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm ci
CMD [ "npm", "run", "serve" ]
