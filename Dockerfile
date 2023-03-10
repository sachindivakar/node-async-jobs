FROM node:19

WORKDIR /app

COPY . /app/

RUN npm i


EXPOSE 4001

ADD start.sh ./
RUN chmod +x ./start.sh

CMD ["./start.sh"]