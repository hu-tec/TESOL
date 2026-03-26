import type { Applicant } from "../app/components/types";

const API_BASE_URL = "http://43.200.104.3:3000";

export async function submitApplication(
  applicant: Applicant
): Promise<{ success: boolean; applicant_id?: string }> {
  const response = await fetch(`${API_BASE_URL}/api/tesol`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(applicant),
  });
  if (!response.ok) {
    throw new Error(`서버 오류: ${response.status}`);
  }
  return response.json();
}
