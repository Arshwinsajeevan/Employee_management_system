# Employee Management System

## Overview
This project is a simple full-stack Employee Management System built as part of a Full Stack Developer Intern assessment.  
It demonstrates clean CRUD operations with proper validation and soft delete handling.

## Tech Stack
- Backend: Django, Django REST Framework  
- Frontend: React  
- Database: SQLite  
- API Style: REST (JSON)

## Features
- Add a new employee
- View employee details by ID
- View all ACTIVE employees
- Update employee details
- Soft delete employees (status changes to INACTIVE)
- Email uniqueness validation

## Employee Fields
- ID  
- Name  
- Email (unique)  
- Department  
- Salary  
- Status (ACTIVE / INACTIVE)

## API Endpoints
- `POST /api/employees/` – Add employee  
- `GET /api/employees/{id}/` – Fetch employee by ID  
- `GET /api/employees/active/` – Fetch all active employees  
- `PUT /api/employees/{id}/` – Update employee  
- `DELETE /api/employees/{id}/` – Soft delete employee  


## How to Run the Project

### Backend

cd backend
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### Frontend
cd frontend
npm install
npm start
The backend runs on http://127.0.0.1:8000
The frontend runs on http://localhost:3000

### Notes

Deleted employees are not removed from the database; they are marked as INACTIVE.
INACTIVE employees do not appear in the active employee list.
Basic validation and error handling are implemented.