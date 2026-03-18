from app.firebase.client import get_db
from datetime import datetime, timezone

def save_case(case_id, case_data: dict):
    db = get_db()
    
    doc_ref = db.collection("cases").document(case_id)
    doc_ref.set({
        **case_data,
        "updatedAt": datetime.now(timezone.utc).isoformat()
    })