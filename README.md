# Contact Manager

A full-stack patient management system with Django backend and React frontend.

## Quick Start

### Backend

API runs at `http://localhost:8000`

### Frontend
```bash
cd contact-frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

## Tech Stack

- **Backend**: Django 5.2, Django REST Framework, SQLite
- **Frontend**: React 19, Vite, Axios

## Features

- Create, read, update, delete patient records
- Patient info: name, age, date of birth, home/office address
- RESTful API with CORS support

## API Endpoints

- `GET /api/patients/` - List patients
- `POST /api/patients/` - Create patient
- `GET /api/patients/<id>/` - Get patient details
- `PUT /api/patients/<id>/` - Update patient
- `DELETE /api/patients/<id>/` - Delete patient

## Project Structure

```
contact_manager/      # Django settings
patients/            # Patient app & models
contact-frontend/    # React app
db.sqlite3          # Database
```
