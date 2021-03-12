FROM node:14.14.0-alpine3.12

RUN mkdir -p /home/scalac

COPY . /home/scalac

WORKDIR /home/scalac

EXPOSE 3000 

ADD docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["sh", "/usr/local/bin/docker-entrypoint.sh"]
