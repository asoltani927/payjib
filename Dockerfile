# Build Stage 1

FROM node:22-alpine AS build
WORKDIR /app

# Copy package.json and your lockfile, here we add yarn.lock for illustration
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the entire project
COPY . ./

# Build the project
RUN yarn build

# Build Stage 2

FROM node:22-alpine
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY --from=build /app/.output/ ./

# Change the port and host
ENV PORT 3000
ENV HOST 0.0.0.0

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]