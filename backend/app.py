from fastapi import FastAPI
from database.db import predictions 
from datetime import datetime
from fastapi import UploadFile
from fastapi.middleware.cors import CORSMiddleware
from database.db import fs
import cloudinary.uploader
from cloudinary_config import *
import tempfile
import os
from fastapi import FastAPI, UploadFile, File
from PIL import Image
import numpy as np

from predict import predict_image

app = FastAPI()

# ADD THIS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "CattleEye API Running"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    # Save uploaded image temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as temp:

        temp.write(await file.read())

        temp_path = temp.name

    # Upload to Cloudinary
    upload_result = cloudinary.uploader.upload(
        temp_path,
        folder="CattleEye"
    )

    image_url = upload_result["secure_url"]

    # Read image for TensorFlow prediction
    image = Image.open(temp_path).convert("RGB")
    image = np.array(image)

    result = predict_image(image)

    # Delete temporary file
    os.remove(temp_path)

    # Save prediction in MongoDB
    predictions.insert_one({

        "imageUrl": image_url,

        "breed": result["breed"],

        "confidence": result["confidence"],

        "createdAt": datetime.utcnow()

    })

    return {

        "imageUrl": image_url,

        "breed": result["breed"],

        "confidence": result["confidence"]

    }

@app.get("/health")
def health():

    return {

        "status":"healthy",

        "model":"loaded"

    }


@app.get("/history")
def history():

    data = []

    cursor = predictions.find().sort("createdAt", -1)

    for item in cursor:
        item["_id"] = str(item["_id"])
        data.append(item)

    return data