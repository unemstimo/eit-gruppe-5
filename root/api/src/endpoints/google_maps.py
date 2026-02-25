import json
import os
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/google-maps")


@router.get("/geocode")
def geocode(address: str):
    api_key = os.getenv("GOOGLE_MAPS_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="Request failed")

    clean_address = address.strip()
    if not clean_address:
        raise HTTPException(status_code=400, detail="Request failed")

    url = "https://maps.googleapis.com/maps/api/geocode/json?" + urlencode(
        {"address": clean_address, "key": api_key}
    )
    try:
        with urlopen(url, timeout=10) as response:
            return json.load(response)
    except HTTPError as exception:
        raise HTTPException(status_code=exception.code, detail="Request failed") from exception
    except URLError as exception:
        raise HTTPException(status_code=502, detail="Request failed") from exception
