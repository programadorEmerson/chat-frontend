# Stage 1: Build the application
FROM node:18-alpine AS builder

# Define the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN yarn build

# Stage 2: Create the production image
FROM node:18-alpine AS production

# Define the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next

# Copy the "public" directory with images
COPY --from=builder /app/public ./public

# Install production dependencies
RUN yarn install --frozen-lockfile --production

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
