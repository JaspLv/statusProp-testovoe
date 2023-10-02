################
#  Main image  #
################
FROM node:18-alpine AS base
RUN apk update && apk upgrade

#######################
#  Development layer  #
#######################
FROM base AS dev
WORKDIR /app
EXPOSE 3000
CMD npm i && npm run dev

########################
#  Dependencies layer  #
########################
FROM base AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

######################
#  Production layer  #
######################
FROM base AS prod
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build
EXPOSE 3000
CMD npm run start

