# docker-node-build
#
# VERSION               0.3

FROM danscan/node

ADD . /app
WORKDIR /app

RUN npm install \
  bower install --allow-root \
  grunt

ENV NODE_ENV production
ENV PORT 4000
EXPOSE 4000

CMD node app.js