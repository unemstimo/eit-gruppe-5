import json
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

from fastapi import HTTPException

from app.config import GOOGLE_MAPS_API_KEY


def geocode(address: str) -> dict:
    if not GOOGLE_MAPS_API_KEY:
        raise HTTPException(status_code=500, detail="GOOGLE_MAPS_API_KEY is missing")

    clean_address = address.strip()
    if not clean_address:
        raise HTTPException(status_code=400, detail="address cannot be empty")

    url = "https://maps.googleapis.com/maps/api/geocode/json?" + urlencode(
        {"address": clean_address, "key": GOOGLE_MAPS_API_KEY}
    )

    try:
        with urlopen(url, timeout=10) as response:
            return json.load(response)
    except HTTPError as exc:
        raise HTTPException(status_code=exc.code, detail="Google Maps request failed") from exc
    except URLError as exc:
        raise HTTPException(status_code=502, detail="Google Maps request failed") from exc
