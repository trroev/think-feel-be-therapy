# Base image for all stages
FROM node:20-alpine AS base
WORKDIR /app
# Install pnpm globally
RUN npm install -g pnpm


# 1. 'deps' stage: Install dependencies
# This stage is cached unless package.json or pnpm-lock.yaml change
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile


# 2. 'builder' stage: Build the application for production
# This stage builds the Next.js/Payload app
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build


# 3. 'runner' stage: Production image
# This stage creates the final, small production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from previous stages
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/payload.config.ts ./payload.config.ts
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

# Expose the port the app will run on
EXPOSE 3000

# The command to start the application
CMD ["pnpm", "start"]

# 4. 'development' stage: for local development with hot-reloading
FROM base AS development
WORKDIR /app

# Copy dependency files and install them
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# The command to start the development server
CMD ["pnpm", "dev"]