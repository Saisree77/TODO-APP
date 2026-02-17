## TODO APPLICATION ##
Spring Boot (Backend) + React (Frontend)
A simple full-stack Todo application built as part of a screening assignment.

## Features ##
# Backend (Spring Boot) #
-Create Todo
-Get All Todos (with optional completed filter)
-Update Todo
-Delete Todo
-Basic validation (title required)
-Clean architecture (Controller → Service → Repository)
# Frontend (React) #
-Display todos
-Add new todo
-Edit todo
-Mark complete/incomplete
-Delete todo
-Functional components + Hooks
Hooks

# Project Architecture
todo-app/
│
├── backend/   → Spring Boot API
└── frontend/  → React Application
📂 Backend Structure
backend/
└── src/main/java/com/example/todo
    ├── controller
    ├── service
    ├── repository
    ├── model
    └── exception
 📁 Frontend Folder Structure (React)
frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoItem.jsx
│   │   └── EditTodo.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js  

⚙️ How to Run the Project
# Step 1️⃣ – Run Backend
cd backend
mvn clean install
mvn spring-boot:run
--Backend runs at:
http://localhost:8080
# Step 2️⃣ – Run Frontend
cd frontend
npm install
npm run dev
--Frontend runs at:
http://localhost:5173
# Step 3️⃣ – Use the App
1.Open the frontend in browser
2.Add a new todo
3.Mark as complete/incomplete
4.Edit or delete todos
5.Data is stored via REST API

** Tech Stack **
-Spring Boot
-JPA + H2 / PostgreSQL
-React (Hooks)
-Axios / Fetch
# Evaluation Highlights
-This project demonstrates:
-REST API design principles
-Clean layered backend architecture
-React Hooks usage
-API integration
-Basic validation
-End-to-end functionality

# Conclusion #
This application represents a structured, clean, and 
scalable implementation of a full-stack Todo system using Spring Boot and React.
It focuses on correctness, clarity, and maintainability rather than unnecessary complexity.

👨‍💻 Author
SaiSree Thavanam
