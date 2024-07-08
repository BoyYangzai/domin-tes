#
# docker build -t website -f ./Website/packages/website/Dockerfile ./Website
#
FROM node:20-alpine AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

ARG ENVIRONMENT
ENV ENVIRONMENT=$ENVIRONMENT
ARG GITHUB_PERSONAL_ACCESS_TOKEN
ENV GITHUB_PERSONAL_ACCESS_TOKEN=$GITHUB_PERSONAL_ACCESS_TOKEN
ARG USE_LOCAL_LEADERBOARD_DATA
ENV USE_LOCAL_LEADERBOARD_DATA=$USE_LOCAL_LEADERBOARD_DATA
ARG GOOGLE_ANALYTICS_MEASUREMENT_ID
ENV GOOGLE_ANALYTICS_MEASUREMENT_ID=$GOOGLE_ANALYTICS_MEASUREMENT_ID

RUN echo "//npm.pkg.github.com/:_authToken=${GITHUB_PERSONAL_ACCESS_TOKEN}" > ~/.npmrc

WORKDIR /app/hydro-social/website
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY package.json .
COPY tsconfig.json .

RUN pnpm install
RUN pnpm run build
RUN pnpm run start


# FROM nginx:alpine
# COPY --from=build /app/Website/packages/website/build/ /usr/share/nginx/html
# COPY --from=build /app/Website/packages/website/nginx.conf /etc/nginx/nginx.conf
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
