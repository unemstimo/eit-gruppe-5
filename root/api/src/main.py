from fastapi import FastAPI

from src.endpoints.google_maps import router as google_maps_router

app = FastAPI()
app.include_router(google_maps_router)

@app.get("/")
def root():
    return {"message": "API is running"}
