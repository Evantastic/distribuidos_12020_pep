FROM node:lts-alpine AS development
WORKDIR /app
ENV CI true
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm ci
CMD [ "npm", "run", "serve" ]

FROM development AS build
COPY . /app/
RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
