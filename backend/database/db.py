import gridfs
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

url = os.getenv("MONGO_URL")

print("Mongo Loaded:", bool(url))

client = MongoClient(url)

try:
    client.admin.command("ping")
    print("✅ MongoDB Connected Successfully")
except Exception as e:
    print("❌ MongoDB Connection Failed")
    print(e)

db = client["cattleeye"]

fs = gridfs.GridFS(db)

predictions = db["predictions"]
users = db["users"]




# import gridfs
# from pymongo import MongoClient
# from dotenv import load_dotenv
# import os

# load_dotenv()

# url=os.getenv(
# "MONGO_URL"
# )

# print(
# "Mongo Loaded:",
# bool(url)
# )

# client=MongoClient(url)

# db=client.cattleeye

# fs = gridfs.GridFS(db)

# predictions=db.predictions

# users=db.users

