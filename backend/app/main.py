from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.config import ALLOWED_ORIGIN
from app.models.schemas import SummaryRequest, SummaryResponse
from app.services.google_maps import geocode
from app.services.llm_service import summarize_case

app = FastAPI(title="Building Case Summary API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[ALLOWED_ORIGIN],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/google-maps/geocode")
def google_maps_geocode(address: str) -> dict:
    return geocode(address)


@app.post("/summarize", response_model=SummaryResponse)
def summarize(request: SummaryRequest) -> SummaryResponse:
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="text cannot be empty")

    try:
        return summarize_case(request.text)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"LLM error: {exc}") from exc
