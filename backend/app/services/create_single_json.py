import sys
from pathlib import Path
import os
import csv

BACKEND_ROOT = Path(__file__).resolve().parents[2]
PROJECT_ROOT = BACKEND_ROOT.parent
sys.path.insert(0, str(BACKEND_ROOT))

from app.services.case_files import case_text
from app.services.llm_service import summarize_case


def create_json(case_path):
    folder_name = os.path.basename(case_path)

    json = {}

    case_name, text = case_text(folder_name)
    summary = summarize_case(text)

    # hente ut datoer, title og adresse
    links_csv_path = PROJECT_ROOT / "crawler" / "relevante_lenker.csv"
    with open(links_csv_path, "r", newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["title"] == case_name:
                json["title"] = row["title"]
                json["frist_for_innspill"] = row["frist_for_innspill"]
                json["sist_oppdatert"] = row["sist_oppdatert"]
                break

    json["summary"] = summary.summary

    return json 