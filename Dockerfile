FROM denoland/deno:alpine as base

WORKDIR /service

RUN apk update
RUN apk upgrade
RUN apk add git
RUN apk add docker
RUN apk add docker-compose

COPY . ./

RUN deno cache src/main.ts

CMD [ "deno", "run", "--allow-net", "--allow-read", "--allow-env", "--allow-run", "src/main.ts" ]