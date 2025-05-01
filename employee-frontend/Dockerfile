# Build step
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Serve step
FROM nginx:alpine
COPY --from=build /app/dist/employee-frontend /usr/share/nginx/html
