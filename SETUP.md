# CattleEye 2.0 --- Setup Guide

This guide explains how to clone, configure, connect, and run the
**CattleEye 2.0** frontend and backend locally.

## 1. Project Architecture

CattleEye consists of two applications:

``` text
CattleEye2.0/
├── frontend/              # React + Vite
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/               # FastAPI + Python
│   ├── app.py
│   ├── database/
│   │   └── db.py
│   ├── .env               # Create locally — DO NOT commit
│   └── ...
│
└── SETUP.md
```

The applications communicate through HTTP:

``` text
React Frontend
     |
     | POST /predict
     | GET  /history
     | DELETE /history/{id}
     v
FastAPI Backend
     |
     +------> TensorFlow model
     |
     +------> Cloudinary
     |
     +------> MongoDB
```

------------------------------------------------------------------------

# 2. Prerequisites

Install the following before starting:

-   Git
-   Node.js and npm
-   Python 3.10+ recommended
-   A MongoDB database (MongoDB Atlas is recommended for an easy cloud
    setup)
-   A Cloudinary account if the backend uploads prediction images to
    Cloudinary

Check your installations:

``` bash
git --version
node --version
npm --version
python --version
```

------------------------------------------------------------------------

# 3. Clone the Repository

Clone the project:

``` bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Enter the project:

``` bash
cd CattleEye2.0
```

If your repository uses a different folder name, enter that folder
instead.

------------------------------------------------------------------------

# 4. Backend Setup

Open a terminal and go to the backend:

``` bash
cd backend
```

## 4.1 Create a Python virtual environment

Linux/macOS:

``` bash
python -m venv venv
source venv/bin/activate
```

Windows PowerShell:

``` powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

Windows CMD:

``` cmd
python -m venv venv
venv\Scripts\activate
```

After activation, your terminal should show something similar to:

``` text
(venv)
```

## 4.2 Install backend dependencies

If the repository contains `requirements.txt`:

``` bash
python -m pip install -r requirements.txt
```

If there is no `requirements.txt`, install the packages currently used
by CattleEye:

``` bash
python -m pip install fastapi uvicorn pymongo python-dotenv cloudinary
```

Install any additional ML dependencies required by the model if they are
not already included in `requirements.txt`.

------------------------------------------------------------------------

# 5. Backend Environment Variables

The backend needs private credentials for MongoDB and Cloudinary.

Inside:

``` text
backend/
```

create a file named:

``` text
.env
```

The final structure should be:

``` text
backend/
├── .env
├── app.py
├── database/
│   └── db.py
└── ...
```

## 5.1 Create `.env`

Linux/macOS:

``` bash
touch .env
```

Windows PowerShell:

``` powershell
New-Item .env -ItemType File
```

Open `.env` and add:

``` env
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Replace the placeholder values with your own credentials.

### Important

Never commit `.env` to GitHub.

Add this to `backend/.gitignore`:

``` gitignore
.env
venv/
__pycache__/
*.pyc
```

If the project has a root `.gitignore`, you can instead add:

``` gitignore
backend/.env
backend/venv/
```

------------------------------------------------------------------------

# 6. MongoDB Setup

CattleEye uses MongoDB for prediction and user data.

The backend currently uses the database:

``` text
cattleeye
```

and collections including:

``` text
predictions
users
```

## MongoDB Atlas

If using MongoDB Atlas:

1.  Create a MongoDB Atlas account.
2.  Create a cluster.
3.  Create a database user.
4.  Allow your development machine/IP to connect.
5.  Select **Connect → Drivers**.
6.  Copy the MongoDB connection string.
7.  Put it in `backend/.env`:

``` env
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/
```

Do not put the connection string directly inside Python source code.

------------------------------------------------------------------------

# 7. Cloudinary Setup

CattleEye uses Cloudinary for uploaded prediction images.

Create a Cloudinary account and obtain:

``` text
Cloud Name
API Key
API Secret
```

Put them in:

``` text
backend/.env
```

Example:

``` env
CLOUDINARY_CLOUD_NAME=example
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=your_secret
```

Do not share or commit the API secret.

------------------------------------------------------------------------

# 8. Verify Backend Environment Variables

The backend loads environment variables using:

``` python
from dotenv import load_dotenv
load_dotenv()
```

The MongoDB configuration reads:

``` python
url = os.getenv("MONGO_URL")
```

Before running the server, make sure the values exist.

You can safely test without printing secrets:

``` bash
python -c "import os; from dotenv import load_dotenv; load_dotenv(); print('MONGO_URL:', bool(os.getenv('MONGO_URL'))); print('Cloudinary:', bool(os.getenv('CLOUDINARY_API_KEY')))"
```

Expected:

``` text
MONGO_URL: True
Cloudinary: True
```

Never print the actual MongoDB password or Cloudinary API secret.

------------------------------------------------------------------------

# 9. Run the Backend

From the `backend` directory:

``` bash
python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

The backend will run on:

``` text
http://localhost:8000
```

FastAPI documentation is available at:

``` text
http://localhost:8000/docs
```

Test that the API opens before starting the frontend.

You should also see a successful MongoDB connection message if the
backend is configured to print it.

------------------------------------------------------------------------

# 10. Frontend Setup

Open a **second terminal**.

Go to the frontend:

``` bash
cd CattleEye2.0/frontend
```

Install dependencies:

``` bash
npm install
```

------------------------------------------------------------------------

# 11. Connect Frontend to Backend

The frontend needs to know where the FastAPI server is running.

For a Vite React application, create:

``` text
frontend/.env
```

Add:

``` env
VITE_API_URL=http://localhost:8000
```

Your structure becomes:

``` text
CattleEye2.0/
├── backend/
│   ├── .env
│   └── ...
│
└── frontend/
    ├── .env
    ├── src/
    ├── package.json
    └── ...
```

## Important

Vite only exposes environment variables beginning with:

``` text
VITE_
```

Therefore use:

``` env
VITE_API_URL=http://localhost:8000
```

Do not use:

``` env
API_URL=http://localhost:8000
```

for a browser-side Vite variable.

------------------------------------------------------------------------

# 12. Frontend API Configuration

The frontend API service should use the Vite environment variable.

For example, `frontend/src/services/api.js` can be configured like:

``` javascript
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default api;
```

Then frontend requests can remain simple:

``` javascript
api.post("/predict", formData);
```

and:

``` javascript
api.get("/history");
```

The browser sends them to:

``` text
http://localhost:8000/predict
http://localhost:8000/history
```

instead of hard-coding the backend address throughout the application.

If your existing `api.js` already uses another environment-variable
name, keep the existing name or update both the code and `.env`
consistently.

------------------------------------------------------------------------

# 13. CORS --- Frontend ↔ Backend Connection

The frontend and backend normally run on different ports:

``` text
Frontend: http://localhost:5173
Backend:  http://localhost:8000
```

Because they have different origins, FastAPI must allow the frontend
origin through CORS.

Your backend should contain a CORS configuration similar to:

``` python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

If Vite starts on another port, such as `5174`, update the allowed
origin.

For development, avoid using a wildcard together with credentials unless
you specifically understand the security implications.

------------------------------------------------------------------------

# 14. Run the Frontend

From:

``` text
frontend/
```

run:

``` bash
npm run dev
```

To make it accessible from another device on the same network or from a
hosted development environment:

``` bash
npm run dev -- --host
```

Vite will show the local URL, commonly:

``` text
http://localhost:5173
```

------------------------------------------------------------------------

# 15. Start Both Applications

You need **two terminals**.

### Terminal 1 --- Backend

``` bash
cd CattleEye2.0/backend

# Activate virtual environment if you created one
source venv/bin/activate

python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

### Terminal 2 --- Frontend

``` bash
cd CattleEye2.0/frontend

npm install
npm run dev
```

Then open the frontend URL shown by Vite.

------------------------------------------------------------------------

# 16. Test the Full Connection

The expected flow is:

``` text
                 Browser
                    |
                    v
             React / Vite
                    |
                    | POST /predict
                    v
             FastAPI :8000
                    |
          +---------+---------+
          |         |         |
          v         v         v
      TensorFlow Cloudinary MongoDB
          |         |         |
          +---------+---------+
                    |
                    v
              Prediction
                    |
                    v
             React Result
```

Test in this order:

### Test 1 --- Backend

Open:

``` text
http://localhost:8000/docs
```

If Swagger/OpenAPI loads, FastAPI is running.

### Test 2 --- Frontend

Open the Vite frontend URL.

### Test 3 --- Prediction

1.  Upload/take a cattle image.
2.  Click **Predict Breed**.
3.  Confirm the frontend receives the response.
4.  Confirm the result card appears.
5.  Confirm the image URL is returned if Cloudinary is enabled.

### Test 4 --- History

Go to:

``` text
/history
```

Confirm previous predictions appear.

### Test 5 --- Persistence

Return to Home:

``` text
Home → History → Home
```

The last prediction should remain displayed.

Refresh the browser:

``` text
Home → Refresh
```

The last displayed prediction should still be restored from local
storage.

------------------------------------------------------------------------

# 17. Environment Files Summary

You need two separate environment files.

## Backend

Location:

``` text
backend/.env
```

Contains private/server credentials:

``` env
MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Frontend

Location:

``` text
frontend/.env
```

Contains the backend API URL:

``` env
VITE_API_URL=http://localhost:8000
```

The frontend `.env` is not a safe place for secrets. Anything exposed
through `VITE_*` can be included in the browser application.

------------------------------------------------------------------------

# 18. Do Not Commit Secrets

Before pushing the project:

``` bash
git status
```

Make sure `.env` files are ignored.

Recommended `.gitignore` entries:

``` gitignore
# Environment variables
.env
.env.*
!.env.example

# Python
venv/
__pycache__/
*.pyc

# Node
node_modules/
dist/

# Local files
.DS_Store
```

------------------------------------------------------------------------

# 19. Add `.env.example` Files

A good open-source project should include examples so another developer
knows what variables are required.

### `backend/.env.example`

``` env
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### `frontend/.env.example`

``` env
VITE_API_URL=http://localhost:8000
```

Commit the `.env.example` files, but **never commit the real `.env`
files**.

A new developer can then do:

``` bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

and replace the placeholders with their own credentials.

------------------------------------------------------------------------

# 20. Common Problems

## `ModuleNotFoundError: No module named 'fastapi'`

Run:

``` bash
python -m pip install fastapi uvicorn
```

or:

``` bash
python -m pip install -r requirements.txt
```

------------------------------------------------------------------------

## `ModuleNotFoundError: No module named 'cloudinary'`

Run:

``` bash
python -m pip install cloudinary
```

------------------------------------------------------------------------

## `Mongo Loaded: False`

Check:

``` text
backend/.env
```

and make sure:

``` env
MONGO_URL=...
```

exists.

Restart the backend after changing `.env`.

------------------------------------------------------------------------

## `ValueError: Must supply api_key`

Check the Cloudinary variables:

``` env
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

Also make sure the backend actually calls `load_dotenv()` and configures
Cloudinary using those variables.

------------------------------------------------------------------------

## Frontend cannot connect to backend

Check:

``` text
frontend/.env
```

and:

``` env
VITE_API_URL=http://localhost:8000
```

Then restart Vite:

``` bash
npm run dev
```

Vite environment changes require a restart.

------------------------------------------------------------------------

## CORS error in browser

Make sure FastAPI allows the frontend origin:

``` text
http://localhost:5173
```

Check the browser console and backend CORS configuration.

------------------------------------------------------------------------

## `POST /predict` returns `500`

First check the backend terminal.

The backend traceback normally identifies whether the problem is:

-   model loading/prediction
-   Cloudinary
-   MongoDB
-   missing environment variables
-   uploaded file handling

------------------------------------------------------------------------

# 21. Quick Start

For an experienced developer, the setup is:

``` bash
# Clone
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd CattleEye2.0

# Backend
cd backend
python -m venv venv
source venv/bin/activate
python -m pip install -r requirements.txt

# Create backend/.env
# Add MONGO_URL and Cloudinary credentials

python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

In a second terminal:

``` bash
cd CattleEye2.0/frontend
npm install

# Create frontend/.env
# VITE_API_URL=http://localhost:8000

npm run dev
```

Then open the frontend URL provided by Vite.

------------------------------------------------------------------------

# 22. Development Checklist

Before considering the local setup complete:

-   [ ] Repository cloned
-   [ ] Python installed
-   [ ] Node.js/npm installed
-   [ ] Backend virtual environment created
-   [ ] Backend dependencies installed
-   [ ] `backend/.env` created
-   [ ] MongoDB connection configured
-   [ ] Cloudinary credentials configured
-   [ ] Backend starts successfully
-   [ ] `/docs` loads
-   [ ] Frontend dependencies installed
-   [ ] `frontend/.env` created
-   [ ] `VITE_API_URL` points to FastAPI
-   [ ] Frontend starts successfully
-   [ ] CORS allows the frontend origin
-   [ ] Prediction works
-   [ ] History works
-   [ ] No secrets are committed to Git

------------------------------------------------------------------------

## Security Reminder

Never commit or share:

``` text
backend/.env
```

especially:

``` text
MONGO_URL
CLOUDINARY_API_SECRET
```

Use `.env.example` for documentation and keep real credentials local or
in your deployment platform's secret/environment-variable settings.
