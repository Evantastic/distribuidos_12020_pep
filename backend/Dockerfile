FROM node:13.12.0 AS development

ENV CI=true

WORKDIR /code
COPY package.json package-lock.json /code/
RUN npm ci
COPY src /code/src

CMD [ "npm", "start" ]

FROM development AS production

CMD [ "npx", "pm2", "start", "/code/src/index.js", "--name", "comisaria_virtual", "--no-daemon" ]
