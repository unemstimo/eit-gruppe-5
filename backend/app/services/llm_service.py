from openai import OpenAI

from app.config import OPENAI_API_KEY, OPENAI_MODEL, SYSTEM_PROMPT
from app.models.schemas import SummaryResponse

client = OpenAI(api_key=OPENAI_API_KEY)


def summarize_case(text: str) -> SummaryResponse:
    response = client.responses.create(
        model=OPENAI_MODEL,
        instructions=SYSTEM_PROMPT,
        input=text,
    )
    summary = (response.output_text or "").strip() or "No summary available."
    return SummaryResponse(summary=summary)
