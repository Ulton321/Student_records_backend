
# Student Records Backend

This project is a backend application built with Express.js and MongoDB to manage student records. It provides a RESTful API for creating, reading, updating, and deleting student information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd student-records-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and port number:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

## Usage

To start the application, run:
```
npm start
```
The server will start on the specified port (default is 5000).

## API Endpoints

- `GET /students` - Retrieve all students
- `GET /students/:id` - Retrieve a student by ID
- `POST /students` - Create a new student
- `PUT /students/:id` - Update an existing student
- `DELETE /students/:id` - Delete a student

## Testing

To run the tests, use:
```
npm test
```
## ScreenShot test using Thunber Client
get Empty :

![getempty](https://github.com/user-attachments/assets/202f77a3-9c17-4f49-b915-1bf1f589f918)

post : 

![post](https://github.com/user-attachments/assets/33f647cb-b939-4488-b6c7-c68810343c00)

get : 

![get](https://github.com/user-attachments/assets/3e82809c-609f-4d62-a0e0-4973facdccd4)

get with Id:

![getwithId](https://github.com/user-attachments/assets/ec48d5b0-1d4b-4cf6-871d-0386d368c7f4)

put : 

![put](https://github.com/user-attachments/assets/70216962-6b63-49fa-987c-4a4c23c8c8b6)

delete : 

![delete](https://github.com/user-attachments/assets/ed85d16d-5919-490e-ac0c-9812ee7eb00e)









