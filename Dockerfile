FROM node:10-alpine
MAINTAINER Tauren Kristich tauren.kristich@gmail.com
EXPOSE 1337
RUN mkdir -p /usr/src/app
# HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:1337/v1/test/health || exit 1
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install
ENTRYPOINT ["node", "dist/index"]
