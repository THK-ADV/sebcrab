# sebcrab - Continuous deployment of COPS10 components

Sebcrab ist a helper tool that uses GitHub webhooks to trigger a deployment whenever there is a push on a main branch of a tracked repository.

## Prerequisites

### Development

For local development we suggest you to install [Deno](deno.land). Check whether Deno was successfully installed by executing ``deno --version`` on your command line. If the command returns an error, Deno has not been installed properly. You might need to update you PATH variable and perform a logout/login to proceed. 

### Production

For productive environement we highly recommend using our provided Docker image. Make sure that [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) is installed on your machine. You can check by getting the version of docker (``docker --version``) as well as the version of docker-compose (``docker-compose --version``).

## Setup

Create a ``.env`` file to set basic configuration. See [``.env.example``](.env.example) as reference.

### Development

Start the service with the following command.
```
deno run --allow-net --allow-read --allow-env --allow-run main.ts
```

### Production

Start the service with ``docker-compose up --build``.
