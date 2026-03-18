from pathlib import Path

from pypdf import PdfReader

from app.config import MAX_CASE_CHARS, PDF_DIR


def list_case_folders() -> list[Path]:
    return sorted(path for path in PDF_DIR.iterdir() if path.is_dir())


def pick_case_folder(name: str | None = None) -> Path:
    if name:
        path = PDF_DIR / name
        if path.is_dir():
            return path
        raise FileNotFoundError(f"Case folder not found: {name}")

    folders = list_case_folders()
    if not folders:
        raise FileNotFoundError(f"No case folders found in {PDF_DIR}")
    return folders[0]


def read_pdf(path: Path) -> str:
    pages = [page.extract_text() or "" for page in PdfReader(path).pages]
    return "\n".join(page.strip() for page in pages if page.strip()).strip()


def case_documents(folder: Path) -> list[Path]:
    return sorted(folder.glob("*.pdf"))


def case_text(folder_name: str | None = None) -> tuple[str, str]:
    folder = pick_case_folder(folder_name)
    parts: list[str] = []

    for path in case_documents(folder):
        text = read_pdf(path)
        if not text:
            continue
        parts.append(f"{path.stem}\n{text}")
        joined = "\n\n".join(parts)
        if len(joined) >= MAX_CASE_CHARS:
            return folder.name, joined[:MAX_CASE_CHARS]

    if not parts:
        raise ValueError(f"No readable PDF text found in {folder}")

    return folder.name, "\n\n".join(parts)
