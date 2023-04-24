FROM node:16.15.0-alpine

# working dir
WORKDIR /server

# Copy Package Json files
COPY /server/package*.json ./
RUN npm install
COPY . .

CMD ["node", "server/app.js"]

# Install 