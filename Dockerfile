# Use official Node.js Alpine image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the full project
COPY . .

# Build the Vue 3 app
RUN npm run build

# Install a static server to serve the built app
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Serve the app
CMD ["serve", "dist"]
