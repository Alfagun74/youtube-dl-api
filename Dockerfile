FROM node:15.11.0-alpine
ENV TZ=Europe/Berlin
RUN apk upgrade --update \
    && apk add -U tzdata \
    && cp /usr/share/zoneinfo/${TZ} /etc/localtime \
    && apk del tzdata \
    && rm -rf \
    /var/cache/apk/*
RUN apk add python
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build
RUN rm -rf /tmp/app
CMD ["npm", "start"]
EXPOSE 80