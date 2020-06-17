FROM node:13.12.0

ENV CI=true

WORKDIR /code
COPY package.json package-lock.json /code/
RUN npm ci
RUN npm install pm2 -g
COPY src /code/src

CMD [ "pm2-runtime", "./src/index.js" ]
