FROM node:22-alpine AS builder

WORKDIR /usr/app

COPY package.json package-lock.json* ./

RUN npm ci --only=production=false

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /usr/app

RUN npm install -g serve

COPY --from=builder /usr/app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
