import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.services.case_files import case_text
from app.services.llm_service import summarize_case


def main() -> None:
    folder_name = "Leirfossvegen 43, detaljregulering"
    case_name, text = case_text(folder_name)
    summary = summarize_case(text)

    print(f"Case: {case_name}")
    print()
    print(summary.summary)


if __name__ == "__main__":
    main()
