# Use the latest Node.js image
FROM node:24-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies (express, dotenv, etc.)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Application source
COPY server.js ./
COPY src/ ./src/

# Expose the port 3000, that is the default port express
EXPOSE 3000

# Run the server
CMD ["node", "server.js"]
