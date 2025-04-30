
## PROJECT STRUCTURE.

springboot-employee-api/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── employeeapi/
│       │           ├── EmployeeApiApplication.java
│       │           ├── controller/
│       │           │   └── EmployeeController.java
│       │           ├── model/
│       │           │   └── Employee.java
│       │           ├── repository/
│       │           │   └── EmployeeRepository.java
│       │           └── service/
│       │               └── EmployeeService.java
│       └── resources/
│           └── application.properties
├── Dockerfile
├── docker-compose.yml
├── pom.xml
└── README.md

## Commands to create the project structure:

---

## Spring Boot Employee API Project Setup

Follow these steps to create the project structure on Ubuntu:

### 1. **Create the base project folder**
```bash
mkdir springboot-employee-api
cd springboot-employee-api
```

### 2. **Create `src` and subfolders**
```bash
mkdir -p src/main/java/com/employeeapi/controller
mkdir -p src/main/java/com/employeeapi/model
mkdir -p src/main/java/com/employeeapi/repository
mkdir -p src/main/java/com/employeeapi/service
mkdir -p src/main/resources
```

### 3. **Create essential project files**
```bash
touch Dockerfile
touch docker-compose.yml
touch pom.xml
touch README.md
```

### 4. **Create the Java files inside the correct folders**

```bash
# Main Application
touch src/main/java/com/employeeapi/EmployeeApiApplication.java

# Employee model
touch src/main/java/com/employeeapi/model/Employee.java

# Employee repository
touch src/main/java/com/employeeapi/repository/EmployeeRepository.java

# Employee service
touch src/main/java/com/employeeapi/service/EmployeeService.java

# Employee controller
touch src/main/java/com/employeeapi/controller/EmployeeController.java
```

### 5. **Navigate to the resources folder and create `application.properties`**
```bash
touch src/main/resources/application.properties
```

---
