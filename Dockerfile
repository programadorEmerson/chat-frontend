# Stage 1: Build the application
FROM node:18-alpine AS builder

# Define the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine AS production

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Define the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN chown nextjs:nodejs .next

# Install production dependencies
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Expose the port that the application will run on
USER nextjs

EXPOSE 3000

ENV PORT 3000

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["yarn", "start"]
