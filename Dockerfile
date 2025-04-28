FROM node:20-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/.output ./

# Expose the port
EXPOSE 3000

# Set the command to run the application
CMD ["node", "server/index.mjs"]
