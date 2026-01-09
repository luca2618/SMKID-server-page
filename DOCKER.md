# Docker Deployment Guide

This guide explains how to build and run the SMKID Server Lab blog using Docker.

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at http://localhost:3000

### Using Docker directly

```bash
# Build the image
docker build -t smkid-blog .

# Run the container
docker run -p 3000:3000 --name smkid-blog smkid-blog

# Run in detached mode
docker run -d -p 3000:3000 --name smkid-blog smkid-blog

# Stop the container
docker stop smkid-blog

# Remove the container
docker rm smkid-blog
```

## Environment Variables

You can customize the deployment with environment variables:

```bash
docker run -p 3000:3000 \
  -e NEXT_UMAMI_ID=your-umami-id \
  smkid-blog
```

## Production Deployment

### Build for production

```bash
docker build -t smkid-blog:v1.0.0 .
```

### Run with restart policy

```bash
docker run -d \
  --name smkid-blog \
  --restart unless-stopped \
  -p 3000:3000 \
  smkid-blog:v1.0.0
```

### Using a different port

```bash
# Run on port 8080 instead of 3000
docker run -d -p 8080:3000 smkid-blog
```

## Behind a Reverse Proxy

If you're running behind Nginx or another reverse proxy:

### Nginx example configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Docker Image Details

The Dockerfile uses a multi-stage build process:

1. **deps stage**: Installs all dependencies
2. **builder stage**: Builds the Next.js application with Contentlayer
3. **runner stage**: Creates a minimal production image with only the necessary files

The final image:

- Based on Node.js 20 Alpine (lightweight)
- Uses Next.js standalone output for optimal size
- Runs as non-root user (nextjs)
- Exposes port 3000

## Troubleshooting

### View logs

```bash
docker logs smkid-blog
docker logs -f smkid-blog  # Follow logs
```

### Access container shell

```bash
docker exec -it smkid-blog sh
```

### Rebuild after changes

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Check container status

```bash
docker ps
docker stats smkid-blog
```

## Health Checks

You can add health checks to your docker-compose.yml:

```yaml
services:
  smkid-blog:
    # ... other config
    healthcheck:
      test: ['CMD', 'wget', '--no-verbose', '--tries=1', '--spider', 'http://localhost:3000']
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

## Resource Limits

To set resource limits in docker-compose.yml:

```yaml
services:
  smkid-blog:
    # ... other config
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```
