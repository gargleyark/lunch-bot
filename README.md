# Lunch bot

## Usage:

You should copy `.env.sample` to `.env` and then:

`yarn dev` - Run the development server.

`yarn test` - Run tests.

`yarn test:watch` - Run tests when files update.

`yarn build` - Builds the server.

`yarn start` - Runs the server.

## Endpoints:

A `GET` request to `/` will respond with lunch options

A `POST` request to `/` will echo any json sent in the request body.
