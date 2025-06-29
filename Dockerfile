FROM alpine:latest

ARG PB_VERSION=0.28.4
ENV PORT=8080

RUN apk add --no-cache \
    unzip \
    ca-certificates

# Download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

RUN mkdir -p pb_migrations
COPY ./BackEnd/pb_migrations /pb/pb_migrations

RUN mkdir -p pb_hooks
COPY ./BackEnd/pb_hooks /pb/pb_hooks

# Set environment variables for the first superuser
# (Values will be set by Railway cloud at runtime)
ENV PB_SUPERUSER_EMAIL=""
ENV PB_SUPERUSER_PASS=""

EXPOSE ${PORT}

# Entrypoint script to create superuser if env vars are set, then start PocketBase
CMD if [ -n "$PB_SUPERUSER_EMAIL" ] && [ -n "$PB_SUPERUSER_PASS" ]; then \
        /pb/pocketbase superuser upsert "$PB_SUPERUSER_EMAIL" "$PB_SUPERUSER_PASS"; \
    fi && \
    /pb/pocketbase serve --http=0.0.0.0:${PORT}

