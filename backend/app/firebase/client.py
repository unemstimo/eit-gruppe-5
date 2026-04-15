import firebase_admin
from firebase_admin import credentials, firestore
from pathlib import Path
import os


def _credentials_path() -> Path:
    env_path = os.getenv("FIREBASE_CREDENTIALS_PATH", "").strip()
    if env_path:
        return Path(env_path).expanduser().resolve()
    return Path(__file__).resolve().with_name("credentials.json")

def get_db():
    if not firebase_admin._apps:
        cred = credentials.Certificate(str(_credentials_path()))
        firebase_admin.initialize_app(cred)
    return firestore.client()