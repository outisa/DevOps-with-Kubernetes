
FROM node:alpine

WORKDIR app

COPY . .
RUN npm ci
EXPOSE 5000

ENTRYPOINT ["npm", "start"]