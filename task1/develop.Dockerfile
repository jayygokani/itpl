FROM node:14.0.0

COPY . .

WORKDIR /

# RUN cp example.env .env

RUN npm install

CMD [ "npm run dev" ]