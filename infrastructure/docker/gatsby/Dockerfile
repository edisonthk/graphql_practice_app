FROM node:12.18.2-alpine

EXPOSE 8000

WORKDIR /usr/src/app/frontend

COPY ./frontend/package.json .
COPY ./frontend/yarn.lock .

RUN apk add --no-cache bash git \
  && yarn global add gatsby-cli \
  && gatsby telemetry --disable

CMD ["sh", "-c", "yarn && gatsby develop -H 0.0.0.0"]
