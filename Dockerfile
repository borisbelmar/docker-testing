FROM alpine:3.9

RUN apk add --update --no-cache nodejs npm

COPY ["package*.json", "/usr/app/"]

WORKDIR /usr/app

RUN npm install

COPY [".", "/usr/app/"]

EXPOSE 3000

CMD ["npm", "run", "dev"]