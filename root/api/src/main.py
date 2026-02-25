from fastapi import FastAPI
from dotenv import load_dotenv
import uvicorn

from src.endpoints.google_maps import router as google_maps_router

load_dotenv()
API_HOST = "127.0.0.1"
API_PORT = 8000

app = FastAPI()
app.include_router(google_maps_router)

@app.get("/")
def root():
    return {"message": "API is running"}

# Use this command to run the backend: uvicorn src.main:app --reload (make sure that you are in the same folder in the terminal)
if __name__ == "__main__":
    uvicorn.run("src.main:app", host=API_HOST, port=API_PORT, reload=True)
