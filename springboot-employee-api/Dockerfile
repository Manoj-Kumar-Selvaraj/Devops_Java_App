# Use the official Maven image to build the Spring Boot application
FROM maven:3.8.4-openjdk-17-slim as build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and download dependencies (avoid re-downloading every time)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the entire project into the container
COPY src /app/src

# Build the project
RUN mvn clean package -DskipTests

# Use a JDK 17 image to run the Spring Boot application
FROM openjdk:17-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the build stage to the container
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080 for the Spring Boot app
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
