# Student Management System

A full-stack Student Management System built using **Node.js, Express.js, MySQL, HTML, CSS, Bootstrap, and JavaScript**.

This project is built to learn full-stack web development using Node.js, Express.js, REST APIs, and MySQL. It demonstrates complete CRUD operations, search functionality, and client-side form validation.



## Features
- Add a new student
- View all students
- Edit student
- Delete student
- Search student by Name, Course and Email
- Client-side form validation
- Store student details in MySQL database
- Express.js backend
- HTML, CSS, and Bootstrap frontend
- Fetch API for client-server communication



## Tech Stack
### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
### Backend
- Node.js
- Express.js
### Database
- MySQL
- mysql2



## API Endpoints
| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /students | Add a new student |
| GET | /students | Get all students |
| GET | /students/:id | Get a student by ID |
| PUT | /students/:id | Update a student |
|DELETE| /students/:id| Delete a student|



## Current Status
 Student Registration feature completed
 View Students feature completed
 Edit student completed 
 Delete student completed 
 Search student by name,email and course completed 
 Form validation completed 



## Future Improvements
- Server-side validation
- Authentication (Admin Login)
- Better UI/UX


## What I Learned
- Express.js
- REST APIs
- CRUD Operations
- MySQL Integration
- Fetch API
- Client-side Form Validation
- DOM Manipulation
- Git & GitHub


## Installation
1. Clone the repository  
 ```bash
  git clone https://github.com/neha1139/student-management-system.git
  ```
2. Navigate to the project folder
 ```bash 
 cd Student-Management-System
 ```
3. Install dependencies  
 ```bash
  npm install 
  ```
4. Start the server
```bash 
 node app.js
 ```
5. Open your browser 
 ```text 
//http://localhost:3000
```
6.Configure MySQL Database

- Create a database named `student_management`
- Import the required tables
- Update MySQL credentials in `db.js`


## Project Structure

```text
Student-Management-System
│
├── database
│   └── connection.js
│
├── public
│   ├── add-student.html
│   ├── view-students.html
│   ├── css
│   └── js
│
├── app.js
├── package.json
└── README.md
```


