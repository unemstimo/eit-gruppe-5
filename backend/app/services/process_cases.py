import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[2]
PROJECT_ROOT = BACKEND_ROOT.parent
sys.path.insert(0, str(BACKEND_ROOT))

from app.services.create_single_json import create_json
from app.services.save_case import save_case
from app.config import PDF_DIR

def process_case(case_path):
    case_data = create_json(case_path)
    case_id = case_path.name
    save_case(case_id, case_data)
    
def process_cases(case_path):
    for case_folder in sorted(case_path.iterdir()):
        if case_folder.is_dir():
            try:
                process_case(case_folder)
            except (FileNotFoundError, ValueError) as exc:
                print(f"Skipping {case_folder.name}: {exc}")

if __name__ == "__main__":
    process_cases(PDF_DIR)