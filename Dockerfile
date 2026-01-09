FROM node:22-alpine

WORKDIR /usr/app

COPY package.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "dist", "-l", "3000"]

