import { useLocation } from "react-router";
import { toast } from "sonner";
import { ExpertApplicationForm } from "./ExpertApplicationForm";
import { submitApplication } from "../../lib/api";
import type { Applicant } from "./types";

const PATH_TYPE_MAP: Record<string, string> = {
  "level-test": "레벨테스트",
  "tip": "테스트 TIP 신청",
  "corporate": "1:1문의",
  "seminar": "설명회신청",
  "orientation": "수업신청",
};

export function ApplyPage() {
  const location = useLocation();
  const pathSegment = location.pathname.split("/apply/")[1] || "";
  const defaultType = PATH_TYPE_MAP[pathSegment] || "수업신청";

  const handleSubmit = async (applicant: Applicant) => {
    try {
      await submitApplication(applicant);
      toast.success("신청서가 제출되었습니다. 담당자가 곧 연락드리겠습니다.");
    } catch {
      toast.error("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div className="py-8 px-4">
      <ExpertApplicationForm
        onSubmit={handleSubmit}
        defaultApplicationType={defaultType}
      />
    </div>
  );
}
