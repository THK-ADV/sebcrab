FROM denoland/deno:latest as base

WORKDIR /service

RUN apt-get update && apt-get install -y git

COPY . ./

RUN deno cache src/main.ts

CMD [ "deno", "run", "--allow-net", "--allow-read","--allow-env", "--allow-run", "src/main.ts" ]