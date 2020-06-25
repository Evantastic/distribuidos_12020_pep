FROM node:lts-alpine AS development
WORKDIR /app
ENV CI=true
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm ci
CMD [ "npm", "start" ]
FROM development AS production
CMD [ "npx", "pm2", "start", "/app/src/index.js", "--name", "comisaria_virtual", "--no-daemon" ]

