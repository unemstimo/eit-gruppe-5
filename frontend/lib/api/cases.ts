const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

export type CaseItem = {
  id: string;
  title?: string;
  summary?: string;
  frist_for_innspill?: string;
  sist_oppdatert?: string;
};

type CasesResponse = {
  cases: CaseItem[];
};

export async function getCases(): Promise<CasesResponse> {
    const res = await fetch(`${API_BASE}/cases`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch cases");
  return res.json();
}

export async function getCase(caseId: string): Promise<CaseItem> {
    const res = await fetch(`${API_BASE}/cases/${encodeURIComponent(caseId)}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch case");
    return res.json();
}