FROM node:alpine

# working dir
WORKDIR /usr/app

# Copy Package Json files
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]

# Install 