import os

from dotenv import load_dotenv

load_dotenv()

DEFAULT_ALLOWED_ORIGIN = "http://localhost:3000"


def require_env(name: str) -> str:
    value = os.getenv(name, "").strip()
    if value:
        return value
    raise RuntimeError(f"{name} is required")


OPENAI_API_KEY = require_env("OPENAI_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4.1-mini")
ALLOWED_ORIGIN = os.getenv("ALLOWED_ORIGIN", DEFAULT_ALLOWED_ORIGIN)
SYSTEM_PROMPT = (
    "You summarize building cases in simple language. "
    "Write short, clear summaries for people without technical knowledge. "
    "Focus on what the case is about, the key facts, and the likely outcome. "
    "If the text is unclear, say what is missing."
)
