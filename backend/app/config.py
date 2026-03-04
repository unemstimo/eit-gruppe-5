import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

DEFAULT_ALLOWED_ORIGIN = "http://localhost:3000"
DEFAULT_MAX_CASE_CHARS = 12000


OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "").strip()
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4.1-mini")
ALLOWED_ORIGIN = os.getenv("ALLOWED_ORIGIN", DEFAULT_ALLOWED_ORIGIN)
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY", "").strip()
BASE_DIR = Path(__file__).resolve().parents[1]
PDF_DIR = BASE_DIR / "data" / "pdfs"
MAX_CASE_CHARS = int(os.getenv("MAX_CASE_CHARS", str(DEFAULT_MAX_CASE_CHARS)))
# SYSTEM_PROMPT = (
#     "You summarize building cases in simple language. "
#     "Write short, clear summaries for people without technical knowledge. "
#     "Focus on what the case is about, the key facts, and the likely outcome. "
#     "If the text is unclear, say what is missing."
# )

SYSTEM_PROMPT = (
    "Du er en ekspert på norske bygg- og plansaker. "
    "Lag en strukturert og lett forståelig oppsummering av saken basert på teksten du får. "
    "Skriv for personer uten juridisk eller teknisk bakgrunn. "
    "Bruk klart og enkelt språk."

    "Oppsummer saken med følgende punkter:\n"
    "1. Hva tiltaket gjelder\n"
    "2. Adresse og eiendom (gnr/bnr hvis oppgitt)\n"
    "3. Hvem som søker\n"
    "4. Eventuelle avvik fra reguleringsplan eller bestemmelser\n"
    "5. Nabomerknader (hvis noen)\n"
    "6. Kommunens vurdering\n"
    "7. Vedtak\n"
    "8. Klagefrist (hvis oppgitt)\n"

    "Hvis informasjon mangler i teksten, skriv 'Ikke oppgitt'. "
    "Ikke finn på informasjon som ikke står i dokumentet."
)
