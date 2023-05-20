FROM node:latest

WORKDIR /server

COPY package.json package-lock.json ./

RUN npm install --omit=dev

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 8000

CMD ["node", "dist/server.js"]

