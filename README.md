# Adobe Roman Converter Service

A service that will convert a given integer(in the range of 1 - 3999) into its Roman numeral format. The service is built using **Node.js**, **Express**, and **TypeScript**. It includes features such as input validation, error handling, logging, and more.

- **Roman Numerals Specification**:  
  The implementation of Roman numerals in this project follows the rules outlined on [Wikipedia: Roman Numerals](https://en.wikipedia.org/wiki/Roman_numerals).

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [How to Build and Run and Access The Project](#how-to-build-and-run-your-project)
- [Dockerization](#dockerization)
- [Engineering and Testing Methodology](#engineering-and-testing-methodology)
- [Packaging Layout](#packaging-layout)
- [Dependency Attribution](#dependency-attribution)

---

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (or **yarn** as an alternative)
- **TypeScript** (for development)
- **Winston** (for logging)
- **Morgan** (for HTTP request logging)
- **Cors** (enable cors)
- **Jest** (for testing)

---

## How to Build and Run Project Local

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/quagswagEthanZhao/AdobeRomenConverter-Server.git
   ```
2. **cd into project root dir and install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the build command to compile the TypeScript code into JavaScript:**
   ```bash
   npm run build
   ```
4. **Run Project Locally**
   ```bash
   npm run dev
   ```
5. **Access the API: will be avalible in this address and format**
   ```bash
   http://localhost:8080/romannumeral?number={integer}
   ```

---

## Dockerization

This project is fully Dockerized, allowing it to run consistently across environments.

### Build and Run the Docker Container

1. **Build the Docker Image**:
   ```bash
   docker build -t roman-converter-service .
   ```
2. **Run the Docker Container**
   ```bash
   docker run -p 8080:8080 roman-converter-service
   ```
3. **Access the Service:**
   ```bash
   http://localhost:8080/romannumeral?number={integer}
   ```

---

## Engineering and Testing Methodology

### Engineering Methodology

1. **Modular Architecture**:  
   The project is organized into **modules** (controllers, services, middlewares).
2. **Error Handling**:  
   Centralized error handling is implemented, which catches all errors, logs them into a log file and return them.
3. **Logging**:  
   We use **Winston** to log application-level errors and **Morgan** for logging HTTP requests. Logs are stored in the `logs/` folder and will be auto generated if not exist.
4. **Input Validation**:  
   The service validates the input query parameter `number`, ensuring that it is a valid integer between 1 and 3999.
5. **Response Standardization**:  
   The application always returns responses in a **consistent format**, including both success and error responses.

### Testing Methodology

1. **Unit Testing**:  
   We use **Jest** for unit testing, with mocks and assertions. We test both **business logic** (e.g., `convertToRoman`) and **controller logic** (e.g., `convertNumberController`).
2. **Integration Testing**:
3. **Test Coverage**:  
   The tests cover a wide range of cases, including valid inputs, invalid inputs, edge cases, and error handling.

---

## Packaging Layout

The project is structured as follows:

```plaintext
root
├─ logs                     <-- Log files (access.log, error.log)
│  ├─ access.log            <-- Logs HTTP requests (via Morgan)
│  └─ error.log             <-- Logs application errors (via Winston)
├─ src
│  ├─ config                <-- Configuration files
│  ├─ constants             <-- Constants such as roman numeral mappings
│  ├─ controllers           <-- Route handlers and business logic
│  ├─ middlewares           <-- Middleware (error handling, logging)
│  ├─ models                <-- Data models (if needed)
│  ├─ routes                <-- Express route definitions
│  ├─ services              <-- Core business logic (e.g., roman numeral conversion)
│  ├─ utils                 <-- Utility functions (e.g., logging setup)
│  ├─ app.ts                <-- Main application setup (Express server)
│  └─ server.ts             <-- Entry point to start the server
├─ .env                     <-- Environment variables (e.g., port, database URI)
├─ .gitignore               <-- Git ignore file (logs, node_modules, etc.)
├─ package.json             <-- NPM package configuration
├─ package-lock.json        <-- NPM lock file
└─ tsconfig.json            <-- TypeScript configuration
```

---

## Dependency Attribution

### Key Dependencies:

- **express**: Web framework for Node.js.
- **helmet**: Helps secure Express apps by setting various HTTP headers.
- **morgan**: HTTP request logger for Node.js.
- **winston**: Flexible and simple logger for logging application errors.
- **jest**: JavaScript testing framework, used for unit and integration testing.
- **supertest**: A library to test HTTP requests in Node.js.
- **ts-jest**: TypeScript preprocessor for Jest.
- **typescript**: TypeScript compiler for statically typed JavaScript.
- **cors**: Enable Cors

---
