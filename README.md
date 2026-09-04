# 🐄 CattleEye 2.0

> **AI-powered cattle breed identification system using image classification**

CattleEye 2.0 is a full-stack web application that uses **Artificial Intelligence and Computer Vision** to identify cattle breeds from uploaded images.

Users can upload a cattle image, send it to the AI-powered backend, receive the predicted breed and confidence score, and view previous predictions through the History section.

# 📥  Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd CattleEye2.0
```

---
#  Setup project 
to setup the project open setup.md  

### ./SETUP.md


## 🖼️ Project Preview


### 🏠 Home Page

![CattleEye Home Page](./screenshots/home.jpg)

### 📤 Upload & Prediction

![CattleEye Upload](./screenshots/upload.jpg)

### 🤖 Prediction Result

![CattleEye Prediction Result](./screenshots/result.jpg)

### 📜 Prediction History

![CattleEye History](./screenshots/history.jpg)

### 📱 Mobile View

![CattleEye Mobile View](./screenshots/mobile.jpg)

---

## ✨ Features

-  **AI Cattle Breed Prediction** — Upload a cattle image and predict its breed.
-  **Confidence Score** — Display the confidence associated with the prediction.
-  **Cloud Image Storage** — Store uploaded images using Cloudinary.
- **Prediction History** — Store and view previous predictions using MongoDB.
-  **Search History** — Search prediction history by breed.
-  **Date Filtering** — Filter predictions by date.
-  **Responsive UI** — Designed for desktop and mobile devices.
-  **FastAPI Backend** — REST API powered by FastAPI.
-  **React Frontend** — Interactive frontend built with React and Vite.
-  **Persistent Latest Result** — Keep the latest prediction available using browser localStorage.
-  **Mobile Image Input** — Take a photo or choose an image from the device.

---

#  Project Architecture

```text
                         ┌─────────────────────┐
                         │      User           │
                         │  Uploads Cattle     │
                         │      Image          │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React Frontend    │
                         │       + Vite        │
                         └──────────┬──────────┘
                                    │
                              HTTP Request
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    FastAPI Backend  │
                         │      /predict       │
                         └──────────┬──────────┘
                                    │
                      ┌─────────────┴─────────────┐
                      │                           │
                      ▼                           ▼
             ┌─────────────────┐        ┌─────────────────┐
             │ TensorFlow / AI │        │    Cloudinary   │
             │  Breed Model    │        │  Image Storage  │
             └────────┬────────┘        └─────────────────┘
                      │
                      │ Prediction
                      ▼
             ┌─────────────────┐
             │    MongoDB      │
             │   Predictions   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ React History   │
             │      Page       │
             └─────────────────┘

```

---

#  Tech Stack

## Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- JavaScript
- HTML
- CSS

## Backend

- Python
- FastAPI
- Uvicorn
- TensorFlow
- NumPy
- Pillow
- PyMongo
- GridFS

## Database

- MongoDB

## Cloud Storage

- Cloudinary

## Development

- Git
- GitHub
- GitHub Codespaces

---

# 📁 Project Structure

```text
CattleEye2.0/
│
├── backend/
│   ├── app.py
│   ├── database/
│   │   └── db.py
│   ├── model/
│   │   └── ...
│   ├── requirements.txt
│   ├── .env
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── EmptyState.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── HistoryCard.jsx
│   │   │   ├── ImagePreview.jsx
│   │   │   ├── LoadingSkeleton.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Spinner.jsx
│   │   │   ├── StatsCards.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── UploadCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── History.jsx
│   │   │   └── Store.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   └── ...
│
├── screenshots/
│   ├── home.png
│   ├── upload.png
│   ├── result.png
│   ├── history.png
│   └── mobile.png
│
├── README.md
└── .gitignore
```

---


# ⚙️ Getting Started

## Prerequisites

Before running the project, make sure you have:

- Python 3.x
- Node.js and npm
- MongoDB / MongoDB Atlas
- Cloudinary account
- Git

---

# 📥 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd CattleEye2.0
```

---

# 🐍 2. Backend Setup

Move into the backend directory:

```bash
cd backend
```

## Create a Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / macOS / GitHub Codespaces

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install Dependencies

If `requirements.txt` exists:

```bash
pip install -r requirements.txt
```

Otherwise:

```bash
pip install fastapi uvicorn pymongo python-dotenv cloudinary tensorflow pillow numpy
```

---

# 🔐 3. Backend Environment Variables

Create:

```text
backend/.env
```

Add:

```env
MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Example

```env
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/

CLOUDINARY_CLOUD_NAME=example
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=your_secret
```

> ⚠️ **Never commit your real `.env` file to GitHub.**

---

# 🗄️ 4. MongoDB Setup

CattleEye uses MongoDB to store prediction history.

You can use **MongoDB Atlas** for a cloud-hosted database.

After creating a database, copy the MongoDB connection string and add it to:

```text
backend/.env
```

```env
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/
```

The application uses the:

```text
cattleeye
```

database.

The main prediction collection is:

```text
predictions
```

A users collection is also configured:

```text
users
```

---

# ☁️ 5. Cloudinary Setup

CattleEye uses Cloudinary for uploaded image storage.

Create a Cloudinary account and obtain:

- Cloud Name
- API Key
- API Secret

Add them to:

```text
backend/.env
```

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# 🚀 6. Run the Backend

From:

```text
CattleEye2.0/backend
```

run:

```bash
python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

Backend:

```text
http://localhost:8000
```

FastAPI Swagger documentation:

```text
http://localhost:8000/docs
```

---

# ⚛️ 7. Frontend Setup

Open another terminal and move to:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

# 🔐 8. Frontend Environment Variables

Create:

```text
frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:8000
```

This tells the React frontend where the FastAPI backend is running.

---

# 🔗 9. Frontend ↔ Backend Connection

The frontend API service should use the Vite environment variable.

Example:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default api;
```

The communication flow is:

```text
React Frontend
      │
      │ HTTP Request
      ▼
FastAPI Backend
      │
      ├── /predict
      │
      └── /history
      │
      ▼
MongoDB / Cloudinary / TensorFlow
```

---

# ▶️ 10. Run the Frontend

From:

```text
CattleEye2.0/frontend
```

run:

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

---

# 🔄 Application Flow

```text
1. User opens CattleEye
            ↓
2. Uploads or captures cattle image
            ↓
3. Image preview is displayed
            ↓
4. User clicks Predict
            ↓
5. React sends image to FastAPI
            ↓
6. Backend uploads image to Cloudinary
            ↓
7. TensorFlow model analyzes image
            ↓
8. Breed + confidence are generated
            ↓
9. Prediction is saved in MongoDB
            ↓
10. Result is returned to React
            ↓
11. User sees prediction result
            ↓
12. Prediction appears in History
```

---

# 🤖 Machine Learning Pipeline

```text
Input Cattle Image
        │
        ▼
Image Preprocessing
        │
        ▼
Resize / Normalize
        │
        ▼
TensorFlow Model
        │
        ▼
Class Prediction
        │
        ▼
Cattle Breed
        │
        ▼
Confidence Score
```

---

# 📡 API Endpoints

## `GET /`

Checks whether the backend is running.

---

## `POST /predict`

Accepts a cattle image and returns the prediction.

### Request

```text
multipart/form-data
```

### Example

```text
POST /predict
      ↓
   Image
      ↓
TensorFlow Model
      ↓
Prediction
```

### Example Response

```json
{
    "breed": "Gir",
    "confidence": 94.5,
    "imageUrl": "https://..."
}
```

---

## `GET /history`

Returns previously stored predictions.

---

# 💾 Local Storage

The frontend stores the latest prediction in browser localStorage.

Storage key:

```text
cattleeye_last_prediction
```

This allows the latest prediction to remain available after:

- Page refresh
- Navigating to History
- Returning to Home

The stored prediction is cleared when the user chooses:

```text
Analyze Another Image
```

---

# 📜 History

The History page provides access to previous predictions.

Current functionality includes:

- View predictions
- Search by breed
- Filter by date
- Pagination
- View prediction image
- View confidence score

---

# 📱 Mobile Support

CattleEye supports mobile image input.

Users can:

```text
📷 Take Photo
```

or:

```text
🖼️ Choose from Device
```

The application uses browser-supported image input and camera functionality.

---

# 🔒 Security

Never store sensitive credentials directly in source code.

Use environment variables for:

```text
MONGO_URL
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

Never commit your actual `.env` files.

---

# 🚫 .gitignore

Recommended `.gitignore`:

```gitignore
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

# OS
.DS_Store
```

---

# 📝 Environment Example Files

For contributors, create:

```text
backend/.env.example
```

```env
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

And:

```text
frontend/.env.example
```

```env
VITE_API_URL=http://localhost:8000
```

Developers can copy these files and create their own `.env` configuration.

---

# 🧪 Testing

After starting both servers, verify:

### Frontend

```text
http://localhost:5173
```

### Backend

```text
http://localhost:8000
```

### FastAPI Documentation

```text
http://localhost:8000/docs
```

Test the complete workflow:

```text
Open CattleEye
      ↓
Upload Cattle Image
      ↓
Preview Image
      ↓
Click Predict
      ↓
AI Processes Image
      ↓
Prediction Result
      ↓
Prediction Saved
      ↓
Open History
      ↓
View Previous Prediction
```

---

# 🐛 Common Problems

## MongoDB Connection Failed

Check:

```env
MONGO_URL=...
```

Make sure:

- MongoDB cluster is available
- Username is correct
- Password is correct
- IP address is allowed
- Connection string is valid

---

## Cloudinary API Key Error

If you see:

```text
Must supply api_key
```

check:

```env
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

Also make sure the file is located at:

```text
backend/.env
```

---

## CORS Error

If the frontend cannot communicate with the backend, make sure FastAPI allows the frontend origin:

```text
http://localhost:5173
```

---

## Backend Not Starting

Use:

```bash
python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

---

## Frontend Dependencies Missing

Run:

```bash
npm install
```

Then:

```bash
npm run dev
```

---

# 🚀 Future Improvements

Planned improvements include:

- [ ] Delete prediction from History
- [ ] Improve History functionality
- [ ] Analytics dashboard
- [ ] User authentication
- [ ] User-specific prediction history
- [ ] Improve prediction model
- [ ] Add more cattle breeds
- [ ] Better mobile navigation
- [ ] Improved error handling
- [ ] Prediction statistics
- [ ] Model performance monitoring
- [ ] Automated testing
- [ ] Production deployment
- [ ] API security

---

# 🌱 Future Vision

The long-term goal of CattleEye is to develop an AI-powered livestock intelligence platform.

Potential future capabilities:

```text
Breed Identification
        +
Health Analysis
        +
Cattle Management
        +
Prediction History
        +
Analytics
        +
Livestock Intelligence
```

---

# 🤝 Contributing

Contributions are welcome.

## 1. Fork the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd CattleEye2.0
```

## 2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

## 3. Make your changes

## 4. Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

## 5. Push the branch

```bash
git push origin feature/new-feature
```

## 6. Create a Pull Request

---

# 📄 License

This project is currently intended for educational, development, and demonstration purposes.

Add your preferred open-source license if you decide to publish the project under one.

---

# ⭐ Support

If you find CattleEye useful, consider giving the repository a ⭐ on GitHub.

---

# 🐄 CattleEye 2.0

**AI-powered cattle breed identification — Upload. Analyze. Understand.**

Built with:

**React • FastAPI • TensorFlow • MongoDB • Cloudinary**
