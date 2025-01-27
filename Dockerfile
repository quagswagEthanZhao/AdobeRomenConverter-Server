# Build the application
FROM node:16 AS builder
WORKDIR /app

# Copy package files and install dependencies (including devDependencies)
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY . .

# Build the app
RUN npm run build

# Create a minimal production image
FROM node:16
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=builder /app/dist /app/dist
COPY package.json package-lock.json ./

# Install production dependencies
RUN npm install --production

# Expose the application port
EXPOSE 8080

# Command to run the app
CMD ["node", "dist/server.js"]
