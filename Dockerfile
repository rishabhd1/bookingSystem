FROM node:latest

COPY . .

RUN npm install

EXPOSE 5001

CMD ["npm", "start"]
