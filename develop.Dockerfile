FROM node:14

COPY . /jay

WORKDIR /jay

RUN ls
RUN ls ../
RUN stop
# RUN cp example.env .env

# RUN npm install

CMD [ "npm install && npm run dev" ]

