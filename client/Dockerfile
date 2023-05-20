FROM node:latest

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]