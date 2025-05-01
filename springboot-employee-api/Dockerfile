# Stage 1: Build the Spring Boot application
FROM maven:3.8.4-openjdk-17-slim AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and download dependencies (avoid re-downloading every time)
COPY pom.xml .

# Fetch dependencies in an offline mode to avoid re-fetching every time
RUN mvn dependency:go-offline

# Copy the entire project into the container
COPY src /app/src

# Build the project (skip tests to speed up the process)
RUN mvn clean package -DskipTests

# Stage 2: Create the final image using OpenJDK
FROM openjdk:17-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the build stage to the container
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080 for the Spring Boot app
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]

# Optional: You can also set environment variables if needed
# ENV SPRING_PROFILES_ACTIVE=prod
