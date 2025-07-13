# Spring JWT Authentication Service

This project is a Spring Boot application that provides JWT authentication services. It allows users to register and log in, generating a JWT token upon successful authentication.

## Project Structure

```
spring-jwt-auth-service
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── jwt
│   │   │               ├── SpringJwtApplication.java
│   │   │               ├── controller
│   │   │               │   └── AuthController.java
│   │   │               ├── model
│   │   │               │   └── User.java
│   │   │               ├── repository
│   │   │               │   └── UserRepository.java
│   │   │               ├── service
│   │   │               │   └── JwtService.java
│   │   │               └── config
│   │   │                   └── SecurityConfig.java
│   │   └── resources
│   │       ├── application.properties
│   │       └── static
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── jwt
│                       └── SpringJwtApplicationTests.java
├── pom.xml
└── README.md
```

## Features

- User Registration: Users can create an account by providing a username and password.
- User Login: Users can log in using their credentials to receive a JWT token.
- JWT Token Generation: The application generates a JWT token upon successful login.
- Secure Endpoints: The application uses Spring Security to secure endpoints.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd spring-jwt-auth-service
   ```

2. **Build the project:**
   ```
   mvn clean install
   ```

3. **Run the application:**
   ```
   mvn spring-boot:run
   ```

4. **Access the API:**
   - Use tools like Postman or curl to interact with the API endpoints for registration and login.

## Usage Guidelines

- Ensure you have Java 11 or higher and Maven installed.
- Configure the `application.properties` file with your database connection settings.
- Use the provided endpoints in `AuthController.java` for user authentication.

## License

This project is licensed under the MIT License.