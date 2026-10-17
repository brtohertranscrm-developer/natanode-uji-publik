FROM node:22-alpine
WORKDIR /app
COPY server.js .
RUN false
CMD ["node", "server.js"]
